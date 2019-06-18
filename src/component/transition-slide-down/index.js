import * as React from "react";

import "./index.scss";

export default function transitionSlideDown() {
  return (
    <div className="transition-slide-down">
      <div className="transition-slide-down__container">
        <div className="transition-slide-down__header">
          Heading - Hover here
        </div>
        <div className="transition-slide-down__content">
          <p>Ipsum ... something ...</p>
          <br />
          <p>Another one.</p>
        </div>
        <div className="transition-slide-down__footer">Footing</div>
      </div>
    </div>
  );
}
