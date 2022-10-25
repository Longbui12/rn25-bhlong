import React, { useState } from "react";
import styles from "./ontap.module.css";
//console.log(styles);
interface INewPropsCPN {
  nameProps1?: number;
  text?: string;
}

function NewPropsCPN(props: INewPropsCPN) {
  const [stateName, setStateName] = useState<number>(1);
  //console.log(stateName)
  const handleOnClick = () => {
    console.log(stateName);
    setStateName(2);
  };
  return (
    <>
      {/*<div style={{color:"red"}}>{props.nameProps1}</div>*/}
      <div>{props.nameProps1}</div>
      <div className={styles.text}>{props.text}</div>
      <div>{stateName}</div>
      <button onClick={handleOnClick}>Click</button>
    </>
  );
}

export default NewPropsCPN;
