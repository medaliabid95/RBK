'use client'
import React, { useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3001/admin/login', {
        email,
        password,
      });

      const token = response.data.token;
      var payload = JSON.parse(window.atob(token.split('.')[1]));
      const { name, compus, image } = payload;

      sessionStorage.setItem('name', name);
      sessionStorage.setItem('location', compus);
      sessionStorage.setItem('image', image);
      router.push('/newStudents');
    } 

    catch (error) {
      console.error('Login Error:', error);
      setLoginError('Please check your email or password.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.screen__content}>
          <form className={styles.login}>
            <span className={styles.span}>RBK Dashboard</span>
            <div className={styles.login__field}>
              <i className={`${styles.login__icon} fas fa-user`}></i>
              <input
                type="text"
                className={`${styles.login__input} ${styles.inputbox}`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.login__field}>
              <i className={`${styles.login__icon} fas fa-lock`}></i>
              <input
                type="password"
                className={`${styles.login__input} ${styles.inputbox}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className={`${styles.button} ${styles.login__submit}`}
              onClick={handleSubmit}
            >
              <span className={styles.button__text}>Log In Now</span>
              <i className={`${styles.button__icon} fas fa-chevron-right`}></i>
            </button>
            {loginError && <p className={styles.error}>{loginError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
