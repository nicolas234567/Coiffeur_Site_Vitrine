import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="nav_line">
        <span className="nav_logo">Élise <span>Coiffure</span></span>
        <div className="nav_links">
          <Link className="nav_link" href="#tarifs">Tarifs</Link>
          <Link className="nav_link nav_link_cta" href="#reservation">Réserver</Link>
        </div>
      </div>
    </nav>
  );
}
