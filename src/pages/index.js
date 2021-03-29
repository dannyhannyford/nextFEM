import React from 'react'
import Link from 'next/link'

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