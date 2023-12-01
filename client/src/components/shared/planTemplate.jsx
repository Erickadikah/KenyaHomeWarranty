import React, { useState } from 'react';


const AccordionItem = ({ title, coverage, expanded, onToggle }) => {
  return (
    <div className="accordion-item">
      <button className={`accordion-button ${expanded ? 'active' : ''}`} onClick={onToggle}  style={{ border: "none", outline: "0" }}>
        <small>{title}</small>
      </button>
      {expanded && (
        <div className="bg-white">
          {coverage.map(([item, status], index) => (
            <div key={index} className={`coverage-item ${status === true ? 'covered' : 'not-covered'}`} style={{ paddingLeft: "10px", paddingBottom: 0, paddingTop: "10px" }}>
              <p>
                {item} -{' '}
                {status === true ? (
                  <span className="text-success">Covered</span>
                ) : status === false ? (
                  <span className="text-danger">Not Covered</span>
                ) : (
                  <span className="text-black">Addon</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PlanAccordion = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div style={{ display: "grid", alignItems: "center", minHeight: "80vh" }}>
      <div className="accordion container">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            coverage={item.covarage}
            expanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanAccordion;
