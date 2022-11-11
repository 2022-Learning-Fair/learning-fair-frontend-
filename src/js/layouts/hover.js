// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "./button";
// import Menu from "./menu";
// import P from "./p";

// var Hover=React.createClass({
//     getInitialState: 
//         function() {
//             return {hover: false};
//         },
//     onMouseEnterhandler:
//         function(){
//             this.setState({hover:true})
//         },
//     onMouseleaveHandler:function(){
//         this.setState({hover:false})
//     },
//     render:function(){
//         var inner=normal;
//         if(this.state.hover){
//             inner.hover
//         }
//         const [classURL, setClassURL] = useState('/class');
//         const navigate = useNavigate();
//         function handleOnClick(classURL){
//           navigate(classURL)
//         }
//         return (
//             <Button className='.button' style={outer} id='ClassBtn' value='분반'>
//                 <div className="classMenu" style={inner}
//                     onMouseEnter={this.onMouseEnterhandler}
//                     onMouseLeave={this.onMouseleaveHandler} >
//                     <Menu value={classURL} className="leftMenu" onClick={handleOnClick} onChange={setClassURL}>
//                         <P value="DASF002I1"/>
//                         <P value="DASF002I2"/>
//                         <P value="DASF002I3"/>
//                         <P value="DASF002I4"/>
//                         <P value="DASF002I5"/>
//                     </Menu>
//                     <Menu value={classURL} className="rightMenu" onClick={handleOnClick} onChange={setClassURL}>
//                         <P value="DASF002I6"/>
//                         <P value="DASF002I7"/>
//                         <P value="DASF002I8"/>
//                         <P value="DASF002I9"/>
//                         <P value="GEDT015I1"/>
//                     </Menu>
//                 </div>
//             </Button>
//         )
//     }
// })

// var hover={
//     visibility: "visible",
//     display: "block",
//     textAlign: "center",
//     margin: "0 auto"
// }

// React.render(
//     <Hover></Hover>,
//     document.getElementById('container')
// )