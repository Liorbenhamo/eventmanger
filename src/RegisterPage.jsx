import { useState } from "react"
import { NavLink } from "react-router-dom"

const users = [{ name: "", lastName: "", email: "", passsword: "", age: "" }]
function Register(props) {
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [verifyPassword, setVerifyPassword] = useState()
    const [age, setAge] = useState()

    function TakeUserData(e) {
        e.preventDefault()
        props.setUser([...props.user, { name: name, lastName: lastName, email: email, passsword: password, age: age }])
        
        {console.log(props.user)}
    }
    return (
        <form onSubmit={TakeUserData}>

            <input required placeholder="name" type="text" onChange={(e) => setName(e.target.value)} />
            <input required placeholder="lastname" type="text" onChange={(e) => setLastName(e.target.value)} />
            <input required placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <input required placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <input required placeholder="re-ennter password" type="password" onChange={(e) => setVerifyPassword(e.target.value)} />
            <input required placeholder="age" type="number" onChange={(e) => setAge(e.target.value)} />
            <button>register</button>
            <NavLink to={`/Login`}><button type="button">log in</button></NavLink>


        </form>
    )
}
export default Register