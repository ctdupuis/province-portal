import React from "react";
import '../../stylesheets/loading.css'

const Loading = () => {
  return (
    <div id="example-2" className="loader" style={{textAlign: "center"}}>
      <div id="bar-1" className="bar"></div>
      <div id="bar-2" className="bar"></div>
      <div id="bar-3" className="bar"></div>
    </div>
  );
};

export default Loading;
