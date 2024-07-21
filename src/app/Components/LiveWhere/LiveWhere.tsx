import React from 'react'
import MainHeading from '../Explore/MainHeading'
import { getLiveWhere } from '@/utils/api'
import { LiveWhereTypeArray } from '@/types/app'
import Image from 'next/image';

export default async function LiveWhere() {
    const dataLive: LiveWhereTypeArray = await getLiveWhere()

    return (
        <section className='mt-6'>
            <div className='container'>
                <MainHeading title='Live Any where' />

                <div className='flex items-center space-x-3 overflow-scroll no-scrollbar'>
                    {dataLive.map((ele, index: number) =>

                        <div key={index} className='m-2 mt-5 transitionScale'>
                            <div className='relative w-96 h-96'>
                                <Image src={ele.img} alt='image Slider' fill />
                            </div>
                            <h6 className='font-bold text-purple-500 text-sm'>{ele.title}</h6>
                        </div>

                    )}
                </div>

            </div>
        </section>
    )
}
