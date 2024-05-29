import React from 'react';

function Button(props) {
  const BackgroundChanger = (colorCode) => {
    return () => {
      document.body.style.backgroundColor = colorCode;
    };
  };

  return (
    <>
      <div className="button-wrapper">
        <button className={`btn ${props.btnClass}`} onClick={BackgroundChanger(props.colorCode)}>
          {props.btnText}
        </button>
      </div>
    </>
  );
}

export default Button;
