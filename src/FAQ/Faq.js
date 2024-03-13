import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BasicButtons from "../Component/SimpleContainer";
import BasicAccordionItem from "./FaqItem";
import Box from "@mui/material/Box";

export default function FAQ() {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: 8,
        borderTop: 8,
        borderColor: "#292929",
      }}
    >
      <Container style={{ color: "White" }} maxWidth="lg">
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={"8vh"}
          paddingBottom={"2vh"}
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>

        <BasicAccordionItem
          Title="What is Netflix?"
          Desc="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
          Desc2="You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        />
        <BasicAccordionItem
          Title="How much does Netflix cost?"
          Desc="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
        />
        <BasicAccordionItem
          Title="Where can I watch?"
          Desc="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          Desc2="You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <BasicAccordionItem
          Title="How do I cancel?"
          Desc="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <BasicAccordionItem
          Title="What can I watch on Netflix?"
          Desc="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <BasicAccordionItem
          Title="Is Netflix good for kids?"
          Desc="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
          Desc2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
"
        />
        <Typography
          variant="h6"
          textAlign={"center"}
          marginTop={"8vh"}
          gutterBottom
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <BasicButtons />
      </Container>
    </Box>
  );
}
