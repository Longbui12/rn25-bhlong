1. LifeCycle 3 giai doan
- Mounting:
+ ComponentWillMount:
useEffect(() => {
    // cau lenh thuc hien o day
    // Call API de setState
    // Chay 1 lan duy nhat, sau first-render
}, []);
- Updating
+ ComponentDidUpdate
// chay voi moi state thay doi
useEffect(() => {
    // cau lenh thuc hien o day
    // Chay n lan, tuy vao so lan state cua CPN thay doi
});
// chi chay khi state stateAge thay doi
useEffect(() => {
    // cau lenh thuc hien o day
    // Chay n lan, tuy vao so lan state stateAge cua CPN thay doi
}, [stateAge]);
- Unmounting
+ ComponentWillUnmount
useEffect(() => {
    return ()=>{
        // cau lenh thuc hien o day
        // Chay 1 lan, trc khi cpn bi destroy
    }
}, []);


# Thuc te
1. List page
- Require: render ra list User (list User duoc luu thong tin o MockAPI)
- Dump data
+ Fix tinh data listUser
const listUser = [
    {
      name: "User1",
    },
    {
      name: "User2",
    },
    {
      name: "User3",
    },
];
+ render ListUser
{listUser?.map((user) => (
    <div key={user.name}>
        <span>{user.name}</span>
    </div>
))}
- Get listUser tu API
+ Xac dinh inteface cua object
interface IUser {
  name: string;
  age : number;
}
+ Xac dinh type cua listObject
// array object -> type: Array<Object> -> Array<IUser>
const [stateListUser, setStateListUser] = useState<Array<IUser>>([]);
+ Call API get data ListUser
    + Viet 1 func CallAPI
    const callAPIGetListUser = () => {
    let url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/" + "users";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // Data API get ve thanh cong
        console.log(data);
      })
      .catch((e) => {
        // Call API that bai
        console.log(e);
      });
  };
 + Tao 1 componentWillMount call func CallAPI
useEffect(() => {
    callAPIGetListUser()
}, []);
+ Neu data API tra ve thanh cong -> setState listUser
