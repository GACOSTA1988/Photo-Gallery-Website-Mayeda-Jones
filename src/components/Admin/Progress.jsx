import React from "react";

const Progress = ({ percentage }) => (
  <div className="progress mt-0 mb-3">
    <div
      className="progress-bar progress-bar-striped bg-success"
      role="progressbar"
      style={{ width: `${percentage}%` }}
    >
      {percentage}%
    </div>
  </div>
);

export default Progress;
