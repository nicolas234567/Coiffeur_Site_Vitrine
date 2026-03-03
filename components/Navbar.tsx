import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav_line">
        <span className="footer_center">Élise Coiffure Votre beauté, notre passion depuis 2005 </span>
        <span className="nav_right">
          <Link href="/">Accueil</Link>
          <Link href="#tarifs">Nos Tarifs</Link>
        </span>
      </div>
    </nav>
  );}