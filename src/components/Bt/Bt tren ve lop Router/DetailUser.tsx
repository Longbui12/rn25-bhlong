import React from 'react'
import { useState } from "react";
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

interface IUser {
  id: string;
  name: string;
}

function DetailUser() {
  let params = useParams();
  const [stateUser, setStateUser] = useState<IUser>({
    name: "",
    id: "",
  });

  useEffect(()=>{
    getUserApi()
  },[])

  const getUserApi = () =>{
    const url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setStateUser(json)
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  }

  return (
    <div>
      <p>Name User: {stateUser.name}</p>
      <p>ID User : {stateUser.id}</p>
    </div>
  );
}

export default DetailUser;