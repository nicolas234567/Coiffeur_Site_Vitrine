export default function Hero() {
  return (
    <div className="hero">

      {/* Hero intro */}
      <div className="hero_intro">
        <span className="hero_tagline">Salon de coiffure — Soisy-sur-Seine</span>
        <h1 className="hero_title">Élise Coiffure</h1>
        <p className="hero_subtitle">Votre beauté, notre passion depuis 2005</p>
        <div className="hero_divider" />
      </div>

      {/* Section 1 : présentation + image */}
      <div className="images_container">
        <div className="texte">
          <p className="texte_heading">Un cadre chaleureux,<br />une expertise sincère</p>
          Bienvenue au Salon Élise, votre adresse de confiance à Soisy-sur-Seine.
          Notre équipe de professionnels vous accueille dans un espace élégant et apaisant,
          entièrement dédié à révéler votre style naturel.
          Coupe, coloration, soin capillaire — chaque prestation est réalisée avec soin,
          à votre écoute et au service de la santé de vos cheveux.
        </div>
        <div>
          <picture>
            <source srcSet="/images/coiffure_laque.webp" type="image/webp" />
            <img
              src="/images/coiffure_laque.jpg"
              alt="Coiffure laqué"
              width={800}
              height={600}
              className="hero_images"
            />
          </picture>
        </div>
      </div>

      {/* Section 2 : image + tarifs */}
      <div className="images_container">
        <div>
          <picture>
            <source srcSet="/images/coiffure_carré.webp" type="image/webp" />
            <img
              src="/images/coiffure_carré.jpg"
              alt="Coiffure carré"
              width={600}
              height={700}
              className="hero_images"
            />
          </picture>
        </div>

        <div className="pricing_section" id="tarifs">
          <p className="texte_heading">Nos tarifs</p>

          <div className="pricing_category">
            <p className="pricing_category_title">Coupe</p>
            <div className="pricing_row"><span>Femme</span><span className="pricing_price">30 €</span></div>
            <div className="pricing_row"><span>Homme</span><span className="pricing_price">22 €</span></div>
            <div className="pricing_row"><span>Enfant (− 12 ans)</span><span className="pricing_price">18 €</span></div>
          </div>

          <div className="pricing_category">
            <p className="pricing_category_title">Couleur</p>
            <div className="pricing_row"><span>Coloration racines</span><span className="pricing_price">50 €</span></div>
            <div className="pricing_row"><span>Coloration complète</span><span className="pricing_price">65 €</span></div>
            <div className="pricing_row"><span>Balayage / mèches</span><span className="pricing_price">75 €</span></div>
          </div>

          <div className="pricing_category">
            <p className="pricing_category_title">Soin</p>
            <div className="pricing_row"><span>Soin nourrissant</span><span className="pricing_price">20 €</span></div>
            <div className="pricing_row"><span>Soin réparateur profond</span><span className="pricing_price">35 €</span></div>
            <div className="pricing_row"><span>Botox capillaire</span><span className="pricing_price">60 €</span></div>
          </div>

          <div className="pricing_category">
            <p className="pricing_category_title">Événements</p>
            <div className="pricing_row"><span>Coiffure événement</span><span className="pricing_price">dès 80 €</span></div>
            <div className="pricing_row"><span>Forfait mariée (essai + jour J)</span><span className="pricing_price">150 €</span></div>
          </div>
        </div>
      </div>

      {/* Réservation */}
      <section className="reservation" id="reservation">
        <h2>Prendre rendez-vous</h2>
        <p className="reservation_subtitle">Réservez en ligne, nous vous confirmons sous 24 h</p>

        <form className="reservation_form">
          <input type="text" placeholder="Nom et prénom" />
          <input type="tel" placeholder="Téléphone" />
          <select defaultValue="">
            <option value="" disabled>Choisir un service</option>
            <option>Coupe femme</option>
            <option>Coupe homme</option>
            <option>Coupe enfant</option>
            <option>Coloration</option>
            <option>Soin capillaire</option>
            <option>Coiffure événement</option>
            <option>Forfait mariée</option>
          </select>
          <input type="date" />
          <textarea placeholder="Message (optionnel)" />
          <button type="submit">Confirmer la réservation</button>
        </form>
      </section>

    </div>
  );
}
