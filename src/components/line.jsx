import '../index.css'
import React from "react"

const line =({label})=>{

    return (
    <div className='w-auto h-auto bg-primary flex justify-center items-center'>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'></hr>
            <p className='text-3xl text-white font-JetBrains'>{label}</p>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'></hr>
    </div>
    )           
}
export default line