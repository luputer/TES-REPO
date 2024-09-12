import React, { memo } from 'react';

const About = () => {
    return (
        <div>
            <section id='about' className='pt-36 pb-32'>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10">
                            <h4 className='font-bold uppercase text-primary text-lg mb-3'>About Me</h4>
                            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md'>Lest Go lern Web Programing With Me </h2>
                            <p className='font-medium text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam modi, omnis nesciunt commodi fuga odit.</p>
                        </div>
                        <div className="w-full px-4">
                            <h3 className='font-semibold text-dark  text-2xl mb-4'>Mari berteman</h3>
                            <p className='font-semibold text-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, esse? Nemo dicta reiciendis suscipit tempore iure, rem in accusamus illum?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};



export default About;