import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {CiMenuFries} from 'react-icons/ci'
import {TfiClose} from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Redux/StateReducer'
import {IoFastFoodOutline} from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'
export const Header = () => {
    let [show,setShow] = useState(false)
    let dispatcher =useDispatch()
    let navigate = useNavigate()
    let [search,setSearch] = useState('')
    let CallerFun = () => {
        setShow(!show)
        show ? dispatcher(setSearch(false )) : dispatcher(setSearch(true )) 
    }
    let RedirectSearch = () => {
        navigate(`/search/${search}`)
        setSearch('')
    }
  return (
    <div className='w-9/12 relative h-16 overflow-hidden mx-auto flex items-center justify-between py-2'>
        <NavLink to={'/'}>
            <IoFastFoodOutline className='text-5xl' />
        </NavLink>
        <div className={`${show ? 'top-2' : '-top-96' } absolute flex left-28 transition items-center justify-start w-10/12`}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Enter any food name....' className='pl-10 p-3 font-light font-Poppins bg-[aliceblue] w-full border-solid border-[#009866] border-[1px] rounded-3xl outline-none' />
            <button onClick={RedirectSearch} className='flex items-center justify-center w-10 h-10 hover:bg-black hover:text-white transition ml-2 rounded-full'><AiOutlineSearch className='text-xl' /></button>
        </div>
        <button onClick={CallerFun} className='flex items-center justify-center'>
            {!show ? <CiMenuFries className='text-3xl cursor-pointer' /> : 
            <TfiClose className='text-3xl cursor-pointer' />}
        </button>
    </div>
  )
}
