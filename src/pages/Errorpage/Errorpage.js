import React from 'react'
import { Link } from 'react-router-dom'
import {FaLongArrowAltLeft} from 'react-icons/fa'

const Errorpage = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-48 pb-32'>
      <h1 className='text-error text-3xl font-bold mb-4'>404! Page not found!</h1>
      <Link to='/'><p className='flex items-center'><FaLongArrowAltLeft /> &nbsp; Go Back to &nbsp;<span className='text-primary'>Homepage</span></p></Link>
    </div>
  )
}

export default Errorpage