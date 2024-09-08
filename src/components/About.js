import React from "react";
import User from "./User";
import UserClass from "./UserClass";




class About extends React.Component{
  constructor(props){
    super(props);
    console.log('parent const')

  }


  componentDidMount(){
    console.log('parent componentDidMount')
  }

  render(){
    console.log('parent render')

    return (
      <div>
      <h2>About in class</h2>
      <h3> This is about</h3>
      <UserClass
        name={"Chirag Wankhede "}
        location={"India "}
        contact={"chirag20wankhede@gmail.com"}
      />
    </div>
    )
  }


}




export default About;
