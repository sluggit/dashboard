import React from "react";
import "./OptionButton.css";

const OptionButton = ({children}) => {
  const [showOption, setShowOption] = React.useState(false);
  return (
    <div id="option-button-container" onClick={e => {e.stopPropagation(); e.preventDefault();}} onMouseLeave={() => setShowOption(false)}>
      <section
        className="option-button"
              onClick={(e) =>{{ setShowOption(!showOption); }}}
              
      >
        ...
          </section>

<div className={`option-button-dropdown ${showOption ? 'active' : ''}`}>
  {children}
</div>
      
    </div>
  );
};

export default OptionButton;
