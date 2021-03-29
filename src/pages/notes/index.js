import React from 'react'
import Link from 'next/link'

const Page = () => (
  <>
    <h1>Note index path</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>
        Note 1
      </a>
    </Link>
  </>
)

export default Page