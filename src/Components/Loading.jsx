import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='flex h-[100vh]  '>
        <Spinner animation='border' className='m-auto w-fit '>

        </Spinner>

    </div>
  )
}

export default Loading