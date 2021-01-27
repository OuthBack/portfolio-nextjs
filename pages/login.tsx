import Head from 'next/head'
import styles from '../styles/Home.module.css'
import jwt from 'jsonwebtoken'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [message, setMessage] = useState<string>('You are not logged in');

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    }).then( t=> t.json() );

    const token = res.token;

    if(token){
      const json = jwt.decode(token) as { [key:string]: string};
      setMessage(
        `Welcome ${json.username} and you are ${json.admin ? 'an admin!': 'not an admin'}`
        )
    } else{
      setMessage('Somethin went wrong')
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <form action="/api/login" method="post">
        <input type="email" name="username" id="" value={username} onChange={e => setUsername(e.target.value)} />
        <br/>
        <input type="password" name="password" id="" value={password} onChange={e => setPassword(e.target.value)} />
        <br/>
        <input type="button" value="Login" onClick={submitForm}/>
      </form>
    </div>
  )
}
