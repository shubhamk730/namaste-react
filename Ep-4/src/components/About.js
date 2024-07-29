import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {

  constructor(props) {
    super(props);

    // console.log("Parent Constructor")
  }

  componentDidMount(){
    // console.log("Parent did mount");

  }

  render() {
    // console.log("Parent render");
    return <div>
        <h1>About</h1>

        <UserClass name={"Shubham Kaushik"} location={"New Delhi"} />
    </div>
  }
}


export default About