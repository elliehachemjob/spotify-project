import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import "../App.css";

interface Props {}

function ArtistAlbums(props: Props) {
  const [albumName, setAlbumName] = useState<any>();
  const [releaseData, setReleaseDate] = useState<any>();
  const [totalTracks, setTotalTracks] = useState<any>();
  const [albumLink, setAlbumLink] = useState<any>();
  const [artistIncluded, setArtistIncluded] = useState<any>();
  const [albumCover, setAlbumCover] = useState<any>();
  const [items, setItems] = useState<any>();
  const [value, setValue] = useState<any>();

  const showArtistAlbums = () => {
    axios
      .get(
        `https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?include_groups=single%2Cappears_on&market=ES&limit=10&offset=5`,
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
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" onClick={showArtistAlbums}>
      hi
      {items
        ? items.items.map((item: any) => {
            return (
              <div>
                <Card className="item" sx={{ maxWidth: 300 }}>
                  <CardContent>
                    {item.images
                      .filter((img: any) => img.height === 300)
                      .map((img: any) => {
                        return (
                          <CardMedia
                            component="img"
                            height="200"
                            image={img.url}
                            alt="album cover"
                          />
                        );
                      })}

                    <Typography>{item.name}</Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {/* {item.name} */}
                    </Typography>
                    <Typography
                      sx={{ position: "relative", top: 35 }}
                      color="text.secondary"
                    >
                      {item.release_date}
                    </Typography>
                    <Typography
                      sx={{ position: "relative", top: 30 }}
                      color="text.secondary"
                    >
                      {item.total_tracks} tracks
                    </Typography>
                    <Typography
                      sx={{ position: "relative", top: 25 }}
                      color="text.secondary"
                    >
                      {item.artists.map((artistsIncluded: any) => {
                        return <span> {artistsIncluded.name} /</span>;
                      })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        window.open(item.external_urls.spotify);
                      }}
                      size="small"
                    >
                      Preview On Spotify
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ArtistAlbums;

// to check

{
  /* <pre> Album Name is {albumName}</pre>
      <pre> Release Data is {releaseData}</pre>
      <pre> Total Tracks are {totalTracks}</pre>
      <pre> Artist Inlcuded are {artistIncluded}</pre>
      <pre> Album Cover Is {albumCover}</pre>
      <pre
        onClick={() => {
          window.open(albumLink);
        }}
      >
        Click to see Albumn Preview
      </pre> */
}

{
  /* {items
        ? items.items.map((item: any) => {
            return (
              <div>
                <li>
                  {item.images
                    .filter((img: any) => img.height === 300)
                    .map((img: any) => {
                      return <img src={img.url} alt="image here" />;
                    })}
                </li>
                <li>
                  Artist Name: {item.name}
                  Release Date :{item.release_date}
                  Total Tracks: {item.total_tracks}
                  Spotify Album Link : {item.external_urls.spotify}
                </li>
                <div>
                  {item.artists.map((artistsIncluded: any) => {
                    return <li>Artists Included {artistsIncluded.name}</li>;
                  })}
                </div>
              </div>
            );
          })
        : null} */
}
