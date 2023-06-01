import React, { useState } from 'react';
import './Events.css';

function Events() {
  const [activeReadMore, setActiveReadMore] = useState([]);
  const handleReadMoreClick = (index) => {
    setActiveReadMore((prevState) => {
      const updatedState = [...prevState]; // Clone the previous state
      updatedState[index] = !prevState[index]; // Toggle the value at the specific index
  
      // Hide all other sections if the current index is being activated
      if (updatedState[index]) {
        for (let i = 0; i < updatedState.length; i++) {
          if (i !== index) {
            updatedState[i] = false;
          }
        }
      }
      return updatedState;
    });
  };
  
  // const handleReadMoreClick = (index) => {
  //   setActiveReadMore((prevState) => {
  //     const updatedState = [...prevState]; // Clone the previous state
  //     updatedState[index] = !prevState[index]; // Toggle the value at the specific index
  //     return updatedState;
  //   });
  // };
  const events = [
    { eventName: 'Tomorrow Land Winter Festival', image: 'tmrwlandwinterfestivalpractical.jpg', content: 'The Tomorrowland Winter Festival is a popular EDM festival held in the winter season. It features top DJs, immersive themes, and stunning stages in a snowy setting. Attendees enjoy diverse music genres and a magical atmosphere.' },
    { eventName: 'Tomorrow Land Brasil Festival', image: 'tmrwlandbrasilfestivalpractical.jpg', content: 'The Tomorrow Land Brasil Festival is a popular electronic dance music (EDM) festival held in Brazil. It features top international DJs, immersive stage designs, and a vibrant atmosphere. Attendees can enjoy a diverse lineup of EDM genres and experience an unforgettable music festival experience.' },
    { eventName: 'Tomorrow Land Belgium', image: 'tmrwlandbelgium.jpg', content: 'Tomorrow Land Belgium is one of the largest and most popular electronic dance music festivals in the world. It attracts thousands of music enthusiasts from all over the globe and showcases top DJs and artists across multiple stages. The festival is known for its immersive themes, stunning production, and unforgettable experiences.' },
    { eventName: 'Events Core Festival', image: 'eventscorefestival.jpg', content: 'Events Core Festival is a vibrant and dynamic music festival that brings together a diverse range of artists and performers from various genres. With its energetic atmosphere and captivating stage setups, the festival offers an unforgettable experience for music lovers. From live performances to interactive activities, Events Core Festival promises non-stop entertainment and excitement.' },
    { eventName: 'One World Radio', image: 'oneworldradio.jpg', content: ' One World Radio is an official radio station of Tomorrowland, broadcasting a curated selection of electronic music, exclusive mixes, and live performances. Tune in to One World Radio to be part of the electrifying music journey. Get ready for non-stop beats and incredible vibes on One World Radio.' },
    { eventName: 'Terra Solis', image: 'terrasolis.jpg', content: 'Terra Solis is an enchanting event at Tomorrowland, featuring mesmerizing music, art, and nature. It offers a captivating experience with a diverse lineup of talented artists and stunning visuals. Join us for an unforgettable journey at Terra Solis.' },
  ];
  return (
    <div className="image-container-events">
      <div>
        <h3 className="titleOurEvents">OUR EVENTS</h3>
      </div>
      <div className="line1">
        {events.slice(0, 3).map((event, index) => (
          <div className="imgc" key={index}>
            <div>
              <img className="img1" src={event.image} alt={`Event ${index + 1}`} />
            </div>
            <div className="eventName">{event.eventName}</div>
            <button
              className={`readMore ${activeReadMore[index] ? 'active' : ''}`}
              onClick={() => handleReadMoreClick(index)}
            >
              Read More
            </button>
            {activeReadMore[index] && (
              <div className="readMoreContainer">
                <p>{event.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
  
      <div className="line1">
        {events.slice(3, 6).map((event, index) => (
          <div className="imgc" key={index + 3}>
            <div>
              <img className="img1" src={event.image} alt={`Event ${index + 4}`} />
            </div>
            <div className="eventName">{event.eventName}</div>
            <button
              className={`readMore ${activeReadMore[index + 3] ? 'active' : ''}`}
              onClick={() => handleReadMoreClick(index + 3)}
            >
              Read More
            </button>
            {activeReadMore[index + 3] && (
              <div className="readMoreContainer">
                  <p>{event.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  

}

export default Events;

