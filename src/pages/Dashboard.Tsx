import React, { useState, useEffect } from "react";
import SearchComponent from "../components/SearchComponent";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import ArtistCard from "../components/ArtistCard";
import "../App.css";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState<string>("a");
  const [value, setValue] = useState(2);
  const [items, setItems] = useState<any>();

  const searchArtist = (e: any) => {
    setSearchQuery(e.target.value);

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track%2Cartist`,
        {
          headers: {
            Authorization:
              "Bearer " +
              "BQBGWT-px2FRPl522lyrrfuTfSxHfThgJss6keHiy-7VvHqK0gRZ7RfPYXKzxW8ptR31icXj3yuwXkDbXeeBfAUbeBwFRN59owzX2_KDDAUQDHtop5669v4hsQn0kRYjhjPrCB2Oxap7wF_6ZsRswzcBqi1a_YbeIsA-mykTScpnAhSxww",
          },
        }
      )
      .then((response) => {
        setItems(response.data);
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <SearchComponent searchQuery={searchQuery} onChange={searchArtist} />
      {items
        ? items.artists?.items
            ?.filter((item: any) =>
              item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
            .map((filteredItem: any) => {
              return <li>{filteredItem.name}</li>;
            })
        : null}
    </div>
  );
}

export default Dashboard;

//later

{
  /* <pre>The popularity is {popularity}</pre>
<img src={image} style={{ width: 100, height: 100 }} />
<pre>The Followers is {followers}</pre>
<pre>The name is {name} </pre>

<button>Create</button>
</Link> */
}
