import React, { useEffect, useState } from "react";

interface IUser {
  name: string;
}

function ListPage() {
  // array object -> type: Array<Object> -> Array<IUser>
  const [stateListUser, setStateListUser] = useState<Array<IUser>>([]);
  useEffect(() => {
    // Call API de setState
    // Gia su API thanh cong
    // setStateListUser(listUser);
    callAPIGetListUser();
  }, []);
  const callAPIGetListUser = () => {
    let url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/" + "users";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // Data API get ve thanh cong
        console.log(data); // Kiem tra API thanh cong hay chua
        // data thay the cho data dump listUser
        setStateListUser(data);
      })
      .catch((e) => {
        // Call API that bai
        console.log(e);
      });
  };
  // Gia su tk nay lay thanh cong tu API ve
  //   const listUser: Array<IUser> = [
  //     {
  //       name: "User1",
  //     },
  //     {
  //       name: "User2",
  //     },
  //     {
  //       name: "User3",
  //     },
  //   ];
  return (
    <>
      {stateListUser?.map((user) => (
        <div key={user.name}>
          <span>{user.name}</span>
        </div>
      ))}
      {/* <div>
        <span>{listUser[0].name}</span>
      </div>
      <div>
        <span>{listUser[1].name}</span>
      </div>
      <div>
        <span>{listUser[2].name}</span>
      </div> */}
    </>
  );
}

export default ListPage;
