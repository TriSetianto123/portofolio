import React, { useEffect, useState } from 'react';
import Project from '../assets/th.jpeg';
import '../index.css';
import '../styles/project.css';


 const ProjectComponent = () => {
    
  return (
    <div className="w-auto h-auto flex items-start justify-center project">
      <div className='w-9/12 h-56 bg-white flex items-center justify-start px-6 rounded-lg relative overflow-hidden'>
        <div className='w-auto h-auto flex gap-4 animate-slide  absolute '>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
            <div className="group w-72 h-44 flex justify-center items-center p-4 bg-slate-600 rounded-lg card">
                <div className='w-full h-full relative flex justify-center items-end '>
                    <div className='w-full h-full  '>
                        <img src={Project} alt="Project" className="w-full h-full rounded-lg"/>
                    </div>
                        <div className='w-full h-auto absolute rounded-md duration-500 opacity-0 group-hover: backdrop-blur group-hover:opacity-100 group-hover:bg-gradient-to-r from-violet-400 to-blue-500  '>
                            <div className='w-full h-auto text-center group-hover:animate-slide-up'>
                              <h1>Title</h1>
                            </div>
                            <div className='w-full h-full  font-SansSerif text-sm flex justify-center py-3 items-center px-2 group-hover:animate-slide-up'>
                              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae rerum accusantium est beatae,</p>
                            </div>
                      </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
