import {app} from './firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import './App.css';


function App() {

const auth=getAuth(app); 

const [component,switchComponent]=useState(()=>'signin');
const [user,setUser]=useState(()=>({active:false,user:null}));

useEffect(()=>{
  onAuthStateChanged(auth,function(user){
    
    if(user)
    setUser({active:true,user})
  },error=>{
    alert('Something wen\'t wrong');
    console.error(error);
  });
},[]);




async function signIn(username,password){
  try{
    const credential=await signInWithEmailAndPassword(auth,username,password);
    setUser({active:true,user:credential.user});

  }
  catch(error){
  console.error(error.message);
  }
}

async function signUp(username,password,phoneNumber,displayName){
 
  try{
    const credential=await createUserWithEmailAndPassword(auth,username,password);
    await updateProfile(auth.currentUser,{
   phoneNumber,
   displayName
    });

    alert(`Account created for ${credential.user.email}`);
    setUser({active:true,user:credential.user});

  }
  catch(error){
  console.error(error.message);
  }

}

async function logOut(){
 await signOut(auth)
 setUser({active:false,user:null});
}

if(user.active===true)
{
  return (
    <Home user={user} signOut={logOut}/>
  )
}

  return (
  <div style={{padding:'10px'}}>
    <div className='frontPage'>
        <h1>Welcome to the Task Manager</h1><br /><br />
        <button onClick={()=>switchComponent('signin')} className='btn btn-primary'>SignIn</button>&nbsp;
        <button onClick={()=>switchComponent('signup')} className='btn btn-secondary'>SignUp</button>
    </div>
    <hr/>
    {
      component==='signin'?(<SignIn signIn={signIn} />):(<SignUp signUp={signUp} />)
    }
  </div>
  );
}

export default App;