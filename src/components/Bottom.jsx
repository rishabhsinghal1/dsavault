import React from "react";
import BottomRow2 from "./BottomRow2";
import BottomRow1 from "./BottomRow1";
import BottomRow3 from "./BottomRow3";
import Copyright from "./Copyright";

const Bottom = () => {
  return (
    <div className="bottom">
      <BottomRow1/>
      <BottomRow2/>
      <BottomRow3/>
      <Copyright/>
    </div>
  );
};

export default Bottom;
