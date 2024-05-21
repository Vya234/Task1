import React from 'react';
import CollapsibleSection from './CollapsibleSection';
import './styles/CoursePage.css';

const CoursePage = ({ weeks }) => {
  return (
    <div className="course-content">
      {weeks.map((week, index) => (
        <section id={`week${index + 1}`} key={index}>
          <CollapsibleSection title={week.title}>
            {week.days.map((day, idx) => (
              <div className="day" key={idx}>
                <h3>{day.day}</h3>
                <p>Topic: {day.topic}</p>
                <p>Readings: {day.readings.join(", ")}</p>
                <p>Assignments: {day.assignments.join(", ")}</p>
              </div>
            ))}
          </CollapsibleSection>
        </section>
      ))}
    </div>
  );
}

export default CoursePage;
