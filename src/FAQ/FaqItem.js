import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";

export default function BasicAccordionItem(props) {
  return (
    <Container style={{color: "White"}} maxWidth="lg">
      <Accordion style={{backgroundColor: "#2d2d2d" , color: "white", marginTop: "5px"}}>
        <AccordionSummary expandIcon={<AddIcon style={{color: "white"}} />}>
          <Typography variant="h5" margin={"2vh"}>{props.Title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography margin={"2vh"} variant="h5">
           {props.Desc}
           </Typography>
           <Typography  margin={"2vh"} style={{marginTop: "2vh"}} variant="h5">
           {props.Desc2}
           </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
