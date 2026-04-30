'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  async function createDoctor(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/admin/create-doctor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    const data = await res.json();
    setMsg(data.message || 'Created');
  }

  return <main className='p-6 max-w-lg'><h1 className='text-2xl font-bold'>Admin Console</h1><p className='mb-4'>Only admin can create doctor accounts.</p><form onSubmit={createDoctor} className='space-y-2'><input className='border p-2 w-full' placeholder='Doctor name' value={name} onChange={e=>setName(e.target.value)} /><input className='border p-2 w-full' placeholder='Doctor email' value={email} onChange={e=>setEmail(e.target.value)} /><input className='border p-2 w-full' type='password' placeholder='Temporary password' value={password} onChange={e=>setPassword(e.target.value)} /><button className='bg-emerald-600 text-white px-4 py-2'>Create Doctor</button></form><p className='mt-3'>{msg}</p></main>;
}
