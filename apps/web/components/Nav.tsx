import Link from 'next/link';
const pages = ['landing','client-registration','prebooking','signin','admin','doctor','patient','appointments','notifications','profile','settings','help','reports'];
export default function Nav(){
  return <nav className='flex flex-wrap gap-3 p-4 bg-slate-800 text-white'>{pages.map(p=><Link key={p} href={`/${p}`} className='text-sm capitalize'>{p.replace('-', ' ')}</Link>)}</nav>;
}
