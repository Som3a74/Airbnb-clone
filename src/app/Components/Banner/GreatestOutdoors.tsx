import Image from 'next/image';
import ImgGreatest from '@/assets/home/GreatestOutdoorss.avif'
import Link from 'next/link';


export default function GreatestOutdoors() {
    return (
        <section className='my-4'>
            <div className='container relative'>
                <div className='relative h-96 min-w-[300px]'>
                    <Image src={ImgGreatest} className='rounded-2xl -z-10 object-cover' fill alt='GreatestOutdoors-Img' />
                </div>
                <div className='absolute top-20 left-12'>
                    <h3 className='text-4xl mb-3 font-medium w-64'>The Greatest Outdoors</h3>
                    <p>Wishlists curated by Airbnb</p>
                    <Link href='/' className='inline-block w-fit bg-gray-900 text-white p-2 px-3 rounded-md text-sm mt-3'>Get Inspired</Link>
                </div>
            </div>
        </section>
    )
}
