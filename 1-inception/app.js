import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id:"heading" }, "Hello World using React");

// const child = React.createElement("div", { id: "child1"}, [React.createElement("h1", { }, "I am h1"), React.createElement("h2", { }, "I am h2.")])
// const child2 = React.createElement("div", { id: "child2"}, [React.createElement("h1", { }, "I am h1"), React.createElement("h2", { }, "I am h2.")])
// const parent = React.createElement("div", { id: "parent"}, [child, child2])

// console.log(parent) //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// create react element using React
const heading = React.createElement("h1", {id:"heading"}, "Namaste React");


// create react element using JS (heading = jsxHeading, both are object)
//jsx
const jsxHeading = <h1 id="testHeading">Namaste React using JSX</h1>

console.log("Heading is : ", heading);
console.log("JSX heading : ", jsxHeading)

// Components 
// 1. Class based components
// 2. Functional Components

// React Functional Component
const HeadingComponent = () => {
    return <div>
        // rendering element inside component as it is just a variable we can render it using {}
        {jsxHeading}
        Function Componet
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // way to render element
root.render(<HeadingComponent />); // way to render component