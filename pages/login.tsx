import Head from 'next/head'
import styles from '../styles/Home.module.css'
import jwt from 'jsonwebtoken'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [message, setMessage] = useState<string>('You are not logged in');
  const [secret, setSecret] = useState<string>('');

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then( t=> t.json() );

    const token = res.token;

    if(token){
      const json = jwt.decode(token) as { [key:string]: string };
      setMessage(
        `Welcome ${json.username} and you are ${json.admin ? 'an admin!': 'not an admin'}`
        )

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }).then( t=> t.json() );

      if(res.secretAdminCode){
        setSecret(res.secretAdminCode);
      } else{
        setSecret('Nothing avaliable');
      }

    } else{
      setMessage('Somethin went wrong')
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <h1>Secret: {secret}</h1>
      <form action="/api/login" method="post">
        <input type="username" name="username" id="" value={username} onChange={e => setUsername(e.target.value)} />
        <br/>
        <input type="password" name="password" id="" value={password} onChange={e => setPassword(e.target.value)} />
        <br/>
        <input type="button" value="Login" onClick={submitForm}/>
      </form>
    </div>
  )
}
