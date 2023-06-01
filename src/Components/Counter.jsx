import React, { useEffect, useRef } from 'react';
import './Counter.css';

function Counter() {
  const counterRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    counterRefs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(entry.target);
      }
    });
  }

  function countUp(element) {
    const endValue = parseInt(element.getAttribute('data-count'));
    let currentValue = 0;
    const increment = Math.ceil(endValue / 100);

    const intervalId = setInterval(() => {
      if (currentValue >= endValue) {
        element.innerText = endValue.toLocaleString();
        clearInterval(intervalId);
      } else {
        currentValue += increment;
        element.innerText = currentValue.toLocaleString();
      }
    }, 10);
  }

  return (
    <div>
      <div className='titleC'>The Largest Gathering of the Year</div>
      <div className="counter">
        <div className="counter-item">
          <p className="p1">
            <span ref={(el) => (counterRefs.current[0] = el)} className="counter-value" data-count="400">
              0
            </span>
            K
          </p>
          <p className="counter-label">Participants</p>
        </div>
        <div className="counter-item">
          <p className="p1">
            <span ref={(el) => (counterRefs.current[1] = el)} className="counter-value" data-count="1000">
              0
            </span>
            +
          </p>
          <p className="counter-label">Artists</p>
        </div>
        <div className="counter-item">
          <p className="p1">
            <span ref={(el) => (counterRefs.current[2] = el)} className="counter-value" data-count="15">
              0
            </span>
            +
          </p>
          <p className="counter-label">Stages</p>
        </div>
      </div>
    
    </div>
  );
}

export default Counter;

