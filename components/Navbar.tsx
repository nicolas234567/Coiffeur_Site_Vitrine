import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav_line">
        <span className="nav_center">Élise Coiffure Votre beauté, notre passion depuis 2005 </span>
        <span className="nav_right">
          <Link className="nav_link" href="/">Accueil</Link>
          <Link className="nav_link" href="#tarifs">Nos Tarifs</Link>
        </span>
      </div>
    </nav>
  );}