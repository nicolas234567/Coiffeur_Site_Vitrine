export default function Footer() {
  return (
    <footer>
      <div className="footer_inner">
        <div className="footer_grid">

          <div>
            <p className="footer_brand">Élise <span>Coiffure</span></p>
            <p className="footer_tagline">
              Votre salon de coiffure à Soisy-sur-Seine.<br />
              Coupe, couleur, soin — depuis 2005.
            </p>
          </div>

          <div>
            <p className="footer_col_title">Adresse</p>
            <p className="footer_col_text">
              12 rue des Lilas<br />
              91450 Soisy-sur-Seine<br />
              Tél : 01 23 45 67 89
            </p>
          </div>

          <div>
            <p className="footer_col_title">Contact</p>
            <p className="footer_col_text">
              <a href="mailto:contact@elisecoiffeur.fr">contact@elisecoiffeur.fr</a><br />
              <a href="#reservation">Réserver en ligne</a>
            </p>
          </div>

        </div>

        <div className="footer_bottom">
          <span>© 2025 Salon Élise. Tous droits réservés.</span>
          <span>
            Créé par{" "}
            <a href="https://nicolasbregevin.netlify.app/" target="_blank" rel="noopener noreferrer">
              Nicolas Bregevin
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
