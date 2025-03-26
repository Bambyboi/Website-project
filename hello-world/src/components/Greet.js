import React from 'react'

// this component is for an example of function component
//_______________________________________________________
// function Greet(){
//     return <h1>
//                 Hello Samuel
//             </h1>
// }

//const Greet = () => <h1>"Hello Samuel"</h1>

// including properties
 const Greet = props => {
    console.log(props)
  return <h1>Hello My name {props.name}</h1>

}



export default Greet