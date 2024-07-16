import { getExplore } from '@/utils/api'
import Image from 'next/image';
import { ExploreTypeArray } from '@/types/app';

export default async function ExploreCard() {
  const data: ExploreTypeArray = await getExplore()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data.map((ele, index: number) =>

        <div key={index} className='flex items-center m-2 mt-5 space-x-2 transitionScale' >
          <div className='relative w-16 h-16'>
            <Image src={ele.img} alt="Explore image" fill />
          </div>
          <div>

            <h2>{ele.location}</h2>
            <h3 className='text-gray-500'>{ele.distance}</h3>
          </div>
        </div>

      )}
    </div>
  )
}
