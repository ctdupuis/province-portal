import React from "react";
import '../../stylesheets/loading.css'

const Loading = () => {
  return (
    <div id="example-2" class="loader" style={{textAlign: "center"}}>
      <div id="bar-1" class="bar"></div>
      <div id="bar-2" class="bar"></div>
      <div id="bar-3" class="bar"></div>
    </div>
  );
};

export default Loading;
