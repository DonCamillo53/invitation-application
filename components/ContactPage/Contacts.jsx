import styles from "./Contacts.module.css";
import Image from "next/image";
import useSWR from "swr";
import { mutate } from "swr";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function Contacts() {
  const { data, isLoading } = useSWR("/api/contacts");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return;
  }
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
          {data.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.email}</TableCell>

              <TableCell>Test</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
