import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";

function App(props: any) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent onClick={props.linkHandler}>
        <CardMedia
          component="img"
          height="200"
          image={
            !props.image
              ? "https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg"
              : props.image
          }
        />
        <Typography>{props.name}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.followers}
        </Typography>

        <Rating
          style={{ position: "relative", top: 25, right: 4.5 }}
          name="simple-controlled"
          value={props.value}
          onChange={(event, newValue: any) => {
            props.setValue(newValue);
          }}
        />
      </CardContent>
    </Card>
  );
}

export default App;
