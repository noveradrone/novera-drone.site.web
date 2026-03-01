/*
README - Novera Drone Cookie Manager (Vanilla JS)

1) Placement
- Inclure `cookies.css` dans <head>
- Inclure `cookies.html` en fin de <body>
- Inclure `cookies.js` juste après `cookies.html` (ou en defer)

2) Scripts bloqués par consentement
- Déclarez vos scripts tiers ainsi :
  <script type="text/plain" data-cookiecategory="analytics" src="..."></script>
  <script type="text/plain" data-cookiecategory="marketing"> ... </script>
- Le script est injecté/exécuté seulement si la catégorie est acceptée.

3) Lien politique de confidentialité
- Modifier href="#" de #nd-cookie-policy-link dans cookies.html

4) Bouton "Gérer mes cookies" dans le footer
- Ajoutez un lien/bouton avec : data-open-cookie-settings
  Exemple : <button data-open-cookie-settings>Gérer mes cookies</button>
*/

(function () {
  const STORAGE_KEY = "noveradrone_cookie_consent";
  const CONSENT_VERSION = 1;

  const $banner = document.getElementById("nd-cookie-banner");
  const $modal = document.getElementById("nd-cookie-modal");
  const $dialog = document.getElementById("nd-cookie-dialog");
  const $analytics = document.getElementById("nd-cookie-analytics");
  const $marketing = document.getElementById("nd-cookie-marketing");

  if (!$banner || !$modal || !$dialog || !$analytics || !$marketing) return;

  let modalOpen = false;
  let hasSavedConsent = false;
  let lastFocus = null;

  function nowIso() {
    return new Date().toISOString();
  }

  function safeParse(value) {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  function migrateConsent(oldConsent) {
    // Stub de migration: adapter ici si la structure/version change.
    if (!oldConsent || typeof oldConsent !== "object") return null;
    return oldConsent;
  }

  function getStoredConsent() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = safeParse(raw);
    if (!parsed) return null;

    if (parsed.version !== CONSENT_VERSION) {
      const migrated = migrateConsent(parsed);
      if (!migrated) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      migrated.version = CONSENT_VERSION;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }

    return parsed;
  }

  function saveConsent(consent) {
    const payload = {
      version: CONSENT_VERSION,
      timestamp: nowIso(),
      essential: true,
      analytics: !!consent.analytics,
      marketing: !!consent.marketing
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    hasSavedConsent = true;
    applyConsent(payload);
    hideBanner();
    return payload;
  }

  function hideBanner() {
    $banner.hidden = true;
  }

  function showBanner() {
    $banner.hidden = false;
  }

  function isCategoryAllowed(consent, category) {
    if (category === "essential") return true;
    if (category === "analytics") return !!consent.analytics;
    if (category === "marketing") return !!consent.marketing;
    return false;
  }

  function activateDeferredScripts(consent) {
    const blockedScripts = document.querySelectorAll("script[type='text/plain'][data-cookiecategory]");

    blockedScripts.forEach((node) => {
      const category = node.getAttribute("data-cookiecategory");
      const alreadyExecuted = node.getAttribute("data-cookieexecuted") === "1";
      if (!category || alreadyExecuted || !isCategoryAllowed(consent, category)) return;

      const script = document.createElement("script");
      Array.from(node.attributes).forEach((attr) => {
        if (["type", "data-cookiecategory", "data-cookieexecuted"].includes(attr.name)) return;
        script.setAttribute(attr.name, attr.value);
      });

      if (node.src) script.src = node.src;
      if (node.textContent) script.textContent = node.textContent;

      node.setAttribute("data-cookieexecuted", "1");
      node.parentNode.insertBefore(script, node.nextSibling);
    });
  }

  function maybeInitGoogleAnalytics(consent) {
    const GA_MEASUREMENT_ID = "G-XXXXXXX";
    if (!consent.analytics || GA_MEASUREMENT_ID === "G-XXXXXXX") return;
    if (window.__ndGaLoaded) return;

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
    window.__ndGaLoaded = true;
  }

  function applyConsent(consent) {
    window.NOVERA_COOKIE_CONSENT = consent;
    activateDeferredScripts(consent);
    maybeInitGoogleAnalytics(consent);
  }

  function openModal() {
    lastFocus = document.activeElement;
    modalOpen = true;
    $modal.hidden = false;
    document.body.style.overflow = "hidden";
    $analytics.focus();
  }

  function closeModal() {
    modalOpen = false;
    $modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  function syncModalTogglesFromConsent(consent) {
    $analytics.checked = !!consent?.analytics;
    $marketing.checked = !!consent?.marketing;
  }

  function getModalSelection() {
    return {
      essential: true,
      analytics: !!$analytics.checked,
      marketing: !!$marketing.checked
    };
  }

  function trapFocus(event) {
    if (!modalOpen || event.key !== "Tab") return;
    const focusables = $dialog.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function onGlobalKeydown(event) {
    if (!modalOpen) return;
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    trapFocus(event);
  }

  function bindActions() {
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const openSettingsEl = target.closest("[data-open-cookie-settings]");
      if (openSettingsEl) {
        event.preventDefault();
        const current = getStoredConsent();
        syncModalTogglesFromConsent(current || { analytics: false, marketing: false });
        openModal();
        return;
      }

      const actionEl = target.closest("[data-nd-cookie-action]");
      const action = actionEl?.getAttribute("data-nd-cookie-action");
      if (!action) return;

      if (action === "accept-all") {
        saveConsent({ essential: true, analytics: true, marketing: true });
        closeModal();
        return;
      }

      if (action === "reject-all") {
        saveConsent({ essential: true, analytics: false, marketing: false });
        closeModal();
        return;
      }

      if (action === "open-customize") {
        const current = getStoredConsent();
        syncModalTogglesFromConsent(current || { analytics: false, marketing: false });
        openModal();
        return;
      }

      if (action === "save-customize") {
        saveConsent(getModalSelection());
        closeModal();
        return;
      }

      if (action === "cancel-customize") {
        closeModal();
        return;
      }

      if (action === "overlay-close") {
        closeModal();
      }
    });

    document.addEventListener("keydown", onGlobalKeydown);
  }

  function init() {
    bindActions();

    const consent = getStoredConsent();
    if (!consent) {
      hasSavedConsent = false;
      showBanner();
      return;
    }

    hasSavedConsent = true;
    hideBanner();
    applyConsent(consent);
  }

  init();
})();
