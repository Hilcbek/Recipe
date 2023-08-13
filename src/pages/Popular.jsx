import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import PuffLoader from 'react-spinners/PuffLoader'
import { Link } from 'react-router-dom'
export const Popular = () => {
    let [loading,setLoading] = useState(false)
    let [color,setColor] = useState('#000')
    let [popular,setPopular] = useState([])
    useEffect(() => {
        FetchPopular()
    },[])
    let FetchPopular = async () => {
        let Items = JSON.parse(localStorage.getItem("popular")) || null
        if(Items){
            setLoading(true)
            setPopular(Items)
            setLoading(false)
        }
        else{
            setLoading(true)
            let res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_FOOD_API_3}&number=10`)
            localStorage.setItem("popular",JSON.stringify(res.data.recipes))
            setPopular(res.data.recipes)
            res.data.recipes && setLoading(false)
        }
    }
  return (
    <div className='pt-5 w-11/12 mx-auto'>
        <h1 className='mb-10 font-light text-6xl underline'>Popular Recipes</h1>
        {
            <Splide options={{
                perPage : 4,
                arrows : false,
                drag : 'free',
                pagination : false,
                gap : '2rem',
            }} className='flex items-center justify-center'>
                {
                    loading ? <PuffLoader color={color} loading={loading} size={120} aria-label="Loading Spinner" data-testid="loader"/> : popular?.map((recipe) => (
                        <SplideSlide key={recipe.id} className='font-Poppins rounded-md border-solid shadow-md shadow-black/50 border-black/10 border-[2px]'>
                            <Link to={`/recipe/${recipe.id}`}>
                                <div className='rounded-md w-full'>
                                    <img className='w-full rounded-b-none rounded-md object-fill h-full' src={recipe?.image} alt={recipe.title} />
                                </div>
                                <p className='text-md font-semibold m-2 tracking-wider'>{recipe?.title}</p>
                                <p className='ml-3 font-bold'>${Math.floor(Math.random(0,1) * 200)}</p>
                            </Link>
                        </SplideSlide>
                    ))
                }
            </Splide>
        }
    </div>
  )
}
