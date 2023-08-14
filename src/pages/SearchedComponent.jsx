import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import PuffLoader from 'react-spinners/PuffLoader'
export const SearchedComponent = () => {
    let [loading,setLoading] = useState(false)
    let [color,setColor] = useState('#000')
    let location = useLocation().pathname.split("/")[2]
    let [result,setResult] = useState([])
    let SearchRecipe = async (url) => {
      let recipe = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_FOOD_API_1 || import.meta.env.VITE_FOOD_API_2 || import.meta.env.VITE_FOOD_API_3}&query=${url}`)
      setResult(recipe.data.results)
    }
    useEffect(() => {
      SearchRecipe(location)
    },[location])
  return (
    <div className='py-10 w-11/12 mx-auto'>
        <h1 className='mb-10 font-light xs:text-xl lg:text-6xl underline'>Search result ofr <span className='italic text-red-600 font-bold'>'{location}'</span> recipes</h1>
        {
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 gap-3'>
                {
                    loading ? <PuffLoader color={color} loading={loading} size={120} aria-label="Loading Spinner" data-testid="loader"/> : result?.map((recipe) => (
                        <div key={recipe.id} className='font-Poppins rounded-md border-solid shadow-md shadow-black/50 border-black/10 border-[2px]'>
                            <Link to={`/recipe/${recipe.id}`}>
                                <div className='rounded-md w-full h-fit'>
                                  <img className='w-full rounded-b-none rounded-md object-fill h-full' src={recipe?.image} alt={recipe.title} />
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
