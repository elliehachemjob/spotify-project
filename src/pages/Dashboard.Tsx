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
import "../App.css";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState<string>("a");
  const [value, setValue] = useState<any>(2);
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
      {/* <div>
        <SearchComponent searchQuery={searchQuery} onChange={searchArtist} />
        {items
          ? items.artists?.items
              ?.filter((item: any) =>
                item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
              )
              .map((filteredItem: any) => {
                return (
                  <div>
                    <li>
                      Artist Name: {filteredItem.name}
                      Followers Count: {filteredItem.followers.total}
                      Popularity: {filteredItem.popularity}
                      Id: {filteredItem.id}
                    </li>
                    <li>
                      {filteredItem.images
                        .filter((img: any) => img.height === 160)
                        .map((img: any) => {
                          return <img src={img.url} />;
                        })}
                    </li>
                  </div>
                );
              })
          : null}
      </div>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=" />

          <Typography>Tom Petty</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            1000 followers
          </Typography>

          <Typography
            sx={{ position: "relative", top: 30 }}
            color="text.secondary"
          >
            63 tracks
          </Typography>
          <Rating
            style={{ position: "relative", top: 25, right: 4.5 }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </CardContent>
      </Card> */}

      <div>
        <SearchComponent searchQuery={searchQuery} onChange={searchArtist} />
        {items
          ? items.artists?.items
              ?.filter((item: any) =>
                item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
              )

              .map((filteredItem: any) => {
                return (
                  <Card sx={{ maxWidth: 300 }}>
                    <CardContent>
                      {filteredItem.images
                        .filter((img: any) => img.height === 160)
                        .map((img: any) => {
                          return <img src={img.url} />;
                        })}

                      <Typography>{filteredItem.name}</Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {filteredItem.followers.total} followers
                      </Typography>

                      <Typography
                        sx={{ position: "relative", top: 30 }}
                        color="text.secondary"
                      >
                        {filteredItem.tracks} tracks
                      </Typography>
                      <Rating
                        style={{ position: "relative", top: 25, right: 4.5 }}
                        name="simple-controlled"
                        value={filteredItem.popularity}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </CardContent>
                  </Card>
                );
              })
          : null}
      </div>
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
