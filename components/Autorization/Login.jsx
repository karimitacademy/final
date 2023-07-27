import React, { useState } from 'react';
import s from './Autorization.module.css'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

import { useSignInMutation, useSignInQuery } from '../redux/Product';
import Link from 'next/link';
const Login = () => {
    

    const [user, setUser] = useState({
        email: "",
        password: "",
        userName: "",
    })
    const [signIn, { isError }] = useSignInMutation()
    const handleUser = async (e) => {
        e.preventDefault()
        if (user) {
            const resp = await signIn({ ...user }).unwrap()
            setUser('')
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
                    <h1 className={s.title}>Войти в Аккаунт</h1>
                    <MyInput placeholder='Email' onChange={e => setUser({ ...user, email: e.target.value })} />
                    <MyInput placeholder='UserName' onChange={e => setUser({ ...user, userName: e.target.value })} />
                    <MyInput placeholder='Password' onChange={e => setUser({ ...user, password: e.target.value })} />
                    <MyButton onClick={handleUser}>Войти в Аккаунт</MyButton>
                    <Link href='/Register/RegisterPage' className={s.link}>Нет Аккаунт зарегистрируйтесь</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;