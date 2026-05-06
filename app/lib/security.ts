import { NextResponse } from "next/server";

type RateEntry = {
  count: number;
  resetAt: number;
};

type GlobalRateStore = Map<string, RateEntry>;

declare global {
  var __noveraRateStore: GlobalRateStore | undefined;
}

const rateStore: GlobalRateStore = globalThis.__noveraRateStore || new Map<string, RateEntry>();
globalThis.__noveraRateStore = rateStore;

export function getAllowedOrigins() {
  const configured =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://noveradrone.fr";

  const values = new Set<string>();

  const pushOrigin = (value?: string) => {
    if (!value) return;
    try {
      const url = value.startsWith("http") ? new URL(value) : new URL(`https://${value}`);
      values.add(url.origin);
      if (url.hostname.startsWith("www.")) {
        values.add(`${url.protocol}//${url.hostname.replace(/^www\./, "")}`);
      } else {
        values.add(`${url.protocol}//www.${url.hostname}`);
      }
    } catch {
      // Ignore invalid env values.
    }
  };

  pushOrigin(configured);
  pushOrigin("https://noveradrone.fr");

  if (process.env.NODE_ENV !== "production") {
    values.add("http://localhost:3000");
    values.add("http://127.0.0.1:3000");
  }

  return Array.from(values);
}

export function isAllowedOrigin(origin: string | null) {
  if (!origin) return false;
  return getAllowedOrigins().includes(origin);
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export function hasTrustedFetchSite(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (!fetchSite) return true;
  return ["same-origin", "same-site", "none"].includes(fetchSite);
}

export function validateRequestContext(request: Request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (origin && !isAllowedOrigin(origin)) return false;

  if (!origin && referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      if (!isAllowedOrigin(refererOrigin)) return false;
    } catch {
      return false;
    }
  }

  return hasTrustedFetchSite(request);
}

export function buildCorsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin");
  if (!origin || !isAllowedOrigin(origin)) {
    return {
      Vary: "Origin"
    } satisfies Record<string, string>;
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Admin-Token, X-Novera-Form, X-Novera-Cookie",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin"
  } satisfies Record<string, string>;
}

export function secureApiResponse(body: unknown, init?: ResponseInit, request?: Request) {
  const response = NextResponse.json(body, init);
  const corsHeaders = request ? buildCorsHeaders(request) : { Vary: "Origin" };

  Object.entries(corsHeaders).forEach(([key, value]) => response.headers.set(key, value));
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export function preflightResponse(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(request)
  });
}

export async function parseJsonWithLimit<T>(request: Request, maxBytes: number) {
  const raw = await request.text();
  const size = new TextEncoder().encode(raw).length;

  if (size > maxBytes) {
    throw new Error("PAYLOAD_TOO_LARGE");
  }

  return JSON.parse(raw) as T;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const entry = rateStore.get(key);

  if (!entry || entry.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count += 1;
  rateStore.set(key, entry);
  return true;
}
