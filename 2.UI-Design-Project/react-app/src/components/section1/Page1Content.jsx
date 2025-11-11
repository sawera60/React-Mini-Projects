import React from 'react'
import LeftContent from './LeftContent'
import RightContext from './RightContext'

const Page1Content = () => {
  return (
    <div className='py-10 h-[90vh] flex gap-10 items-center bg-amber-600 px-18'>
    <LeftContent/>
    <RightContext/>
    </div>
  )
} 

export default Page1Content