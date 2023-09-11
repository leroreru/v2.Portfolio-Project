import React, { useEffect } from 'react'
import DividerDash from '../Komponen/DividerDash'
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'


const Contact = () => {
  

    return (
        <section className='bg-transparent text-darkMode'>
            <div className="w-full">
                <h1 className='title-module'>Contact</h1>
                <p className='mt-2'>Feel free to get in touch and let's have a discussion about how we can work together</p>
            </div>
            <DividerDash />
            <div className='w-full'>
                <p>You can reach out to me directly by sending an email, texting on Telegram, or connecting on social media.</p>
                <div className='flex flex-wrap gap-4 mb-6 mt-7'>
                    <a href='mailto:prasetyananda@finetechid.com' className='div-darkMode px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white transition-custom '>
                        <div className='flex gap-2 items-center'>
                            <EnvelopeIcon className='w-5 h-5'></EnvelopeIcon>
                            <p className='font-semibold'>prasetyananda@finetechid.com</p>
                        </div>
                    </a>

                    <button className='div-darkMode px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white transition-custom '>
                        <div className='flex gap-2 items-center'>
                            <PaperAirplaneIcon className='w-5 h-5'></PaperAirplaneIcon>
                            <p className='font-semibold'>Telegram</p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact