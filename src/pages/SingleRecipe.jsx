import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {TbPointFilled} from 'react-icons/tb'
import { PuffLoader } from 'react-spinners'
export const SingleRecipe = () => {
    let [single,setSingle] = useState([])
    let [loading,setLoading] = useState(false)
    let [color,setColor] = useState('#000')
    let location = useLocation().pathname.split("/")[2]
    let [show,setShow] = useState(true)
    let Fetch = async (url) => {
        setLoading(true)
        let res = await axios.get(`https://api.spoonacular.com/recipes/${url}/information?apiKey=${import.meta.env.VITE_FOOD_API_1 || import.meta.env.VITE_FOOD_API_2 || import.meta.env.VITE_FOOD_API_3}`)
        setSingle(res.data)
        res.data && setLoading(false)
    }
    useEffect(() => {
        Fetch(location)
    },[location])
    return (
    <div className='xs:w-11/12 xl:w-9/12 h-[60vh] mx-auto mt-10 flex items-center justify-center'>
        {loading ? <PuffLoader color={color} loading={loading} size={120} aria-label="Loading Spinner" data-testid="loader"/> : <div className='w-full flex items-start justify-start flex-col mt-5'>
            <h1 className='text-5xl font-light my-2 underline'>{single.title}</h1>
            <div className='flex items-center justify-center xl:flex-row xs:flex-col xs:mt-96 xl:mt-0 w-full'>
                <div className='w-full mr-3'>
                    <div className='w-full rounded-md shadow-md shadow-black/50'>
                        <img className='w-full h-full rounded-md object-cover' src={single?.image} alt="" />
                    </div>
                </div>
                <div className='w-full ml-3 xs:mt-5 xl:mt-0 flex items-center justify-center flex-col shadow-md shadow-black/50 p-2 rounded-md'>
                    <div className='flex items-center justify-center mb-4'>
                        <button onClick={() => setShow(!show)} className='p-2 bg-transparent border-solid border-black border-[1px] text-black mx-2 text-xs tracking-wider rounded-sm cursor-pointer'>Instructions</button>
                        <button onClick={() => setShow(!show)} className='p-2 bg-black/90 text-white mx-2 font-light text-xs tracking-wider rounded-sm cursor-pointer'>Ingredients</button>
                    </div>
                    <div className='w-full mt-5 flex items-start justify-start xs:flex-col sm:flex-row'>
                        <ol className='w-full h-[357px] flex justify-start items-start flex-col overflow-y-scroll shadow-md shadow-black/40 p-2 rounded-md mr-2'>
                            {
                                single?.extendedIngredients?.map((data,idx) => (
                                    <li key={idx} className='flex items-start justify-start'>
                                        <li><TbPointFilled className='mr-1 mt-2 text-md' /></li> <li className='w-[96%] break-words font-bold text-sm'>{data.original}</li>
                                    </li>
                                ))
                            }
                        </ol>
                        <h3 className={`${show ? 'flex' : 'hidden'} w-full break-words max-h-[357px] justify-start items-start overflow-y-scroll flex-col text-sm shadow-md shadow-black/40 p-2 rounded-md`} dangerouslySetInnerHTML={{ __html : single.summary}}></h3>
                        <h3 className={`${show ? 'hidden' : 'flex'} w-full break-words max-h-[357px] justify-start items-start overflow-y-scroll flex-col text-sm`}  dangerouslySetInnerHTML={{ __html : single.instructions}}></h3>
                    </div>
                </div>
            </div>
        </div>}
    </div>
  )
}
