"use client"
import { MagnifyingGlassIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar, RangeKeyDict } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import Link from "next/link";

interface typePlace {
    start: String,
    end: String,
    loactionUser: String,
}

export default function SearchBar() {
    const [inputValue, setinputValue] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuests, setnumOfGuests] = useState(1);
    const [PlaceHold, setPlaceHold] = useState<typePlace | undefined>(undefined);

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }

    function handleSelect(ranges: RangeKeyDict) {
        setStartDate(ranges.selection.startDate as Date)
        setEndDate(ranges.selection.endDate as Date)
        // console.log(ranges)
    }

    function handelSearch() {
        if (startDate && endDate) {
            const dataPlace: typePlace = {
                start: startDate.toString().split(' ', 3).join(' '),
                end: endDate.toString().split(' ', 3).join(' '),
                loactionUser: inputValue,
            };
            setPlaceHold(dataPlace)
        }
        setinputValue('')
    }

    return <>
        <div className="flex flex-col">
            <div className="flex items-center sm:border-2 sm:shadow rounded-full py-2">
                <input type="text"
                    placeholder={PlaceHold ? `${PlaceHold.loactionUser} - ${PlaceHold.start} || ${PlaceHold.end}` : "Start your Search "}
                    value={inputValue}
                    onChange={(e) => setinputValue(e.target.value)}
                    className="text-sm bg-gray-600 placeholder-gray-400 pl-5 bg-transparent rounded-full outline-none flex-grow"
                />
                <MagnifyingGlassIcon className='hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            {inputValue &&
                <div className='absolute top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%]'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        rangeColors={['#fD5B61']}
                        minDate={new Date()}
                    />
                    <div className='flex items-center border-b bg-white p-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests </h2>
                        <UsersIcon className='h-5' />
                        <input
                            type='number'
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                            value={numOfGuests}
                            min={1}
                            onChange={(e) => setnumOfGuests(Number(e.target.value))}
                        />
                    </div>
                    <div className='flex items-center bg-white p-5'>
                        <button type='button' className='flex-grow text-gray-500' onClick={() => setinputValue('')}>Cancel</button>
                        <Link
                            href={{
                                pathname: '/Search',
                                search: `?location=${inputValue}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
                            }}
                            onClick={() => handelSearch()}
                            className='flex-grow text-red-400'
                        >
                            Search
                        </Link>
                    </div>
                </div>
            }
        </div>
    </>
}