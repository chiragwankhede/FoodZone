import React from "react";
import User from "./User";
import UserClass from "./UserClass";




class About extends React.Component{
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div className="about">
      <UserClass
      />
    </div>
    )
  }


}




export default About;
