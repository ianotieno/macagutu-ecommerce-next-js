


import React from 'react'
import UserButton from './user-button'
import CartButton from './cart-button'


const Menu = () => {
  return (
    <div className='flex justify-end'>
      <nav className='md:flex hidden gap-3  w-full'>
            <UserButton />
            <CartButton />
      </nav>
    </div>
  )
}

export default Menu
