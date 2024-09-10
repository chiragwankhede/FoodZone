import React from "react"
import { json } from "react-router-dom";



class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name : "Chirag Wankhede",
                login : "chiragwankhede",
                bio : "👋 Hi there! I'm Chirag, a passionate software engineer with a knack for turning ideas into elegant, efficient, and scalable solutions.",
                avatar_url : "https://avatars.githubusercontent.com/u/160884662?s=400&u=be04033f46f0280ac603a9e0505d26731b45c9a7&v=4"
            },
        }

    }


    async componentDidMount(){
        const data = await fetch ("https://api.github.com/users/chiragwankhede");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        })
      }

    render(){
        const {name , login, bio,avatar_url, url } = this.state.userInfo;
    
        return(
            <div className="p-10 border border-black text-sm bg-slate-100 font-sans h-full">
            <img className = "w-[150px] h-[150px] rounded-full mb-3"src = {avatar_url}></img>
            <h2 className="px-4 text-lg font-bold font-serif">Name : {name}</h2>
            <h3 className="px-4 text-lg font-bold font-serif">LinkedIn  UserName : {login}</h3>
            <h3 className="px-4 text-lg font-bold font-serif">Bio : {bio}</h3>
            <h3 className="px-4 text-lg font-bold font-serif">LinkedIn Profile Link : {"https://github.com/chiragwankhede"}</h3>
            <h3 className="px-4 text-lg font-bold font-serif">Email : chirag20wankhede@gmail.com</h3>
        </div>
        );
    }
}

export default UserClass;