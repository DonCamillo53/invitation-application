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
          <Link href={"/dashboard"}>
            <Image
              src="/Dashboard.png"
              width={30}
              height={30}
              alt="Dashboard"
            />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href={"/contacts"}>
            <Image
              src="/DuplicateContacts.png"
              width={30}
              height={30}
              alt="Contacts"
            />
            <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link href={"/event"}>
            <Image
              src="/WebsiteEditor.png"
              width={30}
              height={30}
              alt="Invitation"
            />
            <span>Event</span>
          </Link>
        </li>
      </ul>
      <ul className={styles.signOut}>
        <li>
          <button
            onClick={() => signOut()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Image src="/Logout.png" width={30} height={30} alt="Invitation" />
          </button>
          <span>SignOut</span>
        </li>
      </ul>
    </nav>
  );
}
