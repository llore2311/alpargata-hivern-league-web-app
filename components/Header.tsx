"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/calendario", label: "Calendario" },
  { href: "/partidos", label: "Partidos" },
  { href: "/clasificaciones", label: "Clasificaciones" },
  { href: "/estadisticas", label: "Estadisticas" },
  { href: "/equipos", label: "Equipos" },
  { href: "/jugadores", label: "Jugadores" },
  { href: "/reglamento", label: "Reglamento" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="brand-row">
        <div>
          <h1 className="brand-title">Alpargata Hivern League</h1>
          <p className="brand-subtitle">Torneo anual de baloncesto</p>
        </div>
        <div className="brand-badge">AH</div>
      </div>

      <nav className="nav-row" aria-label="Navegacion principal">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
