import React from 'react';
import gambar from './gambar/image.png'
const hero = () => {
    return (
        <div>
             <section id="home " className="pt-36">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4  lg:w-1/2">
                            <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl '>Hello all 👋, Iam
                                <span className='block text-dark font-bold text-4xl mt-1 lg:text-5xl'> Muhammad Saidi</span></h1>
                            <h2 className="font-medium text-secondary text-lg mb-5 ">Frontend Dev | backend Dev | Content Createor </h2>
                            <p className="font-medium text-secodary mb-10 leading-relaxed"> Belajar Web Programing itu mudah dan menyenangkan bukan.  <span className='text-dark font-bold'>bukan !</span></p>

                            <a href="Contact" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:bg-sky-400 hover:opacity-80 duration-300 ease-in-out'>Contact Me</a>
                        </div>
                        <div className="w-full self-end px-4 lg:w-1/2">
                            <div className=" relative mt-10 ">
                                <img   src={gambar} alt="Saidi"  
                                className='max-w-full mx-auto w-[300px] h-auto lg:w-[400px]'
                                />
                            <span className='absolute -bottom-20 -z-10 left-1/2 '>
                                {/* add  */}
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </div>
    );
};


export default hero;