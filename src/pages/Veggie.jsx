import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import PuffLoader from 'react-spinners/PuffLoader'
import { Link } from 'react-router-dom'
export const Veggie = () => {
    let [loading,setLoading] = useState(false)
    let [color,setColor] = useState('#000')
    let [veggie,setVeggie] = useState([])
    useEffect(() => {
        FetchVeggie()
    },[])
    let FetchVeggie = async () => {
        let Items = JSON.parse(localStorage.getItem("veggie")) || null
        if(Items){
            setLoading(true)
            setVeggie(Items)
            setLoading(false)
        }
        else{
            setLoading(true)
            let res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_FOOD_API_3}&number=9&tags=vegetarian`)
            localStorage.setItem("veggie",JSON.stringify(res.data.recipes))
            setVeggie(res.data.recipes)
            res.data.recipes && setLoading(false)
        }
    }
  return (
    <div className='py-10 w-11/12 mx-auto'>
        <h1 className='mb-10 font-light text-6xl underline'>Our Vegiterian Selection Recipes</h1>
        {
            <Splide options={{
                perPage : 4,
                arrows : false,
                drag : 'free',
                pagination : false,
                gap : '2rem',
                

            }} className='flex items-center justify-center'>
                {
                    loading ? <PuffLoader color={color} loading={loading} size={120} aria-label="Loading Spinner" data-testid="loader"/> : veggie?.map((recipe) => (
                        <SplideSlide key={recipe.id} className='font-Poppins rounded-md border-solid shadow-md shadow-black/50 border-black/10 border-[2px]'>
                            <Link to={`/recipe/${recipe.id}`}>
                                <div className='rounded-md w-full h-fit'>
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
