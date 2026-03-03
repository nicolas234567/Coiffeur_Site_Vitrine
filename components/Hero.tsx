import Image from "next/image";

export default function Hero() {
  return (
    <main className="hero">
        <h1>Elise coiffure - Salon de coiffure Professionnel pour femme</h1>

        <span className="images_left">
          <Image
              src="/images/coiffure_laque.jpg"
              alt="coiffure_laque"
              width={800}
              height={600}
              className="hero_image"
            />
        <span className="texte_right">
          Bienvenue au Salon Élise, votre salon de coiffure à Soisy-sur-seine. 
          <br />Notre équipe de professionnels vous accueille dans un cadre chaleureux pour sublimer votre style.
          <br />Coupe, coloration, soin — nous prenons soin de vous.
        </span>
        </span>
        <span className="images_right">
          <span className="texte_left" id="tarifs">
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
          </span>
          <Image
              src="/images/coiffure_carré.jpg"
              alt="coiffure_carré"
              width={600}
              height={200}
              className="hero_image"
            />
        </span>
    </main>
  );}