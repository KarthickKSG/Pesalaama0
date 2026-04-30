'use client';
import { useState } from 'react'; import axios from 'axios';
export default function Login(){const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
return <form className='p-6 space-y-2' onSubmit={async e=>{e.preventDefault(); const r=await axios.post(process.env.NEXT_PUBLIC_API_URL+'/api/auth/login',{email,password}); localStorage.setItem('token',r.data.accessToken);}}><input className='border p-2' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/><input className='border p-2' placeholder='password' type='password' value={password} onChange={e=>setPassword(e.target.value)}/><button className='bg-black text-white px-4 py-2'>Login</button></form>}
