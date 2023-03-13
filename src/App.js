import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getALLAlbums } from "./api/albumService";
import { getAllSinger } from "./api/singerService";
import { getAllSong } from "./api/songService";
import AccountEdit from "./components/AccountEdit";
import AccountProfile from "./components/AccountProfile";
import AccountSeting from "./components/AccountSeting";
import Albums from "./components/dashboard/Albums";
import Home from "./components/dashboard/Home";
import Latest from "./components/dashboard/Latest";
import MusicPlayer from "./components/MusicPlayer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App(props) {
  const dispatch = useDispatch();
  const [songPlay, setSongPlay] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const songs = useSelector((state) => state.songReducer);
  console.log(songs);

  const handleControl = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay(!isPlay);
  };
  const playMusic = (song) => {
    setCurrentTime(0);
    setSongPlay(song);
    setIsPlay(true);
  };
  const handleBack = () => {
    songs.forEach((song, index) => {
      if (song.id === songPlay.id) {
        if (index === 0) {
          setSongPlay(songs[songs.length - 1]);
        } else {
          setSongPlay(songs[index - 1]);
        }
      }
    });
  };
  const handleNext = () => {
    songs.forEach((song, index) => {
      if (song.id === songPlay.id) {
        if (index === songs.length - 1) {
          setSongPlay(songs[0]);
        } else {
          setSongPlay(songs[index + 1]);
        }
      }
    });
  };

  useEffect(() => {
    getAllSong().then((res) => {
      dispatch({ type: "GET_ALL_SONG", payload: res.data });
    });
    getALLAlbums().then((res) => {
      dispatch({ type: "GET_ALL_ALBUM", payload: res.data });
    });
    getAllSinger().then((res) => {
      dispatch({ type: "GET_ALL_SINGER", payload: res.data });
    });
  }, []);
  return (
    <>
      {songPlay && (
        <audio
          className="mt-5"
          src={songPlay.music_path}
          autoPlay
          controls
          onEnded={handleNext}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              songPlay={songPlay}
              isPlay={isPlay}
              handleBack={handleBack}
              handleControl={handleControl}
              handleNext={handleNext}
            />
          }
        >
          <Route
            index
            element={
              <Home
                playMusic={playMusic}
                songPlay={songPlay}
                isPlay={isPlay}
                handleBack={handleBack}
                handleControl={handleControl}
                handleNext={handleNext}
              />
            }
          />
          <Route path="latest" element={<Latest />} />
          <Route path="album" element={<Albums />} />
          <Route path="account-setting" element={<AccountSeting />} />
          <Route path="account-edit" element={<AccountEdit />} />
          <Route path="account-profile" element={<AccountProfile />} />
          <Route path="music-player" element={<MusicPlayer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
