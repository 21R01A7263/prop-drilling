import React, { useState } from "react";
import Card from './Components/Card';
import Navbar from './Components/Navbar';

function App() {

  const data = [
    { image: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9", artist: "Vishal Mishra", name: "Pehle Bhi Main", added: false },
    { image: "https://i.scdn.co/image/ab67616d0000b273021d7017f73387b008eab271", artist: "Arijit Singh", name: "Satranga", added: false },
    { image: "https://i.scdn.co/image/ab67616d0000b273a3e762b967e1bcaa9c51703c", artist: "Jaani", name: "Saari Duniya Jalaa Denge", added: false },
    { image: "https://i.scdn.co/image/ab67616d0000b273106eb07ca5ca32a6894049c4", artist: "Harsh", name: "Abrar’s Entry", added: false },
    { image: "https://i.scdn.co/image/ab67616d0000b273bf85d0e5f6f669fab2e5cea7", artist: "Raghav", name: "Hua Main", added: false },
  ]

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) {
          return { ...item, added: !item.added }
        }
        return item;
      })})
  }


return (
  <>
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex flex-wrap">
        {songData.map((item, index) => (
          <Card index={index} data={item} handleClick={handleClick} key={index} />
        ))}
      </div>
    </div>

  </>
)
}

export default App;