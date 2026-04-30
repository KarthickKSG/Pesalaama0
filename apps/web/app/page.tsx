import Link from 'next/link';
export default function Home(){return <main className='p-6'><h1 className='text-3xl font-bold'>SaaS Platform</h1><div className='mt-4 flex gap-4'><Link href='/dashboard'>Dashboard</Link><Link href='/(auth)/login'>Login</Link></div></main>}
