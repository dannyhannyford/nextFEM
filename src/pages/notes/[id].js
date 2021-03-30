import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {console.log(process.env.SECRET)}
      Note {id}
    </>
  )
}

export default Page