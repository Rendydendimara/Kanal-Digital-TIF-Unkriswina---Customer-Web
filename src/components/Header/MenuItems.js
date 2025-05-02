import Image from "next/image";
import Link from "next/link";
import Services from "@/data/services";

export default function MenuItems(props) {
  return (
    <>
      <ul className="d-flex align-items-center w-100" style={{ gap: "60px" }}>
        <li className="p-static">
          <Link href="/">home</Link>
        </li>
        <li className="has-dropdown">
          <Link href="/services">Menu Pilihan</Link>
          <ul className="it-submenu submenu">
            {Services.map((d, i) => (
              <li key={i}>
                <Link href={`/${d.slug}`}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/tentang-kami">Tentang Kami</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </>
  );
}
