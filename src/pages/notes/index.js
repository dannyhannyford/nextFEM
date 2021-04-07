import React, {useContext} from 'react'
import greeting from '../index'
import Link from 'next/link'

const Page = () => {
  const value = useContext(greeting);
  console.log('index.js -- value:', value);
  return (
  <>
    <h1>Note index path</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>
        Note 1
      </a>
    </Link>
  </>
)
  }

export default Page