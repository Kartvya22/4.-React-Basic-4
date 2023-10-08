
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // mount -> dom par render karvu
  // unmount -> dom par thi remove karvu

  const [text, setText] = useState(" ");
  // const [name, setName] = useState(" ");

  // //  ** useEffect( call-back function , array of dependencies (optional))
  // // useEffect is one type of hooks in react js
  // // agar tum apne componnet k render hone k bad koi task karvana chahte ho to vo useEffect ke andar define karne se ho jayega
  // // useEffect is use to handle side Effect like call API, changing document name, dom upadate karvu etc..
  // // je component ma useEffect maryu hoy ae component sivay na badha component na sideEffect handle karse
  // // je component ma useEffect lakhtu hase  te component render thaya pacchi useEffect ma je code lakhelo hase aene run karse

  // // variation 1 -> Every Reander : pass only call back function 
  // useEffect(()=> {
  //   console.log("UI Rendering Done")
  // })

  // // variation 2 -> first render : for first render we use to pass empty array as second parameter
  // useEffect( () => {
  //   console.log("UI rendering done");
  // },[]);

  // // variation 3 -> on first render + whenever dependency changes
  // useEffect( () => {
  //   console.log("change observed")
  // }, [name]);
  // // jyare pan name ma change thas tyare aa run thase

  // // variation 4 -> to handle unmounting(dom par thi remove karvu) of a component
  // // in this type of useEffect variation, return valo code pela execute thase and pachhi return sivay no uppper valo code execute thase 
  // // return ae mainly cleaning mate vapray chhe e.g. jyare aapde koi event listener add kariae to return ma event listener remove karai devanu jethi pela aagal valu listener remove thase and navu listener add thase
  useEffect( () => {
    console.log("listener added");
    return () => {
      console.log("listener removed")
    }
  },[text])
  // // in above code jyare bi text change thase tyare pela return valo code run thase and pacchi upper valo


  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
    // setName("kishu")
    // console.log(name);
  }


  return (
    <div className='App'>
      <input type="text" onChange={changeHandler} className='border-4 p-2 m-2 border-red-500'/>
    </div>
  );
}

export default App;

