import Image from 'next/image'
import Link from 'next/link'
import AddToCart from './components/AddToCart'

import TopNav from './components/topNav';

export default function Home() {
  return (

    <main>
     <TopNav/>
    <Link href='/users'>Users</Link>
    <AddToCart/>
    
    </main>
  )
}
