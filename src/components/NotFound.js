import React from 'react';

function NotFound({ text="No Movies Found", icon="film" }) {
  return (
    <div className="ui grid container" id="notFound">
      <div className="ui center aligned middle aligned column">
        <i className={`massive blue ${icon} icon`}></i>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default NotFound;
