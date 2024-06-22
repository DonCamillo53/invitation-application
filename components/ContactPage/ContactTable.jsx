import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";

export default function ContactTable() {
  const columns = [
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "firstName",
      label: "First Name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "email",
      label: "E-Mail",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "isAttending",
      label: "Attending",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          if (value === true) {
            return (
              <Image
                src="/attending.png"
                alt="is attending"
                width="20"
                height="20"
              />
            );
          } else if (value === false) {
            return (
              <Image
                src="/notAttending.png"
                alt="is not attending"
                width="20"
                height="20"
              />
            );
          } else {
            return (
              <Image
                src="/undefindedAttendance.png"
                alt="Has not responded yet"
                width="20"
                height="20"
              />
            );
          }
        },
      },
    },
    {
      name: "isInvited",
      label: "Invited",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          if (value === true) {
            return (
              <Image
                src="/attending.png"
                alt="is attending"
                width="20"
                height="20"
              />
            );
          } else {
            return (
              <Image
                src="/notAttending.png"
                alt="Has not responded yet"
                width="20"
                height="20"
              />
            );
          }
        },
      },
    },
  ];

  const data = [
    {
      firstName: "Anna",
      lastName: "Peters",
      email: "anna.peters@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Lukas",
      lastName: "Schmidt",
      email: "lukas.schmidt@beispiel.com",
      isAttending: true,
      isInvited: true,
    },
    {
      firstName: "Marie",
      lastName: "Klein",
      email: "marie.klein@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Max",
      lastName: "Müller",
      email: "max.mueller@beispiel.com",
      isAttending: true,
      isInvited: true,
    },
    {
      firstName: "Sophie",
      lastName: "Wagner",
      email: "sophie.wagner@beispiel.com",
      isAttending: false,
      isInvited: true,
    },
    {
      firstName: "Jonas",
      lastName: "Schneider",
      email: "jonas.schneider@beispiel.com",
      isAttending: null,
      isInvited: false,
    },
    {
      firstName: "Laura",
      lastName: "Fischer",
      email: "laura.fischer@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Paul",
      lastName: "Weber",
      email: "paul.weber@beispiel.com",
      isAttending: null,
      isInvited: false,
    },
    {
      firstName: "Emilia",
      lastName: "Meyer",
      email: "emilia.meyer@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Felix",
      lastName: "Schulz",
      email: "felix.schulz@beispiel.com",
      isAttending: true,
      isInvited: true,
    },
    {
      firstName: "Hannah",
      lastName: "Hoffmann",
      email: "hannah.hoffmann@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Leon",
      lastName: "Bauer",
      email: "leon.bauer@beispiel.com",
      isAttending: null,
      isInvited: false,
    },
    {
      firstName: "Mia",
      lastName: "Richter",
      email: "mia.richter@beispiel.com",
      isAttending: false,
      isInvited: true,
    },
    {
      firstName: "Niklas",
      lastName: "Koch",
      email: "niklas.koch@beispiel.com",
      isAttending: true,
      isInvited: true,
    },
    {
      firstName: "Lea",
      lastName: "Wolf",
      email: "lea.wolf@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Julian",
      lastName: "Schäfer",
      email: "julian.schaefer@beispiel.com",
      isAttending: null,
      isInvited: false,
    },
    {
      firstName: "Clara",
      lastName: "Krause",
      email: "clara.krause@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "David",
      lastName: "Krüger",
      email: "david.krueger@beispiel.com",
      isAttending: true,
      isInvited: true,
    },
    {
      firstName: "Emma",
      lastName: "Meier",
      email: "emma.meier@beispiel.com",
      isAttending: null,
      isInvited: true,
    },
    {
      firstName: "Tom",
      lastName: "Lehmann",
      email: "tom.lehmann@beispiel.com",
      isAttending: null,
      isInvited: false,
    },
  ];

  const options = {
    filterType: "checkbox",
    elevation: 0,
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "Open Sans",
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            root: {},
            head: {
              fontWeight: "bold",
            },
            body: {},
            head: {
              margin: "20px 0",
            },
          },
        },
      },
    });
  return (
    <div>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
