import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const defaultCardStyle = {
  display: "inline-block",
  marginRight: "10px",
};

const clickedCardStyle = {
  display: "inline-block",
  marginRight: "10px",
  border: "1px solid #664de5",
};

function CardComponent(props) {
  const iconStyle =
    props.activeCard === props.title ? { color: "#664de5" } : null;
  return (
    <Card
      style={
        props.activeCard === props.title ? clickedCardStyle : defaultCardStyle
      }
    >
      <CardActionArea onClick={() => props.activeCardChanger(props.title)}>
        <CardHeader
          avatar={
            props.title === "For myself" ? (
              <PersonIcon fontSize="large" sx={iconStyle} />
            ) : (
              <GroupsIcon fontSize="large" sx={iconStyle} />
            )
          }
        />
        <CardContent>
          <Typography variant="h5" component="h5">
            {props.title}
          </Typography>
          <Typography variant="p" color="text.secondary">
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
