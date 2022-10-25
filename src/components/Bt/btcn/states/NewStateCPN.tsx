import React from "react";
import { useState, useEffect } from "react";

interface IUser {
  name: string;
}

function NewStateCPN() {
  const [stateAge, setStateAge] = useState<number>(0);
  const [stateUser, setStateUser] = useState<IUser>({
    name: "long",
  });
  //   console.log(stateAge);
  useEffect(() => {
    callAPIGetUser();
  }, []);

  const callAPIGetUser = () => {
    let url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/" + "users/1";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setStateUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleOnClick = () => {
    setStateAge(1);
  };
  return (
    <>
      <div>{stateAge}</div>
      <button onClick={handleOnClick}>SetState</button>
      <div>{stateUser.name}</div>
    </>
  );
}

export default NewStateCPN;
