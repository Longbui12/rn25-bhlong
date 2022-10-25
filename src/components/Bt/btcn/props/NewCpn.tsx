import React from "react";
import "./styles.css";
interface INewCpn {
  nameProps1?: number;
  nameProps2?: string;
}
function NewCpn(props: INewCpn) {
  return (
    <>
      <div>{props.nameProps1}</div>
      <div className={props.nameProps2}>{props.nameProps2}</div>
    </>
  );
}

export default NewCpn;
