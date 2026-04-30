'use client';
import { useState } from 'react';
export default function Prebooking(){
  const [service,setService]=useState('General'); const [date,setDate]=useState(''); const [msg,setMsg]=useState('');
  return <main className='p-6 max-w-md'><h1 className='text-2xl font-bold'>Prebooking</h1><form className='space-y-2 mt-3' onSubmit={async e=>{e.preventDefault();const r=await fetch('/api/prebooking',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({service,date})}); const d=await r.json(); setMsg(`Prebooked: ${d.id}`);}}><input className='border p-2 w-full' value={service} onChange={e=>setService(e.target.value)} placeholder='Service'/><input type='date' className='border p-2 w-full' value={date} onChange={e=>setDate(e.target.value)} /><button className='bg-indigo-600 text-white px-4 py-2'>Submit</button></form><p>{msg}</p></main>
}
