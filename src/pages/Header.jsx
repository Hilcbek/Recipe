import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {CiMenuFries} from 'react-icons/ci'
import {TfiClose} from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Redux/StateReducer'
import {IoFastFoodOutline} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
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
        if(search.length > 0){
            navigate(`/search/${search}`)
            setSearch('')
        }else{
            alert('please enter search value!')
        }
    }
  return (
    <div className='xs:w-11/12 sm:w-11/12 lg:w-9/12 relative h-16 overflow-hidden mx-auto flex items-center justify-between py-2'>
        <Link to={'/'}>
            <IoFastFoodOutline className='xs:text-3xl g:text-5xl' />
        </Link>
        <div className={`${show ? 'top-2' : '-top-96' } absolute flex xs:left-12 lg:left-[100px] transition items-center justify-start xs:w-[80%] lg:w-10/12`}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Enter any food name....' className='xs:text-xs lg:text-[16px] xs:pl-2 lg:pl-10 p-3 font-light font-Poppins bg-[aliceblue] w-full border-solid border-[#009866] border-[1px] rounded-3xl outline-none' />
            <button onClick={RedirectSearch} className='flex items-center justify-center w-10 h-10 hover:bg-black hover:text-white transition xs:mr-2 lg:ml-2 rounded-full'><AiOutlineSearch className='text-xl' /></button>
        </div>
        <button onClick={CallerFun} className='flex items-center justify-center'>
            {!show ? <CiMenuFries className='xs:text-xl lg:text-3xl cursor-pointer' /> : 
            <TfiClose className='xs:text-2xl lg:text-3xl cursor-pointer' />}
        </button>
    </div>
  )
}
