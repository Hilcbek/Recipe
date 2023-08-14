import React, { useEffect, useState } from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'
import {BsArrowLeft} from 'react-icons/bs'
import { useSelector } from 'react-redux'
export const Cuisine = () => {
    let [catagories,setCatagories] = useState([])
    let location = useLocation().pathname.split("/")[2]
    let [loading,setLoading] = useState(false)
    let [color,setColor] = useState('#000')
     let FetchPopular = async (url) => {
            setLoading(true)
            let res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_FOOD_API_1 || import.meta.env.VITE_FOOD_API_2 || import.meta.env.VITE_FOOD_API_3}&cuisine=${url}`)
            setCatagories(res.data.results)
            res.data.results && setLoading(false)
    }
    useEffect(() => {
        location &&  FetchPopular(location)
    },[location])
  return (
    <div className={`pt-10 w-11/12 mx-auto`}>
       <div>
            <NavLink to={'/'} className='w-12 h-12 flex items-center group transition justify-center rounded-full border-solid border-black/40 mb-3 border-[2px] bg-[aliceblue] cursor-pointer'>
                <BsArrowLeft className='text-3xl scale-100 group-hover:scale-105' />
            </NavLink>
            <h1 className='mb-5 font-light transition xs:text-4xl lg:text-6xl underline'>{location} Recipes</h1>
       </div>
        {
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 gap-3'>
                {
                    loading ? <PuffLoader color={color} loading={loading} size={120} aria-label="Loading Spinner" data-testid="loader"/> : catagories?.map((recipe) => (
                        <div key={recipe.id} className='font-Poppins rounded-md border-solid shadow-md shadow-black/50 border-black/10 border-[2px]'>
                            <Link to={`/recipe/${recipe.id}`}>
                                <div className='rounded-md w-full h-fit'>
                                    <img className='w-full rounded-b-none rounded-md object-fill h-full' src={recipe?.image ? recipe?.image : <PuffLoader color={color} loading={loading} size={120} aria-label="Loading Spinner" data-testid="loader"/>} alt={recipe.title} />
                                    </div>
                                <p className='text-md font-light m-2 tracking-wider'>{recipe?.title}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}
