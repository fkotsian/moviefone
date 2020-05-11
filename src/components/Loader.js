import React from 'react';

function Loader({ loading }) {
  return (
    loading
      ? <div className="ui container" id="loader">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading Films...</div>
          </div>
        </div>
      : null
  )
}

export default Loader;
