1. Tao cpn
- New file (Dat ten cpn viet hoa chu cai dau)
- Tao base source : rfce 
2. Su dung cpn
- Call o cpn cha : <NameCPN />
- Inport vao cpn cha
- Kiem tra CPN da hoat dong chua
3. Khoi tao state
- Vao file cpn con
- Tao state: 
+ Khai bao useState : 
    - import {useState} from "react" (o ngoai CPN)
    - const [stateAge, setStateAge] = useState<number>(0) (trong cpn, tren return)
+ Su dung state
    - Neu o return: {stateAge} -> Kiem tra state hoat dong chua
    - Ngoai return: stateAge ->
    + Kiem tra bang console.log(stateAge)
    + Kiem tra bang alert(stateAge)
+ Thay doi gia tri state:
    - setStateAge(1) -> 1 : gia tri moi cua state
    - Neu state can lay tu API(fetch)
        + Dung : 
        useEffect(()=>{
            callAPIGetUser()
        }, [])
        + Khai bao func callAPIGetUser:
        const callAPIGetUser = () => {
            let url = "https://63529107a9f3f34c3741b515.mockapi.io/API/v1/" + "users/1";
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
    - Dung event tu btn
        + Handle event onClick 
        + Viet function handleOnClick

