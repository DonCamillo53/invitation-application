import styles from "./Layout.module.css";
import Link from "next/link";
import Image from "next/image";

export function Layout({ children }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>
            <Image
              src="/icons8-dashboard-96.png"
              width={30}
              height={30}
              alt="Dashboard"
            />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href={"/contacts"}>
            <Image
              src="/icons8-contacts-96.png"
              width={30}
              height={30}
              alt="Contacts"
            />
            Contacts
          </Link>
        </li>
        <li>
          <Link href={"/invitation"}>
            <Image
              src="/icons8-for-you-96.png"
              width={30}
              height={30}
              alt="Invitation"
            />
            Invitation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
