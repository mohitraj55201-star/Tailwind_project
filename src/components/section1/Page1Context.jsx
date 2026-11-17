import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Context = (props) => {
  return (
    <div className='px-10 py-10 h-[90vh] flex items-center gap-15'>
      <LeftText/>
      <RightText users={props.users} />
    </div>
  )
}

export default Page1Context
