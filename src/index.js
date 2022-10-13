import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//render aray
// const RenderArray = () => {
//   const user = [
//     {
//       name: "A",
//       age: "28",
//       phone: "1202xxx",
//     },
//     {
//       name: "B",
//       age: "22",
//       phone: "34xxx",
//     },
//     {
//       name: "C",
//       age: "19",
//       phone: "45xxx",
//     },
//   ];
//   return (
//     <>
//       {user.map((item, index) => {
//         return (
//           <div>
//             <h1>{item.name}</h1>
//             <p>{item.age}</p>
//             <p>{item.phone}</p>
//           </div>
//         );
//       })}
    // </>
    // <div>
    //   <h1>Bai tap Render Array</h1>
    //   <h1>H</h1>
    //   <p>25</p>
    //   <p>22xxx</p>
    // </div>
//   );
// };


//render
// const ArrParent = () => {
//   const city = [
//     {
//       "name": "Ha Noi",
//       "code": "10000",
//     },
//     {
//       "name": "HCM",
//       "code": "30000",
//     }
//   ]
// }

// const ArrChild = ({city}) => {
//   return (
//     <>
//       {
//         city && city.map ((item,index) => {
//           return (
//             <div className='wrap-city' key ={index}>
//               <h1>Name: {item.name}</h1>
//               <p>Code: {item.code}</p>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }


//render vao DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
