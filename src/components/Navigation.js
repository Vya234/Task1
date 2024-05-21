import React from 'react';
import './styles/Navigation.css';

const Navigation = ({ weeks }) => {
  return (
    <nav className="course-nav">
      <ul>
        {weeks.map((week, index) => (
          <li key={index}>
            <a href={`#week${index + 1}`}>{week.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
