import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function HTMLtemplate({ settingsData }) {
  console.log("I am inside HTMLtemplate Props:", settingsData.colorTheme);

  function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }
  console.log(hex2rgb(settingsData.colorTheme));
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        maxWidth: "700px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${settingsData.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: `rgb(${hex2rgb(settingsData.colorTheme)},0.5)`,
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
              color: `${settingsData.headlineColor}`,
              fontWeight: "lighter",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            INVITATION
          </h2>
          <hr
            style={{
              width: "50px",
              marginBottom: "30px",
              color: `${settingsData.headlineColor}`,
              border: `solid 0.1px ${settingsData.headlineColor}`,
            }}
          />
          <h1
            style={{
              color: `${settingsData.headlineColor}`,
              textAlign: "center",
            }}
          >
            {settingsData.headline.toUpperCase()}
          </h1>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90vw",
            padding: "40px",
            maxWidth: "650px",
          }}
        >
          <p
            style={{
              alignSelf: "left",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            {settingsData.greeting} [Guest's Name],
          </p>
          <p
            style={{
              lineHeight: "27px",
            }}
          >
            {settingsData.text}
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
              backgroundColor: `rgb(${hex2rgb(settingsData.colorTheme)})`,
              color: `${settingsData.headlineColor}`,
            }}
          >
            WILL ATTEND
          </button>
          <button
            style={{
              padding: "20px",
              fontWeight: "bold",
              border: "none",
              backgroundColor: `rgb(${hex2rgb(settingsData.colorTheme)})`,
              color: `${settingsData.headlineColor}`,
            }}
          >
            WILL NOT ATTEND
          </button>
        </div>
      </div>
    </div>
  );
}
