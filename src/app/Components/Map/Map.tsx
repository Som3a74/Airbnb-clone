'use client'
import { useEffect, useState } from 'react';
import { CardItemType, CardListType } from '@/types/app';
import Image from 'next/image';
import MapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Map({ searchResultData }: { searchResultData: CardListType }) {

    const [selectedLocation, setSelectedLocation] = useState<CardItemType | null>(null);

    const coordinates = searchResultData.map((card) => ({
        longitude: card.long,
        latitude: card.lat,
    }))

    const center = getCenter(coordinates) as {
        longitude: number,
        latitude: number,
    }

    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '100%',
        zoom: 11,
        longitude: center.longitude,
        latitude: center.latitude,
    });

    useEffect(() => {

    }, [])


    // return (
    //     <MapGL
    //         {...viewport}
    //         mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
    //         mapboxAccessToken='pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ'
    //         // onMove={(nextViewport) =>
    //         //     setViewPort((prev) => {
    //         //         return {
    //         //             ...prev,
    //         //             longitude: nextViewport.viewState.longitude,
    //         //             latitude: nextViewport.viewState.latitude,
    //         //         };
    //         //     })
    //         // }
    //     />


    // )
    return (
        <MapGL
            {...viewport}
            mapStyle='mapbox://styles/kareem2002shimes/cl9ogfais007a14o2dcf0byo6'
            mapboxAccessToken={'pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ'}
            onMove={(nextViewport) =>
                setViewPort((prev) => {
                    return {
                        ...prev,
                        longitude: nextViewport.viewState.longitude,
                        latitude: nextViewport.viewState.latitude,
                    };
                })
            }
        >
            {searchResultData.map((listing) => (
                <div key={listing.long}>
                    <Marker longitude={listing.long} latitude={listing.lat}>
                        <div
                            onClick={() => setSelectedLocation(listing)}
                            className='animate-bounce'
                        >
                            <Image
                                src='/mapMarker.png'
                                alt='map-marker'
                                width={24}
                                height={24}
                            />
                        </div>
                    </Marker>
                    {selectedLocation?.long === listing.long ? (
                        <Popup
                            closeOnClick={false}
                            onClose={() => setSelectedLocation(null)}
                            longitude={listing.long}
                            latitude={listing.lat}
                        >
                            {listing.title}
                        </Popup>
                    ) : null}
                </div>
            ))}
        </MapGL>
    );
}
