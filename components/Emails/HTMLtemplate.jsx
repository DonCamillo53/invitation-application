import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function HTMLtemplate() {
  const data = {
    backgroundColor: "0,0,0",
    headline: "Annual Band Night",
    headlineColor: "white",
    imageUrl:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    greeting: "Hi",
  };
  return (
    <div style={{ width: "100vw", height: "100%", maxWidth: "700px" }}>
      <div
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: `rgb(${data.backgroundColor},0.5)`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: `${data.headlineColor}`,
              fontWeight: "lighter",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            INVITATION
          </h2>
          <hr style={{ width: "50px", marginBottom: "30px" }} />
          <h1 style={{ color: "white", textAlign: "center" }}>
            {data.headline.toUpperCase()}
          </h1>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "90vw",
            padding: "10px",
            maxWidth: "650px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              marginTop: "50px",
            }}
          >
            {data.greeting} [Guest's Name],
          </p>
          <p
            style={{
              lineHeight: "27px",
            }}
          >
            Get ready to rock the night away at our much-anticipated Annual Band
            Night! Join us for an evening filled with electrifying performances,
            great company, and unforgettable memories. Whether you're a fan of
            classic rock, indie, or the latest hits, there's something for
            everyone. Don't miss out on this spectacular night of music and fun!
            We can't wait to see you there! Best,
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "20px",
              fontWeight: "bold",
              border: "none",
              backgroundColor: `rgb(${data.backgroundColor})`,
              color: `${data.headlineColor}`,
            }}
          >
            WILL ATTEND
          </button>
          <button
            style={{
              padding: "20px",
              fontWeight: "bold",
              border: "none",
              backgroundColor: `rgb(${data.backgroundColor})`,
              color: `${data.headlineColor}`,
            }}
          >
            WILL NOT ATTEND
          </button>
        </div>
      </div>
    </div>
  );
}
