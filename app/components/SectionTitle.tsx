import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
