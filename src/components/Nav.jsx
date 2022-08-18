import React from 'react'
import { useGlobalContext } from '../context'

function Nav() {
  const {Dark, toggle} = useGlobalContext()
  console.log(Dark)

  return (
    <nav className='flex border border-light-bg py-3 px-5 items-center justify-between dark:bg-dark-bg dark:border-dark-bg'>
      <div className='lg:ml-16'>
        <h1 className='text-xl dark:text-dark-text font-bold'>
          Where in the World?
        </h1>
      </div>
      <div className=' lg:mr-10 justify-items-center'>
      <button className='flex' onClick={toggle}>
      <img className='h-6 mr-2 dark:text-dark-text' src="https://img.icons8.com/sf-regular/48/000000/moon-symbol.png" alt='dark'/>
      <h1 className='font-semibold dark:text-dark-text'>Dark mode</h1>
      </button>
      </div>
    </nav>
  )
}

export default Nav