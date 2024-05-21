import React from 'react';
import './App.css';
import CoursePage from './components/CoursePage';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  const weeks = [
    {
      title: "Week 1: Introduction to the Course",
      days: [
        { day: "Day 1", topic: "Overview", readings: ["Intro.pdf"], assignments: ["Quiz 1"] },
        { day: "Day 2", topic: "Basics", readings: ["Basics.pdf"], assignments: ["Assignment 1"] },
        // More days
      ]
    },
    {
      title: "Week 2: Advanced Topics",
      days: [
        { day: "Day 1", topic: "Advanced Overview", readings: ["AdvancedIntro.pdf"], assignments: ["Quiz 2"] },
        // More days
      ]
    }
    // More weeks
  ];

  return (
    <div className="App">
      <Header />
      <Navigation weeks={weeks} />
      <CoursePage weeks={weeks} />
      <footer>
        <p>Contact: info@kdag.com</p>
      </footer>
    </div>
  );
}

export default App;

