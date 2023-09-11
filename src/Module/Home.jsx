import React, { useEffect } from 'react'
import Divider from '../Komponen/Divider'
import { useLocation, useNavigate } from 'react-router-dom'
import logoINDFlag from '/indflag.svg'



const Home = () => {

    const skills = [
        {
            namaSkill: 'Switching',
            progress: 'w-[90%]',
            label: '90'
        },
        {
            namaSkill: 'Wireless Networking',
            progress: 'w-[85%]',
            label: '85'
        },
        {
            namaSkill: 'Mirkotik',
            progress: 'w-[85%]',
            label: '85'
        },
        {
            namaSkill: 'Routing',
            progress: 'w-[90%]',
            label: '90'
        },
        {
            namaSkill: 'Linux',
            progress: 'w-[90%]',
            label: '90'
        },
        {
            namaSkill: 'Apache',
            progress: 'w-[85%]',
            label: '85'
        },
        {
            namaSkill: 'Codeigniter 4',
            progress: 'w-[80%]',
            label: '80'
        },
        {
            namaSkill: 'PHP',
            progress: 'w-[80%]',
            label: '80'
        },
        {
            namaSkill: 'Mysql',
            progress: 'w-[85%]',
            label: '85'
        },
        {
            namaSkill: 'Maria DB',
            progress: 'w-[85%]',
            label: '85'
        },
    ]

    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/contact')
    }

    const mailtoLink = `mailto:muhammaddany98@gmail.com?subject=${encodeURIComponent('Test')}&body=${encodeURIComponent('hallo')}}`
    const location = useLocation()

    return (
        <section className='bg-transparent'>
            <div className='w-full '>

                <div className='flex gap-2 text-2xl lg:text-3xl font-medium text-darkMode '>
                    <h1>Hi, I&apos;m Putu Wiweka Prasetyananda</h1>{' '}

                </div>
                <div className='mt-2'>
                    <ul className='flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc  text-neutral-700 dark:text-neutral-400'>
                        <li>Network Engineer / Cloud Engineer</li>
                        <li>
                            <div className='flex items-center'>
                                <label>Based in Jakarta</label>
                                <img src={logoINDFlag} className='ml-2 icon-size'></img>

                            </div>
                        </li>
                    </ul>


                </div>
                <div className='mt-2'>
                    <p className='leading-[1.8] md:leading-loose text-darkMode lg:max-w-3xl'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio explicabo quod molestiae quisquam atque optio pariatur fugiat neque, ullam error impedit, accusantium ipsum facere tenetur ea quae delectus hic illum.
                    </p>
                </div>

            </div>
            <Divider></Divider>
            <div className='w-full'>
                <div className='pt-2'>
                    <h2 className='text-lg font-semibold text-darkMode '> Skills</h2>
                    <p className='mt-2 leading-[1.8] md:leading-loose text-darkMode lg:max-w-3xl'>My Network skills</p>
                </div>
                <div className='bg-gradient-to-r from-blue-400 to-purple-600 relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]  mt-4 '>
                    <div className='h-full w-full rounded-lg bg-white dark:bg-black transition-all duration-200 p-4 items-center grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-x-9   '>
                        {skills.map((data) =>
                            <div className='items-center justify-between'>
                                <label className='font-semibold text-darkMode'>{data.namaSkill}</label>
                                <div className='flex items-center'>
                                    <div className='relative flex h-3 flex-1 justify-center rounded-full bg-slate-500 '>
                                        <span className={`bg-gradient-to-r from-blue-400 to-purple-600 absolute left-0 top-0 h-3 rounded-full ${data.progress} px-3`}>
                                        </span>
                                    </div>
                                    <label className='pl-2 text-darkMode'>{data.label}%</label>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <Divider></Divider>
            <div className='w-full'>
                <div className='pt-2'>
                    <h2 className='text-lg font-semibold text-darkMode '> What I've Been Working On</h2>
                    <p className='mt-2 leading-[1.8] md:leading-loose text-darkMode lg:max-w-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, eaque culpa aliquid itaque aspernatur dolorem sed.</p>
                </div>
                <div className=' div-darkMode  rounded-lg px-10 py-6 mt-4 mb-16 '>
                    <h1 className='text-lg font-bold '>Lets Work together</h1>
                    <p className='pt-3 '>I'm open for freelance projects, feel free to email me to see how can we collaborate.</p>
                    <button onClick={handleContact} className='div-darkMode2 text-darkMode px-4 py-1 mt-7 rounded-md hover:bg-gray-700 hover:text-white transition-custom'>
                        Contact me
                    </button>
                </div>
            </div>


        </section>
    )
}

export default Home