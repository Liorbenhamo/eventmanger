import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './LogIn';
import Register from './RegisterPage';
import User from './User';

function App() {
  const [userId,setUserId]=useState(0)
  const [show,setShow]=useState(0)
  const [user, setUser] = useState([])
  const [userLog,setUserLog] =useState({name:"",password:""})
  function EqualUser(){
  for(let i=0;i<user.length;i++){
  if(user[i].name===userLog.name && user[i].password===userLog.password){
    setUserId(i)
    setShow(1)
    // console.log(user)
    return(userId)
    break;
  }
  }
}
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register user={user} setUser={setUser} />}></Route>
        <Route path='/LogIn' element={<LogIn EqualUser={EqualUser} userLog={userLog} setUserLog={setUserLog} user={user}/>}></Route>
        <Route path='/user/:userId' element={<User userId={userId} user={user}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
