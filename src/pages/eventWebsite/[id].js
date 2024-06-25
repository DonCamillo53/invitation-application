// import useSWR from "swr";
// import EventWebsite from "../../../components/EventWebsite/EventWebsite";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// async function handleIsAttending(id, isAttending) {
//   try {
//     const response = await fetch(`/api/contacts`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id, isAttending }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update contact");
//     }

//     const result = await response.json();
//     console.log("Update successful:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function handleTracking(id) {
//   try {
//     const response = await fetch(`/api/contacts/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ emailLinkClicked: true }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to save tracking");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// export default function EventPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const { data: contactData, error: contactError } = useSWR(
//     id ? `/api/contacts/${id}` : null,
//     fetcher
//   );
//   const { data: websiteData, error: websiteError } = useSWR(
//     "/api/emailDraft",
//     fetcher
//   );

//   useEffect(() => {
//     if (id) {
//       setTimeout(() => {
//         handleTracking(id);
//       }, 10000);
//     }
//   }, [id]);

//   if (!contactData || !websiteData) {
//     return (
//       <div className="main_container_loading">
//         <div className="floating_headline_loading"></div>
//         <p>Loading...</p>;
//       </div>
//     );
//   }

//   if (contactError || websiteError) {
//     return <h1>Error loading data</h1>;
//   }

//   return (
//     <EventWebsite
//       handleIsAttending={handleIsAttending}
//       id={id}
//       contactsData={contactData}
//       data={websiteData}
//     />
//   );
// }

import useSWR from "swr";
import EventWebsite from "../../../components/EventWebsite/EventWebsite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

async function handleIsAttending(id, isAttending, setAttendingState) {
  try {
    const response = await fetch(`/api/contacts`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, isAttending }),
    });

    if (!response.ok) {
      throw new Error("Failed to update contact");
    }

    const result = await response.json();
    console.log("Update successful:", result);
    setAttendingState(isAttending);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function handleTracking(id) {
  try {
    const response = await fetch(`/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailLinkClicked: true }),
    });

    if (!response.ok) {
      throw new Error("Failed to save tracking");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function EventPage() {
  const [attendingState, setAttendingState] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const { data: contactData, error: contactError } = useSWR(
    id ? `/api/contacts/${id}` : null,
    fetcher
  );
  const { data: websiteData, error: websiteError } = useSWR(
    "/api/emailDraft",
    fetcher
  );

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        handleTracking(id);
      }, 10000);
    }
  }, [id]);

  useEffect(() => {
    if (contactData) {
      setAttendingState(contactData.isAttending);
    }
  }, [contactData]);

  if (!contactData || !websiteData) {
    return <h1>Loading...</h1>;
  }

  if (contactError || websiteError) {
    return <h1>Error loading data</h1>;
  }

  return (
    <EventWebsite
      handleIsAttending={(id, isAttending) =>
        handleIsAttending(id, isAttending, setAttendingState)
      }
      id={id}
      contactsData={contactData}
      data={websiteData}
      attendingState={attendingState}
    />
  );
}
