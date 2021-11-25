import React, { useState } from "react";
import axios from "axios";

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
              "BQDMm5J1Y_tQ-ANet7ZzmcpjZgseUYt07v_k2AcxlXO2ercapewXcPLTTXK44Dy-Qkaz_a-jaGvNRxfxQzrvGnGjlaGwC0VlkZcvYyK5auVLkzn-U4eOwQoEA8Yg-0h8ouwlbbMZVxgM1zE829GsRt_0yrFr4zqZRlZccyS458fD02JGzQ",
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
      <pre> Album Name is {albumName}</pre>
      <pre> Release Data is {releaseData}</pre>
      <pre> Total Tracks are {totalTracks}</pre>
      <pre> Album Spotify Preview is {albumLink}</pre>
      <pre> Artist Inlcuded are {artistIncluded}</pre>
      <pre> Album Cover Is {albumCover}</pre>
    </div>
  );
}

export default ArtistAlbums;
