


import React from 'react'
import UserButton from './user-button'


const Menu = () => {
  return (
    <div className='flex justify-end'>
      <nav className='md:flex gap-3 hidden w-full'>
            <UserButton />
      </nav>
    </div>
  )
}

export default Menu
