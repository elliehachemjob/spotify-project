import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";

interface Props {}

function ArtistAlbums(props: Props) {
  const [albumName, setAlbumName] = useState<any>();
  const [releaseData, setReleaseDate] = useState<any>();
  const [totalTracks, setTotalTracks] = useState<any>();
  const [albumLink, setAlbumLink] = useState<any>();
  const [artistIncluded, setArtistIncluded] = useState<any>();
  const [albumCover, setAlbumCover] = useState<any>();

  const AlbumSearch = () => {
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
        console.log(response);
        console.log(`album name ${response.data.items[1].name}`);
        console.log(`release date ${response.data.items[1].release_date}`);
        console.log(`total tracks ${response.data.items[1].total_tracks}`);
        console.log(
          `preview album link ${response.data.items[1].external_urls.spotify}`
        );
        console.log(
          `Artits included  ${response.data.items[1].artists[0].name}`
        );
        console.log(`Album cover is  ${response.data.items[1].images[0].url}`);

        setAlbumName(response.data.items[1].name);
        setReleaseDate(response.data.items[1].release_date);
        setTotalTracks(response.data.items[1].total_tracks);
        setAlbumLink(response.data.items[1].external_urls.spotify);
        setArtistIncluded(response.data.items[1].artists[0].name);
        setAlbumCover(response.data.items[1].images[0].url);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div onClick={AlbumSearch}>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <CardMedia
            component="img"
            height="200"
            image={albumCover}
            alt="album cover"
          />
          <Typography>{albumName}</Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tom Petty
          </Typography>
          <Typography
            sx={{ position: "relative", top: 35 }}
            color="text.secondary"
          >
            {releaseData}
          </Typography>
          <Typography
            sx={{ position: "relative", top: 30 }}
            color="text.secondary"
          >
            {totalTracks} tracks
          </Typography>
          <Typography
            sx={{ position: "relative", top: 25 }}
            color="text.secondary"
          >
            {artistIncluded}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              window.open(albumLink);
            }}
            size="small"
          >
            Preview On Spotify
          </Button>
        </CardActions>
      </Card>
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
