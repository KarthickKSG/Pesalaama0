'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth, db } from '../../lib/firebase';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', cred.user.uid));
      const role = userDoc.data()?.role ?? 'patient';
      if (role === 'admin') router.push('/admin');
      else if (role === 'doctor') router.push('/doctor');
      else router.push('/patient');
    } catch (err: any) {
      setError(err.message);
    }
  }

  return <main className='p-6 max-w-md'><h1 className='text-2xl font-bold mb-4'>Unified Sign In</h1><form onSubmit={onSubmit} className='space-y-3'><input className='border p-2 w-full' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><input className='border p-2 w-full' type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} /><button className='bg-blue-600 text-white px-4 py-2 w-full'>Sign In</button>{error && <p className='text-red-600'>{error}</p>}</form></main>;
}
