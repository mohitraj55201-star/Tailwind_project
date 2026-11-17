import React from 'react'
import Section1 from './components/section1/Section1'

const users=[
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Satisfied'
  },{
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Underserved'
  },{
    img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Underbanked'
  },{
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Sincere'
  },{
    img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Satisfied'
  },{
    img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Underserved'
  },
  
]

const App = () => {
  return (
    <div className='text-white'>
      <Section1 users={users}/>
    </div>
  )
}

export default App
