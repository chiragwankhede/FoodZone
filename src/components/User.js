import { useState } from "react"


const User = ({name}) => {

    const[count , setCount] = useState(0);


  return (
    <div className="user-data">
        <h2>{name}</h2>
        <h3>Location : India</h3>
        <h3>Contact : chirag20wankhede@gmail.com</h3>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>

    </div>
  )
}

export default User