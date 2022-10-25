import React from "react";
import "./Styles.css";

interface ChartBarProps {
  /*text?: string;
  color1?: string;
  color2?: string;
  percentage?: number;*/
}

function ChartBar(props: ChartBarProps) {
  return (
    <>
      <div className="Wrap">
        <div className="left-column">
          BANDWIDTH
        </div>
        <div className="right-column">20%</div>
      </div>
    </>
  );
}

export default ChartBar;
