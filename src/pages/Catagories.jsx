import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'
import {FaBurger} from 'react-icons/fa6'
import {GiChefToque} from 'react-icons/gi'
import {LuJapaneseYen} from 'react-icons/lu'
import { useSelector } from 'react-redux'
export const Catagories = () => {
    let {search} = useSelector((state) => state.status)
  return (
    <div className={`${search ? 'py-1' : 'py-0'} transition w-9/12 mx-auto flex items-center justify-center`}>
        <NavLink to={'/cuisine/Italian'} className={'w-14 h-14 mx-4 bg-black/10 hover:scale-125 cursor-pointer transition border-solid border-[2px] border-transparent hover:border-black/40 group flex items-center justify-center rounded-full flex-col'}>
            <FaPizzaSlice className='group-hover:scale-110' />
            <p className='break-words text-xs font-semibold'>Italian</p>
        </NavLink>
        <NavLink to={'/cuisine/American'} className={'w-14 h-14 mx-4 bg-black/10 hover:scale-125 cursor-pointer transition border-solid border-[2px] border-transparent hover:border-black/40 group flex items-center justify-center rounded-full flex-col'}>
            <FaBurger className='group-hover:scale-110' />
            <p className='break-words text-xs font-semibold'>American</p>
        </NavLink>
        <NavLink to={'/cuisine/Tahi'} className={'w-14 h-14 mx-4 bg-black/10 hover:scale-125 cursor-pointer transition border-solid border-[2px] border-transparent hover:border-black/40 group flex items-center justify-center rounded-full flex-col'}>
            <GiChefToque className='group-hover:scale-110' />
            <p className='break-words text-xs font-semibold'>Tahi</p>
        </NavLink>
        <NavLink to={'/cuisine/Japan'} className={'w-14 h-14 mx-4 bg-black/10 hover:scale-125 cursor-pointer transition border-solid border-[2px] border-transparent hover:border-black/40 group flex items-center justify-center rounded-full flex-col'}>
            <LuJapaneseYen className='group-hover:scale-110' />
            <p className='break-words text-xs font-semibold'>Japanese</p>
        </NavLink>
    </div>
  )
}
