import React, { useState } from 'react';
import { Link } from 'react-router';

const Menu = () => {
  const [text, setText] = useState('Hello, World!');

  const changeText = () => setText('Text has been changed!');

  return (
    <>
        <h1 className="text-white">hello</h1>
        <Link to="journal/star-rating" className="text-white">Go to Test</Link>
    </>
  );
};

export default Menu;
