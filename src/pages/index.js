import React from 'react'
import Link from 'next/link'

export const greeting = React.createContext('hello');
const Home = () => (
  <>
    <div>index path</div>
    <Link href="/notes">
      <a>
        Link
      </a>
    </Link>
  </>
)

export default Home;