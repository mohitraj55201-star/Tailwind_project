import React from 'react'
import RightCard from './RightCard'

const RightText = (props) => {
  return (
    <div className='h-full w-3/4 flex flex-nowrap overflow-auto gap-10 p-6'>
    {props.users.map(function(elem,ixid){
        return <RightCard img={elem.img} tag={elem.tag} id={ixid} />
     })}
    </div>
  )
}

export default RightText
