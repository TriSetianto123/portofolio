import React from "react"
import '../index.css'
const nav =({name,link})=>{

    return (
        <div className="group w-auto  h-auto animate-slide-up">
                                <div className="justify-center w-auto h-auto flex items-center group-hover:py-2 group-hover:px-4 group-hover:rounded-lg group-hover:translate-y-4 text-white mx-2  group-hover:bg-quaternary   transition-all duration-500">
                                    <a href={link} className=" group-hover:text-base  font-JetBrains duration-500">
                                    <p>{name}</p>
                                    </a>
                                </div>
            </div>
    )
}
export default nav