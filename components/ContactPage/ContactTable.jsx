import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";

export default function ContactTable({ data }) {
  const columns = [
    {
      name: "lastName",
      label: <p style={{ textTransform: "capitalize" }}>Last Name</p>,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "firstName",
      label: <p style={{ textTransform: "capitalize" }}>First Name</p>,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "email",
      label: <p style={{ textTransform: "capitalize" }}>E-Mail</p>,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "isAttending",
      label: <p style={{ textTransform: "capitalize" }}>Attending</p>,
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
      label: <p style={{ textTransform: "capitalize" }}>Invited</p>,
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
    {
      name: "emailLinkClicked",
      label: <p style={{ textTransform: "capitalize" }}>Read</p>,
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

            body: {},
            head: {
              padding: "0",
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
