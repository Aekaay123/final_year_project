import React from 'react'
import { CgDanger } from "react-icons/cg";

const NotificationCard = () => {
  return (
    <div className='flex  w-1/2 justify-center items-center space-x-3 bg-black/90 p-2 rounded-md '>
      <CgDanger size={40} className='text-red-500'/>
      <p className='text-2xl'>Salim Pradhan from BE 4IT might soon face attendance issue.His attendance for the classes attended as of now is 89%.View more...</p>
    </div>
  )
}

export default NotificationCard