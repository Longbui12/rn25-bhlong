import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Practive from "./components/Bt/Practive";
import Basic01 from "./components/Bt/Baitap01/Basic01";
import Basic02 from "./components/Bt/Baitap02/Basic02";
import Basic03 from "./components/Bt/Baitap03/Basic03";
import ChartBar from "./components/Bt/Block-ui-1/Chartbar";
import Chartbar2 from "./components/Bt/Block-ui-2/Chartbar2";
import Chartbar3 from "./components/Bt/Block-ui-3/Chartbar3";
import NewCpn from "./components/Bt/btcn/props/NewCpn";
import NewStateCPN from "./components/Bt/btcn/states/NewStateCPN";
import OldStateCPN from "./components/Bt/btcn/states/OldStateCPN";
import SetStateAPI from "./components/Bt/btcn/states/SetStateAPI";
import ListPage from "./components/Bt/btcn/lifecyclehook/ListPage";
import TestLifeCycleHook from "./components/Bt/btcn/lifecyclehook/TestLifeCycleHook";
import NewPropsCPN from "./components/Bt/ontaplai/NewPropsCPN";
import Index from "./components/Bt/ontaplai/Index";
import Routers from "./components/Bt/Bt tren ve lop Router/Routers";


function App() {
  // const MAX_NUMBER = 100;
  //let age_person = 18;
  //let nameCar = { name: "value" };
  // let styles = { color: " red", fontSize: 18 };

  return (
    <>
      {/*<Header />
      <p>Body</p>
      <Footer />
      <Practive initNumber={0} />
      <Rating />
      <Mockapi />
     {/* <Basic01 />
       <hr/>*/}
      {/*<Basic02 />*/}
      <hr />
      {/*<Basic03 />
      <hr/>
      <ChartBar />
      <hr/>
      {/*<Chartbar2 />
      <hr/>*/}
      {/*<Chartbar3 />*/}

      {/* PROPS */}
      {/* <NewCpn nameProps1 = {1} nameProps2 = {'class__blue'}/>
      <NewCpn nameProps1 = {1} nameProps2 = {'class__brown'}/> */}

      {/* STATES */}
      {/*<NewStateCPN />*/}
      {/*<OldStateCPN />*/}
      {/* <SetStateAPI /> */}

      {/* LifeCycleHook */}
      {/*<TestLifeCycleHook />*/}
      {/* <ListPage /> */}

      {/* PROPS and STATES*/}
      {/*<NewPropsCPN nameProps1 = {1} text={'I am a dragon'}/>*/}

      {/* PROPS and STATES*/}
      {/*<Index text={'Long__hai'}/>*/}
      <Routers />
      
      
    </>
  );
}

export default App;
// tao 1 component listuser -> state : users
// getListUser useffect=>
//
