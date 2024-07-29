import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo : {
                name : "Shubham Kaushik",
                location : "Default location"
            }
        }

        // console.log("Child Constructor");
    }

    async componentDidMount() {
        // console.log("Child did mount");
        
        // make API calls
        const data = await fetch("https://api.github.com/users/shubhamk730");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }
    
    clickHandler = () => {
        // Never update state variable directly
        // this.state.count = this.state.count + 1;

        this.setState({
            count : this.state.count + 1
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated")
    }

    render() {
        // console.log("Child render")
        const name = this.state.userInfo.login
        const { location, avatar_url } = this.state.userInfo;
        const { count } = this.state;
        return <div className="user-card">
            <h1>Count is : {count}</h1>
            <button onClick={this.clickHandler}>Increase Count</button>
            {/* <h1>Count is : {this.state.count}</h1> */}
            <h1>Count2 is : {this.state.count2}</h1>
            <img className="h-[100px] w-[100px]" src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location||"India"}</h3>
            <h4>Contact: @sk7</h4>
        </div>
    }
}

export default UserClass;