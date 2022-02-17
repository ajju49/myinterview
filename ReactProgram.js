
// ************************************ [ usestate ] [counter ]**********************************************************
// import React, {useState} from 'react'

// function App() {
//   const [num, setnum] = useState(0)

//   const incrementNum =()=>{
//       setnum(num + 1 )

//   }
//   return (
//     <div>
//       <button onClick={incrementNum}>{num}</button>
//     </div>
//   )
// }

// export default App

// ************************************ [ useeffect ] [counter ]**********************************************************
// import React, { useState, useEffect } from "react";
// import "./AppPractice.css";

// function AppPractice() {
//   const [number, setnumber] = useState(0);

//    useEffect(() => {

//     document.title= `you clicked for  ${number}  times`
//    }, [number])

//   const increment = () => {
//     setnumber(number + 1);
//   };

//   return (
//     <>
//       <button onClick={increment}> {number} </button>

//     </>
//   );
// }

// export default AppPractice;

// *********************************[ usestate array ]***********************************************************

// import React, { useState } from "react";
// import "./AppPractice.css";
// const AppUseStateArray = () => {
//   const biodata = [
//     {
//       id: 0,
//       myName: "ajinkya",
//       age: 28,
//     },
//     {
//       id: 1,
//       myName: "monika",
//       age: 25,
//     },
//     {
//       id: 2,
//       myName: "pratik",
//       age: 29,
//     },
//   ];

//   const [myArray, setmyArray] = useState(biodata);

//   const clearArray = () => {
//     setmyArray([]);
//   };
//   return (
//     <>
//       {myArray.map((abc) => (
//         <h1 className="myStyle" key={abc.id}>
//           name:{abc.myName} & age: {abc.age}
//         </h1>
//       ))}
//       <button onClick={clearArray}>clear</button>
//     </>
//   );
// };

// export default AppUseStateArray;

// ************************************* [usestate object ]********************************************************

// import React, { useState } from "react";
// import "./AppPractice.css";
// function AppUsestateObject() {
//   const [myObject, setmyObject] = useState({
//     // first set data
//     myName: "ajinkya",
//     myAge: 28,
//     degree: "BE",
//   });

//   const changeObject = () => {
//     setmyObject({ ...myObject, myName: "shubham" }); // used spread opear to take prev. data as it is n thn chnge which data we want to chng
//   };

//   return (
//     <div>
//       <h1 className="myStyle">

//         Name: {myObject.myName} & age: {myObject.myAge} & degree:{myObject.degree}
//       </h1>
//       <button onClick={changeObject}>update</button>
//     </div>
//   );
// }

// export default AppUsestateObject;

//**************************** [ useeffect cleanup function] ***************************************************** */
// import React, { useState, useEffect } from "react";

// function AppUseEffectCleanUp() {
//   const [widthcount, setwidthcount] = useState(window.screen.width);
//   const actualwidth = () => {
//     console.log(window.innerWidth);
//     setwidthcount(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", actualwidth);
//     return () => {
//       window.removeEventListener("resize", actualwidth);
//     };
//   });

//   return (
//     <div>
//       <p>the size of ur window is :</p>
//       <h1>{widthcount} px</h1>
//     </div>
//   );
// }

// export default AppUseEffectCleanUp;

// *************************************** [useReducer ]*********************************************************
// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   // console.log(state, action);
//   if (action.type === "INCREMENT") {
//     return state + 1;
//   }

//   if (action.type === "DECREMENT") {
//     return state - 1;
//   }
// };

// function AppReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
//     </>
//   );
// }

// export default AppReducer;

// ################################# [ useRef and useForward by techsith] ##############################################################

// import React, { useEffect, useRef } from "react";

// function AppuseRef() {
//   const firstNameRef = useRef(null);     //here we define useRef
//   const lastNameRef = useRef(null);    //here we define useRef
//   const submitRef = useRef(null);    //here we define useRef

//  //---------------------------------------------------------------------------------------
//   useEffect(() => {
//     firstNameRef.current.focus();
//   }, []);

//   function firstkeyDown(e) {                // function for each key
//     if (e.key === "Enter") {                // if pressed key = enter then it will proceed
//       lastNameRef.current.focus();
//     }
//   }
//   function lastkeyDown(e) {                 // function for each key
//     if (e.key === "Enter") {                // if pressed key = enter then it will proceed
//       submitRef.current.focus();
//     }
//   }

//   function submitkeyDown() {              // function for each key
//           alert('form submitted')
//   }
//   //--------------------------------------------------------------------------------------
//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           type="text "
//           onKeyDown={firstkeyDown}
//           ref={firstNameRef}           // here we give reference
//           placeholder="Enter first name"
//         />
//         <input
//           type="text "
//           onKeyDown={lastkeyDown}
//           ref={lastNameRef}            // here we give reference
//           placeholder="Enter last name"
//         />
//         <button onKeyDown={submitkeyDown} ref={submitRef}>
//           submit
//         </button>
//       </header>
//     </div>
//   );
// }

// export default AppuseRef;

// **************************************[ useref 2]*[shubham ]******************************************************

// // Useref hook is used in uncontrolled forms
// import React, { useRef, useState } from "react";
// import { FcApproval } from "react-icons/fc";

// const Uncontrolled = () => {
//   //it is like a usestate only and its peserve (kisi chij ko hold karke rakhana) the value.
//   //useref component ko wapis se rerender nahi karta
//   const luckyName = useRef(null); //input field ko ref karne ke liye luckyname se ref kiya
//   const [show, setShow] = useState(false);

//   const submitForm = (e) => {
//     e.preventDefault(); //form automatic submit na ho isliye
//     console.log(luckyName.current.value);
//     const name = luckyName.current.value;
//     name === "" ? alert("please fill the data") : setShow(true);
//   };

//   return (
//     <>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <label htmlFor="luckyname">Enter your luckyname here</label>
//           <br />
//           <input type="text" id="luckyname" ref={luckyName} />
//         </div>
//         <br />
//         <button>Submit</button> <FcApproval />
//       </form>
//       <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
//     </>
//   );
// };

// export default Uncontrolled;

// *************************************[useforward ref]*[profiler]* [parent]********************************************

// // Forwardref hook with Profiler
// import React, { useRef, Profiler } from "react";
// import ChildApp from "./child";

// function ForwardrefApp() {
//   let inputRef = useRef(null);

//   function updateInput() {
//     inputRef.current.value = "1000";
//     inputRef.current.style.color = "red";
//     inputRef.current.focus();
//   }
//   // callback funtion for profiler
//   function callbackfn(
//     id, // the "id" prop of the Profiler tree that has just committed
//     phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//     actualDuration, // time spent rendering the committed update
//     baseDuration, // estimated time to render the entire subtree without memoization
//     startTime, // when React began rendering this update
//     commitTime, // when React committed this update
//     interactions
//   ) {
//     console.log(
//       id,
//       phase,
//       actualDuration,
//       baseDuration,
//       startTime,
//       commitTime,
//       interactions
//     );
//   }
//   return (
//     <div>
//       <h1>ForwardRef in react</h1>
//       <Profiler id="forwardrefhook" onRender={callbackfn}>
//         <ChildApp ref={inputRef} />
//       </Profiler>
//       <Profiler id="btn" onRender={callbackfn}>
//         <button onClick={updateInput}>Update inputBOx</button>
//       </Profiler>
//     </div>
//   );
// }
// export default ForwardrefApp;

// note :it is imported in index.js directly

// *************************************[useforward ref]*[profiler]* [child]********************************************

// import React, { forwardRef } from "react";

// function ChildApp(props, ref) {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }
// export default forwardRef(ChildApp);




/*********************************[usememo]**[shubham]****************************************************** */
// import React, { useState, useMemo } from "react";
// import "./styles.css";

// function App() {
//   const [conterplus, setconterplus] = useState(0);
//   const [counterminus, setcounterminus] = useState(0);

//   function plusHandler() {
//     setconterplus(conterplus + 1);
//   }

//   function minusHandler() {
//     setcounterminus(counterminus - 1);
//   }

//   const countMemo = useMemo(
//     function mepnchng() {
//       return counterminus * 5;
//     },
//     [counterminus]
//   );
//   return (
//     <>
//       <div>{conterplus}</div>
//       <button onClick={plusHandler}> plus </button>
//       <div style={{ background: "yellow" }}>{countMemo}</div>
//       <div>{counterminus}</div>
//       <button onClick={minusHandler}> minus</button>
//     </>
//   );
// }
// export default App;

/////////////////////////////////////////[ usecallback ]//////////////////////////////////////////////////////////
// import React, { useState, useCallback } from 'react' // here we import callback
// import Count from './Count'
// import Button from './Button'
// import Title from './Title'

// function ParentComponent() {
// 	const [age, setAge] = useState(25)
// 	const [salary, setSalary] = useState(50000)

// 	const incrementAge = useCallback(() => {  // here we used callback
// 		setAge(age + 1)
// 	}, [age]) // here we add dependency on wich we want to re-render ths perticular component

// 	const incrementSalary = useCallback(() => {  // here we used callback
// 		setSalary(salary + 1000)
// 	}, [salary]) // here we add dependency on wich we want to re-render ths perticular component

// 	return (
// 		<div>
// 			<Title />
// 			<Count text="Age" count={age} />
// 			<Button handleClick={incrementAge}>Increment Age</Button>
// 			<Count text="Salary" count={salary} />
// 			<Button handleClick={incrementSalary}>Increment Salary</Button>
// 		</div>
// 	)
// }

// export default ParentComponent

// *************************************[ basic form ]****************************************************************

// import React, { useState } from "react";
// import "./AppPractice.css";

// function BasicForm() {
//   const [email, setemail] = useState(" ");
//   const [password, setpassword] = useState(" ");
//   const [allentry, setallentry] = useState([]);

//   const submitForm = (e) => {
//     e.preventDefault();

//     const newentryyy = {
//       // id: new Date().getTime().toString(),
//       email: email,
//       password: password,
//     };

//     setallentry([...allentry, newentryyy]);
//     setemail(" ");
//     setpassword(" ");
//   };

//   return (
//     <>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             autoComplete="off"
//             value={email}
//             placeholder="enter email id"
//             onChange={(e) => setemail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             autoComplete="off"
//             value={password}
//             placeholder="enter password"
//             onChange={(e) => setpassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       <div>
//         {allentry.map((currElem) => {
//           return (
//             <div className="showDetails" key={currElem.id}>
//               <p>
//                 your email is <strong>{currElem.email}</strong> & password is
//                 <strong>{currElem.password}</strong>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default BasicForm;

// **************************************[router ] [index.js ]************************************************************
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,

//   document.getElementById("root")
// );

//* ********************[ plain Router ]*****************************  */
    //  <Switch>
    //     <Route exact path="/" component={About} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route path="/contact/name" component={Name} />
    //     <Route component={Error} />
    //   </Switch> 
//* **************************[ UseParamsHook ]***********************************************  
    //   <UseParamsHook />
    //   <Switch>
    //     <Route exact path="/" component={() => <About name="About" />} />
    //     <Route
    //       exact
    //       path="/service"
    //       render={() => <Service name="Service" />} //render method
    //     />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route path="/contact/Name" component={Name} />
    //     <Route path="/User/:fname/:lname/:city" component={User} />
    //     <Route component={Error} />
    //   </Switch> 
//* **************************[ useLocationHook ]***************************************** 
      /* #60. useLocationHook in React Router * */
       //* <UseLocationHook />
    //   <Switch>
    //     <Route exact path="/" component={() => <About name="About" />} />
    //     <Route
    //       exact
    //       path="/service"
    //       render={() => <Service name="Service" />} //render method
    //     />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route path="/contact/Name" component={Name} />
    //     <Route path="/locationuser/:fname/:lname" component={LocationUser} />
    //     <Route component={Error} />
    //   </Switch> 
//* ***************************[ UseHistoryApp ]**************************************************************  */}
    //   <UseHistoryApp />
    //    <Switch>
    //     <Route exact path="/" component={() => <About name="About" />} />
    //     <Route
    //       exact
    //       path="/service"
    //       render={() => <Service name="Service" />} //render method
    //     />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route path="/contact/Name" component={Name} />
    //     <Route path="/historyuser/:fname/:lname" component={HistoryUser} />
    //     <Route component={Error} />
    //   </Switch> 


//-**********************************[ lazy loading ]**************************************************





// *****************2. code splitting via import() method****************************************** 
import Content from "./Content";
class App extends React.Component {
  render() {
    import("./Math").then((Math) => {
      console.log(
        Math.add(20, 5) + " & " + Math.sub(10, 5) + " & " + Math.mult(20, 5)
      );
    });
    return (
      <>
        <p>hi welcome to code splitting import method</p>;
        <Content />
      </>
    );
  }
}
export default App;

// ----------------[ math.js] [child of above]-----------
function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mult(a, b) {
    return a - b;
  }
  export { add, sub, mult };


// // ------------ 3. code spilliting via React.lazy() loading method ------------

import React, { Suspense } from "react";
const Content = React.lazy(() => import("./Content"));
class App extends React.Component {
  render() {
    return (
      <>
        <p>hi welcome to code splitting import method</p>
        <Suspense
          fallback={<h1 style={{ color: "red" }}>Content is comming soon</h1>}
        >
          <Content />
        </Suspense>
      </>
    );
  }
}

export default App;
// --------------------[ content component ] --------------------------------

function Content() {
    return (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, placeat.
        Qui maiores quaerat facere cumque beatae vel sint porro et nemo, id autem
        il
       
      </p>
    );
  }
  export default Content;
  


//-************************************[ HOC ]*[higher order component]*************************************************************    
import "./App.css";
import { useState } from "react";

const App = () => {
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h3>{count}</h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Update
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Higher order component</h1>
      <HOCRed cmp={Counter} />,
      <HOCGreen cmp={Counter} />
    </div>
  );
};

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 150 }}>
      red
      <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <h1 style={{ backgroundColor: "green", width: 150 }}>
      Green <props.cmp />
    </h1>
  );
}

export default App;


// ***********************************[ error boundries]********************************************************************

// Error Boundaries: Error Boundaries basically provide some sort of boundaries or checks on errors,
//  They are React components that are used to handle JavaScript errors in their child component tree.


// React components that catch JavaScript errors anywhere in their child component tree, log those errors,
//  and display a fallback UI. It catches errors during rendering, in lifecycle methods, etc.


// Reason to Use: Suppose there is an error in JavaScript inside component then it used to corrupt 
// React’s internal state and cause it to emit cryptic errors. Error boundaries help in removing these errors and 
// display a Fallback UI instead(Which means a display of an error that something broke in the code).


// Working Principle: Error Boundary works almost similar to catch in JavaScript. Suppose an error
//  is encountered then what happens is as soon as there is a broken JavaScript part in Rendering or 
//  Lifecycle Methods, It tries to find the nearest Error Boundaries Tag.


// ---------------------------------------------------------------------------

// import {ErrorBoundary} from 'react-error-boundary'

// function ErrorFallback({error, resetErrorBoundary}) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }

// const ui = (
//   <ErrorBoundary
//     FallbackComponent={ErrorFallback}
//     onReset={() => {
//       // reset the state of your app so the error doesn't happen again
//     }}
//   >
//     <ComponentThatMayError />
//   </ErrorBoundary>
// )