import React, { useEffect, useState } from "react";
interface IUser {
    name : string;
}
function SetStateAPI() {
  const [stateUser, setStateUser] = useState<IUser>({name:"Long Bui"});
  //console.log(stateAge)
  useEffect(()=>{
    callAPIGetUser()
}, [])
const callAPIGetUser = () => {
    let url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/" + "users/4";
    fetch(url, {
        method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setStateUser(data);
    })
    .catch((e) => {
        console.log(e);
    });
};

  return (
    <>
      <div>{stateUser.name}</div>
    </>
  );
}

export default SetStateAPI;
