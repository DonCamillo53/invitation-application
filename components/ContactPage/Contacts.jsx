import styles from "./Contacts.module.css";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

const guests = [
  {
    firstName: "Anna",
    lastName: "Schmidt",
    email: "anna.schmidt@example.com",
    id: 1,
    isAttending: true,
  },
  {
    firstName: "Michael",
    lastName: "Müller",
    email: "michael.mueller@example.com",
    id: 2,
    isAttending: true,
  },
  {
    firstName: "Laura",
    lastName: "Weber",
    email: "laura.weber@example.com",
    id: 3,
    isAttending: false,
  },
  {
    firstName: "Johannes",
    lastName: "Fischer",
    email: "johannes.fischer@example.com",
    id: 4,
    isAttending: false,
  },
  {
    firstName: "Sabine",
    lastName: "Wagner",
    email: "sabine.wagner@example.com",
    id: 5,
    isAttending: null,
  },
  {
    firstName: "Thomas",
    lastName: "Becker",
    email: "thomas.becker@example.com",
    id: 6,
    isAttending: null,
  },
  {
    firstName: "Katrin",
    lastName: "Hoffmann",
    email: "katrin.hoffmann@example.com",
    id: 7,
    isAttending: true,
  },
  {
    firstName: "Peter",
    lastName: "Schäfer",
    email: "peter.schaefer@example.com",
    id: 8,
    isAttending: true,
  },
  {
    firstName: "Stefanie",
    lastName: "Bauer",
    email: "stefanie.bauer@example.com",
    id: 9,
    isAttending: false,
  },
  {
    firstName: "Daniela",
    lastName: "Keller",
    email: "daniela.keller@example.com",
    id: 10,
    isAttending: null,
  },
];

export default function Contacts() {
  return (
    <div>
      <Table aria-label="Guests Table" className={styles.contact_table}>
        <TableHeader>
          <TableColumn>Last Name</TableColumn>
          <TableColumn>First Name</TableColumn>
          <TableColumn>E-Mail</TableColumn>
          <TableColumn>Settings</TableColumn>
        </TableHeader>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest.id}>
              <TableCell>{guest.lastName}</TableCell>
              <TableCell>{guest.firstName}</TableCell>
              <TableCell>{guest.email}</TableCell>

              <TableCell>Test</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
