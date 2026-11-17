import React from 'react'

const RightCard = (props) => {
  return (
    <div className='overflow-hidden shrink-0 relative h-full w-70 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt=""  />

      <div className='absolute h-full w-full top-0 left-0 p-6 flex flex-col justify-between'>
        <h1 className='bg-white rounded-full h-10 w-10 text-2xl font-bold flex justify-center items-center'>{props.id+1}</h1>
        <div>
            <p className='text-lg leading-normal text-white mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore ipsa tempore error iusto harum.</p>
            
            <div className='flex justify-between'>
                <button className='bg-blue-600 rounded-full px-7 py-2 font-semibold text-white'>{props.tag}</button>
                <button className='bg-blue-600 rounded-full px-3 py-2 font-semibold text-white'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
