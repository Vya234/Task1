import React, { useState } from 'react';
import './styles/CollapsibleSection.css';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

export default CollapsibleSection;
