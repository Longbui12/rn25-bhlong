import React, {useState} from "react";
import styles from "./index.module.css";
//console.log(styles)
interface IIndex {
  text?: string;
}

function Index(props: IIndex) {
  const [stateText, setStateText] = useState <string>('Long__hai')
  //console.log(stateText)
  const handleOnClick = () => {
    //console.log(stateText);
    setStateText('Dragon__Sea')
  }
  

  return (
    <>
      <div className={styles.Long__hai}>{props.text}</div>
      <div>{stateText}</div>
      <button onClick={handleOnClick}>Button</button>
    </>
  );
}

export default Index;
