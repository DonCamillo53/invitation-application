"use client";
import styles from "./Layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

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
          <Link href={"/event"}>
            <Image
              src="/icons8-for-you-96.png"
              width={30}
              height={30}
              alt="Invitation"
            />
            Event
          </Link>
          <button onClick={() => signOut()}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
}
