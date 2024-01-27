const heading = React.createElement("h1", { id:"heading" }, "Hello World using React");

const child = React.createElement("div", { id: "child1"}, [React.createElement("h1", { }, "I am h1"), React.createElement("h2", { }, "I am h2.")])
const child2 = React.createElement("div", { id: "child2"}, [React.createElement("h1", { }, "I am h1"), React.createElement("h2", { }, "I am h2.")])
const parent = React.createElement("div", { id: "parent"}, [child, child2])

console.log(parent) //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);