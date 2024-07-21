import React from 'react'
import { format } from 'date-fns';
import SearchCard from './SearchCard';
import Map from '../Components/Map/Map';
import { CardListType } from '@/types/app';
import { getCardSearch } from '@/utils/api';

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

export default async function Search({ searchParams: { location, startDate, endDate, numOfGuests }, }: { searchParams: SearchParams }) {
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const filters = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];

  const CardData: CardListType = await getCardSearch()


  return (
    <main>
      <section>
        <div className='container flex'>
          <div className='pt-14 pr-4'>
            <p className='text-xs'> 300+ Stays - {range} - for {numOfGuests} guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6 '> Stays in {location}</h1>
            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
              {filters.map((filter) => (
                <button type='button' className='filter-btn' key={filter}>
                  {filter}
                </button>
              ))}
            </div>


            <div>
              <div>
                {CardData.map((listing) => (
                  <SearchCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>

            <div className='hidden xl:inline-flex xl:min-w-[600px]'>
              <Map searchResultData={CardData} />
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
