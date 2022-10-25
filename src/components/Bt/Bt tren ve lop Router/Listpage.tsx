import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}
function Listpage() {
  const Navi = useNavigate();
  const [stateListUser, setStateListUser] = useState<Array<IUser>>([]);
  useEffect(() => {
    getListUserApi();
  }, []);
  const gotoDetail = (id: string) => {
    console.log(id);
    Navi("Detail/" + id);
  };
  const handleDelete = (id: string) => {
    console.log("Delete", id);
    const url =
      "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log("Delete success", json);
        // let arr = stateListUser.filter((user)=>user.id !== json.id)
        // setStateListUser(arr)
        // console.log(arr)
        getListUserApi();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };
  const getListUserApi = () => {
    const url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1//users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setStateListUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {stateListUser?.map((user: IUser) => (
            <tr key={`item-user-${user.id}`}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => gotoDetail(user.id)}
                >
                  Detail
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listpage;
