import HTMLtemplate from "./HTMLtemplate";
import { useState } from "react";

export function HTMLeditor() {
  const [editor, setEditor] = useState({
    colorTheme: "0,0,0",
    headline: "Annual Band Night",
    headlineColor: "white",
    imageUrl:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    greeting: "Hi",
    text: `Get ready to rock the night away at our much-anticipated Annual Band Night! Join us for an evening filled with electrifying performances,
            great company, and unforgettable memories. Whether you're a fan of
            classic rock, indie, or the latest hits, there's something for
            everyone. Don't miss out on this spectacular night of music and fun!
            We can't wait to see you there! Best,`,
  });
  console.log(editor);
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setEditor((prevState) => ({
      ...prevState,
      ...data,
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          width: "800px",
          justifyContent: "center",
          backgroundColor: "rgb(245, 245, 245)",
          padding: "30px",
        }}
      >
        <div style={{}}>
          <HTMLtemplate settingsData={editor} />
        </div>
      </div>
      <div>
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

          <button type="submit" className="secondary_button">
            Save Draft
          </button>
        </form>
        <button className="primary_button">Send Invitation</button>
      </div>
    </div>
  );
}
