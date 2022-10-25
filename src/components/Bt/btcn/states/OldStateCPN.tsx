import React, { useState } from "react";

function OldStateCPN() {
  const [stateName, setStateName] = useState<string>("hai");

  //console.log(stateName);
  const handleOnClick = () => {
    console.log(stateName);
    setStateName("long");
  };
  return (
    <>
      <div>{stateName}</div>
      <button onClick={handleOnClick}>SetState</button>
    </>
  );
}

export default OldStateCPN;
