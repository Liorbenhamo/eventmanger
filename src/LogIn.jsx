import { useState } from "react"
import { NavLink } from "react-router-dom"

function LogIn(props) {
    const [nameLog,setNameLog]=useState()
    const [passwordLog,setPasswordLog]=useState()
    const [userId,setUserId] =useState(1)
   
    console.log(props.user)
    function TwoClicks(){
        props.setUserLog({name:nameLog,password:passwordLog})
        let userI=props.EqualUser()
        // setUserId(user)

    }
    return (
        <div>
            <input placeholder="name" type="text" onChange={(e) => setNameLog(e.target.value)} />
            <input placeholder="password" type="password" onChange={(e) => setPasswordLog(e.target.value)} />
            <button onClick={()=>TwoClicks}>log in</button>
            
            <NavLink to={`/user/${userId}`}><button>go user</button></NavLink>
        </div>
    )
}
export default LogIn