import React from "react"



class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count : 0,
        };
    console.log("child COnst")

    }

    componentDidMount(){
        console.log('Child componentDidMount')
      }

    render(){
    console.log("child render")

        const {name,location,contact} = this.props;
        const {count} = this.state;
        return(
            <div className="user-data">
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : {contact}</h3>
            <p>Count : {count}</p>

            <button onClick={()=>{
                this.setState({
                    count : count + 1,
                })
            }}>Increment</button>

        </div>
        );
    }
}

export default UserClass;