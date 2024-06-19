import React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Heading,
  Hr,
  Text,
  Button,
} from "@react-email/components";

export default function HTMLtemplateForReactMail(
  {
    // settingsData,
    // contactData,
  }
) {
  const settingsData = {
    colorTheme: "#000000",
    headline: "Annual Band Night",
    colorHeadline: "#ffffff",
    // imageUrl:
    //   "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    greeting: "Hi",
    text: `Get ready to rock the night away at our much-anticipated Annual Band Night! Join us for an evening filled with electrifying performances, great company, and unforgettable memories. Whether you're a fan of classic rock, indie, or the latest hits, there's something for everyone. Don't miss out on this spectacular night of music and fun! We can't wait to see you there! Best,`,
    location: `The Roxy Theatre
  9009 West Sunset Blvd.
  West Hollywood, CA 90069`,
    date: `2030-01-01`,
    time: "20:15",
  };

  const contactData = {
    firstName: "Camillo",
    lastName: "Hochberg",
    email: "csmuellkippe@gmail.com",
  };
  return (
    <Html>
      <Body>
        <Container
          style={{
            width: "100vw",
            height: "100%",
            maxWidth: "700px",
            backgroundColor: "white",
          }}
        >
          <Section
          // style={{
          //   backgroundImage: `url(${settingsData.imageUrl})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   width: "100%",
          //   height: "50vh",
          //   position: "relative",
          // }}
          >
            <Container
              style={{
                backgroundColor: `rgba(${hex2rgb(
                  settingsData.colorTheme
                )},0.5)`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Heading
                as="h2"
                style={{
                  color: settingsData.colorHeadline,
                  fontWeight: "lighter",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                INVITATION
              </Heading>
              <Hr
                style={{
                  width: "50px",
                  marginBottom: "30px",
                  color: settingsData.colorHeadline,
                  border: `solid 0.1px ${settingsData.colorHeadline}`,
                }}
              />
              <Heading
                as="h1"
                style={{
                  color: settingsData.colorHeadline,
                  textAlign: "center",
                  maxWidth: "75%",
                  wordWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {settingsData.headline.toUpperCase()}
              </Heading>
              <Heading
                as="h3"
                style={{
                  color: settingsData.colorHeadline,
                  marginTop: "10px",
                  fontWeight: "lighter",
                }}
              >
                {settingsData.date}
              </Heading>
            </Container>
          </Section>
          <Container>
            <Section
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90vw",
                padding: "40px",
                maxWidth: "650px",
              }}
            >
              <Text
                style={{
                  alignSelf: "left",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                {settingsData.greeting} {contactData.firstName},
              </Text>
              <Text style={{ lineHeight: "27px" }}>{settingsData.text}</Text>
            </Section>
            <Section
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                padding: "50px 0",
                backgroundColor: "white",
              }}
            >
              <Button
                style={{
                  padding: "20px",
                  fontWeight: "bold",
                  border: "none",
                  backgroundColor: `rgb(${hex2rgb(settingsData.colorTheme)})`,
                  color: settingsData.colorHeadline,
                }}
              >
                WILL ATTEND
              </Button>
              <Button
                style={{
                  padding: "20px",
                  fontWeight: "bold",
                  border: "none",
                  backgroundColor: `rgb(${hex2rgb(settingsData.colorTheme)})`,
                  color: settingsData.colorHeadline,
                }}
              >
                WILL NOT ATTEND
              </Button>
            </Section>
            <Section
              style={{
                backgroundColor: settingsData.colorTheme,
                color: settingsData.colorHeadline,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "50px",
              }}
            >
              <Heading as="h4" style={{ marginBottom: "20px" }}>
                DATE
              </Heading>
              <Text style={{ marginBottom: "40px" }}>
                {settingsData.date}, {settingsData.time}
              </Text>
              <Heading as="h4" style={{ marginBottom: "20px" }}>
                LOCATION
              </Heading>
              <Text
                style={{
                  marginBottom: "40px",
                  maxWidth: "200px",
                  textAlign: "center",
                }}
              >
                {settingsData.location}
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  );
}
