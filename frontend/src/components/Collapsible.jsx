import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/fontawesome-free-solid";
import "../styles/Collapsible.css"

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState(open ? undefined : 0);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height*1.5);
    else setHeight(0);
  }, [isOpen]);

  return (
    <>
      <div className="collapsible-card">
        <div>
          <div className="collapsible-card-inner-div">
            <h4 className="title">{title}</h4>
            <button type="button" className="collapsible-icon-button" onClick={handleFilterOpening}>
              {!isOpen ? ("Show Details") : ("Hide Details")}
            </button>
          </div>
        </div>

        <div className="border-bottom collapsible" style={{ height }} >
          <div ref={ref}>
            <div className="collapsible-content-padding">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;