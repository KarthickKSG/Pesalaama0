'use client';
import { useEffect } from 'react';
import { initAnalytics } from '../../lib/firebase';

export default function LandingPage(){
  useEffect(()=>{ initAnalytics(); },[]);
  return <main className='p-6'><h1 className='text-3xl font-bold'>Tool Tracker Healthcare Platform</h1><p className='mt-3'>Firebase-powered SaaS platform for registration, prebooking, and role-based operations.</p></main>
}
