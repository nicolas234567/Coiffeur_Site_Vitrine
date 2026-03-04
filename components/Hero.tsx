import Image from "next/image";

export default function Hero() {
  return (
    <main className="hero">
        <h1>Elise coiffure - Salon de coiffure Professionnel pour femme</h1>

        <div className="images_container">
          <div>
            <Image
                src="/images/coiffure_laque.jpg"
                alt="coiffure_laque"
                width={800}
                height={600}
                className="hero_images"
              />
          </div>
          <div className="texte">
            Bienvenue au Salon Élise, votre salon de coiffure à Soisy-sur-Seine.  
            Notre équipe de professionnels vous accueille dans un cadre chaleureux et élégant pour révéler toute la beauté de votre style.  
            Coupe, coloration ou soin capillaire, nous mettons notre expertise au service de votre satisfaction et de la santé de vos cheveux.
          </div>
        </div>
        <div className="images_container">
          <div className="texte" id="tarifs">
            Nos tarifs :<br /><br />

            Coupe femme : 30€<br />
            Coupe homme : 22€<br />
            Coupe enfant (-12 ans) : 18€<br /><br />

            Coloration racines : 50€<br />
            Coloration complète : 65€<br />
            Balayage / mèches : 75€<br /><br />

            Soin nourrissant : 20€<br />
            Soin profond réparateur : 35€<br />
            Soin bot capillaire : 60€<br /><br />

            Coiffure événement (mariage, soirée) : à partir de 80€<br />
            Forfait mariée (essai + jour J) : 150€<br /><br />
          </div>
          <div>
            <Image
                src="/images/coiffure_carré.jpg"
                alt="coiffure_carré"
                width={600}
                height={200}
                className="hero_images"
              />
            </div>
        </div>
        <section className="reservation" id="reservation">
          <h2>Réserver un rendez-vous</h2>

          <form className="reservation_form">
            <input type="text" placeholder="Nom et prénom" />

            <input type="tel" placeholder="Téléphone" />

            <select>
              <option>Choisir un service</option>
              <option>Coupe femme</option>
              <option>Coloration</option>
              <option>Soin capillaire</option>
              <option>Coiffure événement</option>
            </select>

            <input type="date" />

            <textarea placeholder="Message (optionnel)"></textarea>

            <button>Confirmer la réservation</button>
          </form>
        </section>
    </main>
  );}