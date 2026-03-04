import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav_line">
        <div className="nav_center">Élise Coiffure Votre beauté, notre passion depuis 2005 </div>
        <div className="nav_right">
          <Link className="nav_link" href="#reservation">Réserver</Link>
          <Link className="nav_link" href="#tarifs">Nos Tarifs</Link>
        </div>
      </div>
    </nav>
  );}