import React, { useEffect, useState } from "react";

function TestLifeCycleHook() {
  const [stateAge, setStateAge] = useState(0);
  useEffect(() => {
    console.log("ComponentWillMount");
    // return () => {
    //   console.log("ComponentWillUnmount");
    // };
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate all state");
    
  });

  useEffect(() => {
    console.log("ComponentDidUpdate stateAge");
  }, [stateAge]);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return <div>TestLifeCycleHook</div>;
}

export default TestLifeCycleHook;
