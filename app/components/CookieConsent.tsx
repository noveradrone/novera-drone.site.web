export default function CookieConsent() {
  return (
    <>
      <div id="nd-cookie-banner" className="nd-cookie-banner" role="region" aria-label="Préférences cookies" hidden>
        <div className="nd-cookie-banner__content">
          <p className="nd-cookie-banner__text">
            🍪 Novera Drone utilise des cookies pour améliorer votre expérience, mesurer l’audience et optimiser nos
            contenus. Vous pouvez accepter, refuser ou personnaliser votre choix.{" "}
            <a id="nd-cookie-policy-link" href="/politique-de-confidentialite" className="nd-cookie-link">
              Politique de confidentialité
            </a>
          </p>

          <div className="nd-cookie-banner__actions">
            <button type="button" className="nd-btn nd-btn--ghost" data-nd-cookie-action="reject-all">
              Tout refuser
            </button>
            <button type="button" className="nd-btn nd-btn--ghost" data-nd-cookie-action="open-customize">
              Personnaliser
            </button>
            <button type="button" className="nd-btn nd-btn--primary" data-nd-cookie-action="accept-all">
              Tout accepter
            </button>
          </div>
        </div>
      </div>

      <div id="nd-cookie-modal" className="nd-cookie-modal" hidden>
        <div className="nd-cookie-modal__overlay" data-nd-cookie-action="overlay-close"></div>

        <section
          id="nd-cookie-dialog"
          className="nd-cookie-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nd-cookie-dialog-title"
          aria-describedby="nd-cookie-dialog-desc"
        >
          <h2 id="nd-cookie-dialog-title" className="nd-cookie-modal__title">
            Préférences cookies
          </h2>
          <p id="nd-cookie-dialog-desc" className="nd-cookie-modal__desc">
            Choisissez les catégories de cookies que vous souhaitez autoriser.
          </p>

          <div className="nd-cookie-modal__items">
            <div className="nd-cookie-item">
              <div>
                <p className="nd-cookie-item__label">Essentiels</p>
                <p className="nd-cookie-item__help">Nécessaires au fonctionnement du site.</p>
              </div>
              <label className="nd-switch" aria-label="Cookies essentiels toujours activés">
                <input type="checkbox" defaultChecked disabled />
                <span className="nd-switch__slider"></span>
              </label>
            </div>

            <div className="nd-cookie-item">
              <div>
                <p className="nd-cookie-item__label">Statistiques / Analytics</p>
                <p className="nd-cookie-item__help">Mesure d'audience et amélioration des contenus.</p>
              </div>
              <label className="nd-switch" aria-label="Activer ou désactiver les cookies analytics">
                <input id="nd-cookie-analytics" type="checkbox" />
                <span className="nd-switch__slider"></span>
              </label>
            </div>

            <div className="nd-cookie-item">
              <div>
                <p className="nd-cookie-item__label">Marketing</p>
                <p className="nd-cookie-item__help">Personnalisation publicitaire et suivi campagnes.</p>
              </div>
              <label className="nd-switch" aria-label="Activer ou désactiver les cookies marketing">
                <input id="nd-cookie-marketing" type="checkbox" />
                <span className="nd-switch__slider"></span>
              </label>
            </div>
          </div>

          <div className="nd-cookie-modal__actions">
            <button type="button" className="nd-btn nd-btn--ghost" data-nd-cookie-action="cancel-customize">
              Annuler
            </button>
            <button type="button" className="nd-btn nd-btn--primary" data-nd-cookie-action="save-customize">
              Enregistrer mes choix
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
