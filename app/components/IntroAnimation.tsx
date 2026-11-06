/**
 * Animation d'entrée : le logo décolle comme un drone puis révèle le site.
 * - 100 % CSS (aucun JavaScript nécessaire pour qu'elle se termine) : pas d'impact sur l'indexation.
 * - Affichée une seule fois par visite (voir le script inline dans app/layout.tsx).
 * - Désactivée si l'utilisateur a demandé à réduire les animations.
 */
export default function IntroAnimation() {
  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-stage">
        <div className="intro-drone">
          <span className="intro-rotor intro-rotor-left" />
          <span className="intro-rotor intro-rotor-right" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png/logo_nav_cropped.png" alt="" width={300} height={190} className="intro-logo" />
        </div>
        <span className="intro-shadow" />
        <span className="intro-wind" />
      </div>
    </div>
  );
}
