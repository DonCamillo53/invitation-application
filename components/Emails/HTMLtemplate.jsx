import * as React from "react";

export default function HTMLtemplate({ settingsData }) {
  function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
            backgroundColor: `rgba(${hex2rgb(settingsData.colorTheme)}, 0.5)`,
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
              color: `${settingsData.colorHeadline}`,
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
              color: `${settingsData.colorHeadline}`,
              border: `solid 0.1px ${settingsData.colorHeadline}`,
            }}
          />
          <h1
            style={{
              color: `${settingsData.colorHeadline}`,
              textAlign: "center",
              maxWidth: "75%",
              wordWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {settingsData.headline.toUpperCase()}
          </h1>
          <h3
            style={{
              color: `${settingsData.colorHeadline}`,
              marginTop: "10px",
              fontWeight: "lighter",
            }}
          >
            {settingsData.date}
          </h3>
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
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            {settingsData.greeting} [Guest's Name],
          </p>
          <p
            style={{
              lineHeight: "27px",
              wordWrap: "break-word",
              wordBreak: "break-word",
              overflowWrap: "break-word",
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
            padding: "50px 0 50px 0",
            backgroundColor: "white",
          }}
        >
          <button
            style={{
              padding: "20px",
              fontWeight: "bold",
              border: "none",
              backgroundColor: `rgb(${hex2rgb(settingsData.colorTheme)})`,
              color: `${settingsData.colorHeadline}`,
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
              color: `${settingsData.colorHeadline}`,
            }}
          >
            WILL NOT ATTEND
          </button>
        </div>
        <div
          style={{
            backgroundColor: `${settingsData.colorTheme}`,
            color: `${settingsData.colorHeadline}`,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <h4 style={{ marginBottom: "20px" }}>DATE</h4>
          <p style={{ marginBottom: "40px" }}>
            {settingsData.date}, {settingsData.time}
          </p>
          <h4 style={{ marginBottom: "20px" }}>LOCATION</h4>
          <p
            style={{
              marginBottom: "40px",
              maxWidth: "200px",
              textAlign: "center",
              wordWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {settingsData.location}
          </p>
        </div>
      </div>
    </div>
  );
}
