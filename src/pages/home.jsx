import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "../styles/home.css";
import '../index.css';
import Line from '../components/line';
import Robot from '../components/robote';
import Media from '../components/mediasocila';
import Project from '../components/priojek';
import Nav from '../components/nav';
//import { Link } from "react-router-dom";


const Home = ()=> {
        const type = [
            "Hallo I'm 3nol", 1000,
            "I'm a Student at Informatics", 1000,
        ];
    
        const lyric = [
            "Welcome to my portfolio,",
            " I’m learning React, Laravel, Bootstrap, and TailwindCSS, ",
            " with a focus on React and TailwindCSS",
            " Excited to bring creativity and performance together in every project!",
        ];
    
        const delay = [1000];
    
        const [lyricList, setLyricList] = useState("");
        const [lyricIndex, setLyricIndex] = useState(0);
        const [lyricchard, setLyricchard] = useState(0);

        useEffect(() => {
            if (lyricIndex < lyric.length) {
                if (lyricchard < lyric[lyricIndex].length) {
                    const lyricTime = setTimeout(() => {
                        setLyricList((prev) => prev + lyric[lyricIndex][lyricchard]);
                        setLyricchard((prev) => prev + 1);
                    }, 50);
                    return () => clearTimeout(lyricTime);
                } else {
                    const lyricTime = setTimeout(() => {
                        setLyricList((prev) => prev + "\n");
                        setLyricIndex((prev) => prev + 1);
                        setLyricchard(0);
                    }, delay[lyricIndex] || 1000); // Pastikan ada nilai default untuk delay
                    return () => clearTimeout(lyricTime);
                }
            }
        }, [lyricIndex, lyricchard, lyric, delay]);
    
        // Menangani efek scroll
        useEffect(() => {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                const textElement = document.querySelector('.text1');
                const desripElement = document.querySelector('.des');
                const textScrolled = document.querySelector('.text');

                // Mengelola class translate-x untuk text1
                if (textElement) {
                    if (scrollY >= 350) {
                        textElement.classList.add('-translate-x-full');
                    } else if (scrollY <= 250) {
                        textElement.classList.remove('-translate-x-full');
                    }
                }
                    
                // Mengelola class translate-x untuk desrip
                if (desripElement) {
                    if (scrollY >= 500) {
                        desripElement.classList.add('-translate-x-full');
                    } else if (scrollY <= 324) {
                        desripElement.classList.remove('-translate-x-full');
                    }
                }
    
                // Mengelola class scrolled untuk text
                if (textScrolled) {
                    if (scrollY >= 600 && scrollY <= 900) {
                        textScrolled.classList.add('scrolled');
                    } else if (scrollY <= 1200) {
                        textScrolled.classList.remove('scrolled');
                    }
                }
            };
    
            setInterval(() => {  
                const emoji = setTimeout(() => {         
                    const emojis = document.getElementsByClassName('emojil')[0]; 
                        emojis.classList.add('animated');
                        clearTimeout(emoji);
                    }, 5000)
        }, 2000)
            window.addEventListener('scroll', handleScroll);
            // Pembersihan event listener saat komponen di-unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        
    return (
        <>
        <div className=" flex justify-center items-center fixed z-50 w-full h-auto p-5 backdrop-blur-md scroll-smooth">
                <div className=" navbar w-11/12 h-8 flex items-center justify-around  my-4 rounded-xl ">
                    <div className="flex justify-start items-center font-JetBrains  w-1/6 animate-slide-right">
                        <h1 className="text-white text2xl">私は</h1>
                        <p className="emojil text2xl">✌️</p>
                        <h1 className="text-white text2xl">,Tri Setianto</h1>
                    </div>
                    <div className="flex justify-end w-4/6  h-auto items-center  rounded-xl ">
                         <div className="w-auto h-10  shadow-lg shadow-black bg-tertiary p-4 rounded-xl flex justify-center items-center">
                            <Nav name="Home" link="#home"/>
                            <Nav name="About" link={"#about"}/>
                            <Nav name="Project" link={"#project"}/>
                            <Nav name="Tech" link={"#tech"}/>
                            <Nav name="Contact" link={"#contact"}/>
                            </div>
                        </div>  
                </div>
            </div>
        <div  className='w-auto h-auto overflow-hidden bg-primary relative' >
            <div  className=" flex justify-center items-center w-screen h-screen" id='home'  >
                <div className=" flex flex-col justify-center items-center w-full h-full bg-primary  ">
                    <div className='h-16 w-full'>
                        <div className="text-3xl text-center font-JetBrains text-white  animate-slide-right duration-500 text1">
                            <TypeAnimation
                                        sequence={type}
                                        wrapper="p"
                                        cursor={false}
                                        repeat={Infinity}
                                        className="text-3xl text-white py-5  " 
                                        />
                                </div>
                        </div>
                        <div className='w-full h-30 justify-center items-center flex '>
                            <div className=" text-white w-full text-wrap h-auto font-SansSerif flex justify-center des duration-500">
                                <p className="des flex  justify-center  text-left items-center text-2xl font-JetBrains  px-28 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-600">
                                    {lyricList}</p>
                            </div>
                        </div>
                        <div className='w-full h-30 justify-center items-center flex pt-3 '>
                            <Media className='media'/>
                        </div>
                        </div>
                        <div className='w-full h-full' >
                            <Robot/>
                        </div>
                </div>
                <Line label="ABOUT ME" /> 
                <div className='w-auto h-auto pb-24 relative '  id ="about">  
                    <div className='w-full h-full bg-primar pt-14'>
                        <div className='w-auto h-auto bg-primary flex justify-center  items-center'>
                            <div className='w-auto h-auto ring-sky-500 outline rounded-full ring-4 ring-offset-0 flex justify-center  items-center'>
                                <img src='./img/profile.jpg' className="w-40 h-40 rounded-full hover:-translate-y-2 hover:translate-x-1 trnasiion-all duration-500" alt="profile"/>
                            </div>
                        </div>
                        <div className="w-full h-auto bg-primary flex justify-center items-center py-5 px-28 font-SansSerif text-white text-center">
                            <p className="text text-zinc-800 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium pariatur maiores veniam sint minima, eaque vel, quasi ratione odit 
                                id quidem non quod sequi eligendi excepturi in distinctio totam ipsa! Iste, laboriosam eveniet 
                                voluptatem adipisci, provident exercitationem optio in facilis totam asperiores cum odio porro aliquid. Impedit iste similique quaerat porro odio optio cum 
                                exercitationem, nobis earum inventore voluptatem quibusdam. 
                                Dolor natus repellat dignissimos delectus similique fugiat, itaque at corporis. Beatae veniam hic inventore, cupiditate, ad asperiores repudiandae labore tempore repellat iusto error quia a vero voluptas quis, quaerat sequi. Ab vitae eum vel
                                soluta sed esse repudiandae temporibus dolore nam cupiditate ipsa ea iusto cum animi laborum enim quaerat accusamus, illum odit harum! Dicta voluptas amet sit delectus voluptatibus.</p>
                        </div>
                    </div>
                </div> 
                <Line label="PROJECT"/>
                <div className='w-screen h-auto py-8 bg-primary relative' id ="project">
                    <Project/>
                </div>
            </div>
        </>
        );
    };
    export default Home