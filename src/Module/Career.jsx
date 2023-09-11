import React from 'react'
import DividerDash from '../Komponen/DividerDash'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const workExperience = [
  {
    title: 'Laboratory Assistant',
    place: 'Gunadarma University',
    date: 'Oct 2017 - Feb 2023',
    logo : '/gundar.png'
  },
  {
    title: 'Network Surveyor',
    place: 'Shell Gas Stations',
    date: 'Jan 2019 - Feb 2019',
    logo : '/shell.png'
  },
  {
    title: 'Wireless Engineer',
    place: 'Mitra Solusi Infokom',
    date: 'Dec 2020 - Jul 2021',
    logo : '/msi.png'
  },
  {
    title: 'Deploy & Maintenance Server',
    place: 'SMK Budhi Warman 1',
    date: 'Nov 2022 & Mar 2023',
    logo : '/bw1.png'
  },
]

const Carreer = () => {
  return (
    <section className='bg-traparent text-darkMode'>
      <div className="w-full">
        <h1 className='title-module'>Career</h1>
        <div className='w-full mt-1 flex flex-col lg:flex-row justify-between'>
          <p>My profressional career journey</p>
          <a href='test' target='blank' className='items-center flex '>
            <ArrowDownTrayIcon className='icon-size mr-2'></ArrowDownTrayIcon>
            <label className='pt-2 lg:pt-0 self-end'>Download Resume</label>
          </a>
        </div>
      </div>
      <DividerDash />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>

        {workExperience.map((data) =>
          <div className='div-darkMode w-full rounded-lg flex px-6 py-4 items-center'>
            <img src={data.logo} alt='Logo' className='w-14 h-14'></img>
            <div className='ml-6 flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>{data.title}</h1>
              <p className='text-base'>{data.place}</p>
              <p className='text-sm'>{data.date} </p>
            </div>
          </div>

        )}
      </div>
    </section>
  )
}

export default Carreer