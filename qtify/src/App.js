/* eslint-disable no-template-curly-in-string */
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import TheHeroSection from "./Components/TheHeroSection";
import Section from "./Components/Section";
import FilterSection from "./Components/FilterSection";
import genre from "./genres.json";
const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  // const [genre, setGenre] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
    axios.get(`${ENDPOINT}songs`).then(({ data }) => {
      setAllSongs(data);
      setFilteredSongs(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <TheHeroSection />
      <Section navid="ta" title="Top Albums" data={topAlbums} />
      <Section navid="na" title="New Albums" data={newAlbums} />
      <FilterSection
        title="Songs"
        data={filteredSongs}
        filters={genre}
        executeFilter={(genre) => {
          if (genre === "all") {
            setFilteredSongs(allSongs);
          } else {
            setFilteredSongs(
              allSongs.filter((song) => song.genre.key === genre)
            );
          }
        }}
      />
    </>
  );
}

export default App;
