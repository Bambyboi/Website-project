import React from "react";
// this is an example of JSX


const Hello = () => {
    // return (
    //     <div className="dummyClass">
    //         <h1>
    //             Its me Hello
    //         </h1>
    //     </div>
    // )

    return (
        

        // React.createElement("div", null, "Hello I'm Samuel")
        // React.createElement("h3", null, "Hello I'm Samuel")
        // React.createElement("p", null, "Hello I'm Samuel")
        // React.createElement("h2", null, "Hello I'm Samuel")

        // React.createElement("h1", null, "Hello I'm Samuel")

        // React.createElement("div", null, React.createElement("h1", null, "Hello I'm Samuel Kaleopa"))
        





        // this will implement the the (parent paeremeter, and properties, children parameter) 
        
        // React.createElement("div", {
        //     id: 'hello', class: 'dummyClass'
        // }, React.createElement("h1", null, "Hello I'm Samuel Kaleopa"))
        
        
        
        //       Parent_parameter, Properties<id or class>, sub-parameter
        React.createElement("div", null, React.createElement("h1", {id: "first_name", class: "last_name"}, "I am Jessop Kaleopa"))


        


    )
}

 

export default Hello 