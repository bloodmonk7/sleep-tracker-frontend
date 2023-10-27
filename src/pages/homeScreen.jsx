import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function HomeScreen() {
  const [showText, setShowText] = useState(false);

  // Use useEffect to trigger the text animation after a delay (e.g., 1 second)
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <CSSTransition
        in={showText}
        timeout={1000}
        classNames="slide-up"
        unmountOnExit
      >
        <div className="text-center">
          <p className="text-2xl font-semibold mb-4">
            Let's start by calculating your sleep efficiency and examining your concerns.
          </p>
          <p className="mb-4">
            Over time, we will work together to improve these.
          </p>
          <Link to="/sleepproblem" className="text-blue-500 hover:text-blue-600">
            <span className="text-2xl">⬇</span> {/* Down arrow */}
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

export default HomeScreen;
