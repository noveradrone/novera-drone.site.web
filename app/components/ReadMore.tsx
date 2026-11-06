/**
 * Affiche le premier paragraphe et replie les suivants derrière « Lire la suite ».
 * Le texte replié reste dans le HTML : il est toujours lu par Google.
 */
export default function ReadMore({ paragraphs }: { paragraphs: string[] }) {
  if (!paragraphs.length) return null;
  const [first, ...rest] = paragraphs;
  return (
    <>
      <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-300">{first}</p>
      {rest.length ? (
        <details className="group mx-auto mt-3 max-w-3xl">
          <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center text-sm font-medium text-blue-300 marker:hidden hover:text-blue-200">
            <span className="group-open:hidden">Lire la suite +</span>
            <span className="hidden group-open:inline">Réduire −</span>
          </summary>
          {rest.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-3 leading-relaxed text-slate-300">
              {paragraph}
            </p>
          ))}
        </details>
      ) : null}
    </>
  );
}
