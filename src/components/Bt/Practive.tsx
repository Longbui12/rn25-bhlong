import React, { useState , useEffect } from "react";

interface IPractive {
  initNumber: number;
}
/*function Practive(props: IPractive) {
  const [count, setCount] = useState(-1);
  const [count1, setCount1] = useState(-1);
  const handleOnclick = () => {
    console.log("clicked");
    setCount(count + 1) // (cach 1)
    //setCount((prevState) => prevState + 1); //(cach 2)
  };
  
  // 1: function
  // 2: dependences
  useEffect (()=>{
    // componentDidMount : chay 1 lan : first render
    console.log('componentDidMount')

    return ()=> {
        // componentWillUnmount : chay 1 lan truoc khi component bi destroy(huy bo)
        console.log('componentWillUnmount')
    }
  }, []) 


  useEffect (()=>{
    console.log('componentDidUpdate')
  },) // componentDidUpdate : chay n lan  

  useEffect (()=>{
    console.log('componentDidUpdate count1')
  }, [count ,count1]) // componentDidUpdate cua 1 State: count :
              //  chay n lan nhung chi chay khi state(dependences) thay doi


  return (
    <>
      <div>{count}</div>
      <button onClick={handleOnclick}>Cong</button>
    </>
  );
}

export default Practive;*/

/*function Practive(props: IPractive) {
  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input type={'text'} value={'text'}></input>
        <button>login</button>
      </form>
    </>
  );
}

export default Practive;*/
