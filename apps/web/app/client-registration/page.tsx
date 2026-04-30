'use client';
import { useState } from 'react';
export default function ClientRegistration(){
  const [name,setName]=useState(''); const [phone,setPhone]=useState(''); const [msg,setMsg]=useState('');
  return <main className='p-6 max-w-md'><h1 className='text-2xl font-bold'>Client Registration</h1><form className='space-y-2 mt-3' onSubmit={async e=>{e.preventDefault();const r=await fetch('/api/client-registration',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,phone})}); const d=await r.json(); setMsg(`Registered: ${d.id}`);}}><input className='border p-2 w-full' value={name} onChange={e=>setName(e.target.value)} placeholder='Full name'/><input className='border p-2 w-full' value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Phone'/><button className='bg-indigo-600 text-white px-4 py-2'>Register</button></form><p>{msg}</p></main>
}
