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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [token, setToken] = useState<any>("");
  const [data, setData] = useState<any>([]);
  const [popularity, setPopularity] = useState<string>("");
  const [followers, setFollowers] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState(2);

  const [cards, setCards] = useState<any>([]);

  const searchArtist = (e: any) => {
    setSearchQuery(e.target.value);

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track%2Cartist`,
        {
          headers: {
            Authorization:
              "Bearer " +
              "BQDMm5J1Y_tQ-ANet7ZzmcpjZgseUYt07v_k2AcxlXO2ercapewXcPLTTXK44Dy-Qkaz_a-jaGvNRxfxQzrvGnGjlaGwC0VlkZcvYyK5auVLkzn-U4eOwQoEA8Yg-0h8ouwlbbMZVxgM1zE829GsRt_0yrFr4zqZRlZccyS458fD02JGzQ",
          },
        }
      )
      .then((response) => {
        console.log(
          // `main data  ${JSON.stringify(response)}`,
          `followers is ${JSON.stringify(
            response.data.artists.items[0].followers.total
          )}`,
          `image is ${JSON.stringify(
            response.data.artists.items[0].images[0].url
          )}`,
          `popularity is  ${JSON.stringify(
            response.data.artists.items[0].popularity
          )}`,
          `id is   ${JSON.stringify(response.data.artists.items[0].id)}`
        );

        setPopularity(
          JSON.stringify(response.data.artists.items[0].popularity)
        );
        setFollowers(
          JSON.stringify(response.data.artists.items[0].followers.total)
        );
        setId(JSON.stringify(response.data.artists.items[0].id));
        setName(JSON.stringify(response.data.artists.items[0].name));
        setImage(JSON.stringify(response.data.artists.items[0].images[0].url));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (name) setName(name.replace('"', ""));
  }, [name]);

  useEffect(() => {
    if (image) setImage(image.replace('"', ""));
  }, [image]);

  const linkHandler = () => {
    return <Link to="/artist/albums"></Link>;
  };

  return (
    <div className="container">
      <SearchComponent searchQuery={searchQuery} onChange={searchArtist} />

      <Link to="/artist/albums">
        <ArtistCard
          image={image}
          name={name}
          value={value}
          setValue={setValue}
          followers={followers}
        />
      </Link>
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
