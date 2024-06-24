import HTMLtemplate from "./HTMLtemplate";
import { useState, useEffect } from "react";

import useSWR from "swr";

export function HTMLeditor({ handleSavingEmailDraft }) {
  const { data, error, isLoading } = useSWR("/api/emailDraft");
  const defaultSettings = {
    colorTheme: "#000000",
    headline: "Annual Band Night",
    colorHeadline: "#ffffff",
    imageUrl:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    greeting: "Hi",
    text: `Get ready to rock the night away at our much-anticipated Annual Band Night! Join us for an evening filled with electrifying performances, great company, and unforgettable memories. Whether you're a fan of classic rock, indie, or the latest hits, there's something for everyone. Don't miss out on this spectacular night of music and fun! We can't wait to see you there! Best,`,
    location: `The Roxy Theatre
  9009 West Sunset Blvd.
  West Hollywood, CA 90069`,
    date: `2030-01-01`,
    time: "20:15",
  };
  const [editor, setEditor] = useState(defaultSettings);

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        setEditor(data[0]);
      } else {
        setEditor(data);
      }
    }
  }, [data]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    setEditor((prevState) => ({
      ...prevState,
      ...formDataObject,
    }));

    handleSavingEmailDraft({
      ...editor,
      ...formDataObject,
      _id: "666c563401196d2f5def850d",
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error loading data</h1>;
  }

  return (
    <div
      className="main_container"
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   height: "100vh",
      //   justifyContent: "space-between",
      // }}
    >
      <h2 className="floating_headline">Event Editor</h2>
      <div
        className="permanent_div"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(245, 245, 245)",
          margin: "0",
          borderRadius: " 10px 0 0 10px",
        }}
      >
        <div
          style={{
            overflow: "scroll",
            height: "100%",
            resize: "horizontal",
            width: "50%",
            minWidth: "400px",
            maxWidth: "90%",
          }}
        >
          <HTMLtemplate settingsData={editor} />
        </div>
      </div>
      <div className="editor_panel">
        <form onSubmit={handleFormSubmit} className="editor_form">
          <div className="form_group">
            <label htmlFor="headline">Headline Text</label>
            <input
              name="headline"
              type="text"
              value={editor.headline}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="colorHeadline">Color Headline</label>
            <input
              name="colorHeadline"
              type="color"
              value={editor.colorHeadline}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="greeting">Greeting</label>
            <input
              name="greeting"
              type="text"
              value={editor.greeting}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              value={editor.text}
              onChange={handleInputChange}
              rows={20}
            />
          </div>
          <div className="form_group">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              type="date"
              value={editor.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="time">Time</label>
            <input
              name="time"
              type="time"
              value={editor.time}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="colorTheme">Color Theme</label>
            <input
              name="colorTheme"
              type="color"
              value={editor.colorTheme}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              name="imageUrl"
              type="text"
              value={editor.imageUrl}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="primary_button">
            Save Draft
          </button>
        </form>
        <button
          onClick={() => setEditor(defaultSettings)}
          className="secondary_button"
          style={{ marginBottom: "50px" }}
        >
          Reset Template
        </button>
        <button
          onClick={async () => await fetch("/api/sendEmail")}
          className="secondary_button"
          style={{ marginBottom: "50px" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

async function handleSavingEmailDraft(draft) {
  try {
    const response = await fetch("/api/emailDraft", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(draft),
    });

    if (!response.ok) {
      throw new Error("Failed to save draft");
    }

    const result = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
