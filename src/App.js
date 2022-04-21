// 2a
import MCUShows from "./mcu-shows/MCUShows";

// BONUS
// 6a
import { useState, useEffect } from "react";

// 5a
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021',
  moonKnight: 'March 2022',
  msMarvel: 'June 2022'
};

// 6b
const mcuCharacters = [
  'Wanda Maximoff',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye',
  'Kate Bishop',
  'Moon Knight',
  'Ms. Marvel'
];

function App() {
  // 6c
  const [index, setIndex] = useState(0);

  // 7a
  const [num, setNum] = useState(0);

  // 8a
  // The function (1st argument) passed into the useEffect function/hook will run every time the state value ("num" in this example) that is passed into the array (2nd argument) is updated.
  useEffect(() => {
    alert(`The Next MCU Character has been displayed`);
  }, [num]);

  // Bonus 6f
  function randomChar() {
    setIndex(Math.floor(Math.random() * mcuCharacters.length));
  }

  // 7d
  function nextChar() {
    if (num === mcuCharacters.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  } 

  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c */}
      <MCUShows dates={releaseDates} randomChar={randomChar} nextChar={nextChar}/>
      {/* 6d & 6f */}
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      {/* 7b */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
