import React from 'react'
import list from '../../public/lists.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "} 
            <span className='text-pink-500'>here!</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quasi harum delectus labore deserunt, 
            nemo eveniet fugit qui ad eum sint incidunt corrupti at adipisci vel natus, ullam sapiente. Ullam. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, neque, dolore eveniet dolorum quis officiis 
            quo cumque consequuntur et doloribus quos autem, doloremque accusamus cupiditate quas deleniti nobis nesciunt eligendi!</p>
            <Link to="/"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))

            }
        </div>
    </div>
    </>
  )
}

export default Course
