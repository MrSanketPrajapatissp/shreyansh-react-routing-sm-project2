import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://img.freepik.com/free-vector/realistic-music-festival-poster-template_52683-68579.jpg",
      name: "Tum Hi Ho",
      artist: "Arijit Singh",
      added: true,
    },
    {
      image:
        "https://img.freepik.com/premium-photo/music-background-wallpaper-theme-banner-concept_110893-5.jpg",
      name: "Chaiyya Chaiyya",
      artist: "Sukhwinder Singh",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/free-photo/microphone-stand-isolated-colorful-background_169016-28449.jpg",
      name: "Kal Ho Naa Ho",
      artist: "Sonu Nigam",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/free-photo/close-up-hand-playing-harmonium_1150-10913.jpg",
      name: "Zinda",
      artist: "Javed Bashir",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/free-photo/handsome-indian-male-singer-white_79782-1670.jpg",
      name: "Tera Ban Jaunga",
      artist: "Akhil Sachdeva",
      added: true,
    },
    {
      image:
        "https://img.freepik.com/free-vector/gradient-music-background_52683-71920.jpg",
      name: "Gerua",
      artist: "Arijit Singh",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/premium-photo/indian-band-performing-stage-night_938320-24.jpg",
      name: "Dil Diyan Gallan",
      artist: "Atif Aslam",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/free-vector/music-player-template-concept_52683-42615.jpg",
      name: "Kabira",
      artist: "Rekha Bhardwaj",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/free-photo/music-notes-background-design_23-2150843537.jpg",
      name: "Tujh Mein Rab Dikhta Hai",
      artist: "Roop Kumar Rathod",
      added: false,
    },
    {
      image:
        "https://img.freepik.com/premium-photo/instrumental-background-indian-instruments_859666-9920.jpg",
      name: "Ae Dil Hai Mushkil",
      artist: "Arijit Singh",
      added: false,
    },
  ];

  /* */
  const handleClick = (index) => {
    setSongData((prevData) => {
      return prevData.map((item, chIndex) => {
        if (chIndex === index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  const [songData, setSongData] = useState(data);

  // const handleClick = (changingIndex) => {
  //   setSongData((prevdata) => {
  //     return prevdata.map((item, index) => {
  //       if (changingIndex === index) {
  //         return {
  //           ...item,
  //           added: !item.added,
  //         };
  //       }
  //       return item;
  //     });
  //   });
  // };

  return (
    <>
      <div className="bg-zinc-300 h-screen">
        <Navbar  songData={songData} />
        <div className="flex flex-wrap gap-10 p-5  mr-10 mt-10">
          {songData.map((item, index) => (
            <Card
              key={index}
              index={index}
              values={item}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
