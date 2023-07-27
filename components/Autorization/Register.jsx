import React, { useState } from 'react';
import s from './Autorization.module.css'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { useAddUserMutation } from '../redux/Product';
import Link from 'next/link';
const Register = () => {
    const [newUser, setNewUser] = useState({
        email: "",
        userName: "",
        password:"",
        id: Date.now()
    })

    const [addUser, {isError}] = useAddUserMutation()
    const handleUser = async(e) =>{
        e.preventDefault()
        if(newUser){
          const resp = await addUser({...newUser}).unwrap()
            setNewUser('')
            if (resp) {
                localStorage.setItem('access', resp.accessToken)
                localStorage.setItem("id", resp.user.id)
                if(localStorage.getItem('access')){
                    window.location.href='http://localhost:3001/Content/ContentPage'
                }
            }
        }
    }
 
    return (
        <div className={s.body}>
        <div className={s.container}>
            <form className={s.form}>
                <h1 className={s.title}>Создать Аккаунт</h1>
                <MyInput placeholder='Email' onChange={e => setNewUser({...newUser, email:e.target.value})}/>
                <MyInput placeholder='UserName'  onChange={e => setNewUser({...newUser, userName:e.target.value})}/>
                <MyInput placeholder='Password'  onChange={e => setNewUser({...newUser, password:e.target.value})}/>
                <MyButton onClick={handleUser}>Создать Аккаунт</MyButton>
                <Link href='/Register/LoginPage' className={s.link}>Уже есть Аккаунт</Link>
            </form>
        </div>
        </div>
    );
};

export default Register;