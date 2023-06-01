import React, { useState } from 'react';
import './Artists.css';

function Artists() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const artistsCount = artists.length;

  const scrollLeft = () => {
    setScrollPosition((scrollPosition - 3 + artistsCount) % artistsCount);
  };

  const scrollRight = () => {
    setScrollPosition((scrollPosition + 3) % artistsCount);
  };

  const getArtistsToDisplay = () => {
    const artistsToDisplay = [];
    const startIndex = scrollPosition % artists.length;
    let count = 0;

    while (count < 3) {
      artistsToDisplay.push(artists[startIndex + count]);
      count++;
    }

    return artistsToDisplay;
  };

  return (
    <div className="artistC">
      <div>
        <h3 className="titleOurArtists">OUR ARTISTS</h3>
      </div>
      <div className="line11">
      {getArtistsToDisplay().map((artist, index) => (
  <div className="imgArtist" key={index}>
    <div>
      <img className="imgA" src={artist.image} alt={artist.name}></img>
    </div>
    <div className="artistName">{artist.artistName}</div>
  </div>
))}
      </div>
      <div className="scrollButtons">
        <button className="scrollButton" onClick={scrollLeft}>
        {'<'}
        </button>
        <button className="scrollButton" onClick={scrollRight}>
        {'>'}
        </button>
      </div>
      <button className="viewMore">View More</button>
    </div>
  );
}

const artists = [
  { name: 'Billie Eilish', image: 'Billie-Eilish.jpg' , artistName: 'Billie Eilish' },
  { name: 'Lewis Capaldi', image: 'lewiscapaldi.jpg' , artistName: 'Lewis Capaldi'},
  { name: 'Taylor Swift', image: 'taylorswift.jpg' , artistName:'Taylor Swift'},
  { name: 'Post Malone', image: 'postmalone.jpg', artistName:'Post Malone' },
  { name: 'Liam Gallagher', image: 'liamGallagher.jpg', artistName: 'Liam Gallagher'},
  { name: 'Stormzy', image: 'Stormzy.jpg' , artistName:'Stormzy'},
  { name: 'Travis Scott', image: 'travisScott.jpg' , artistName:'Travis Scott'},
  { name: 'Camila Cabello', image: 'camilaCabello.jpg' , artistName:'Camila Cabello'},
  { name: 'Marshmello', image: 'marshmello.jpg' , artistName:'Marshmello'},
];

export default Artists;
