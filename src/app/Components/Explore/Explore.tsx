import React from 'react'
import MainHeading from './MainHeading';
import ExploreCard from './ExploreCard';

export default function Explore() {
    return (
        <section className='mt-6'>
            <div className='container'>
                <MainHeading title='Explore Nearb' />
                <ExploreCard />
            </div>
        </section>
    )
}
