// 1a
import "./MCUShows.css";

// 1b
function MCUShows({dates, randomChar, nextChar}) {
    // 1c
    return (
        <div  className="MCUShows"> {/* 4a */}
            {/* 3a */}
            <h1 style={{fontFamily: `Georiga`, textDecoration: `underline`}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            {/* 5c */}
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            <p>Moon Knight: {dates.moonKnight}</p>
            <p>Ms. Marvel: {dates.msMarvel}</p>
            {/* 6e */}
            <button onClick={randomChar}>RANDOM MCU CHARACTER</button> {/* 6f */}
            {/* 7c */}
            <button onClick={nextChar}>NEXT MCU CHARACTER</button>
        </div>
    );
}

export default MCUShows;