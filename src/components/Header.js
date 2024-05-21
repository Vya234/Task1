import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
      <h1>KDAG Course Title</h1>
      <nav>
        <a href="#week1">Week 1</a>
        <a href="#week2">Week 2</a>
        {/* Add more links as necessary */}
      </nav>
    </header>
  );
}

export default Header;
