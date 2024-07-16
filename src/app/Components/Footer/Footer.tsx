import Link from "next/link";

export default function Footer() {
    const links = [
        {
            title: 'ABOUT',
            links: [
                'How Airbnb works',
                'Newsroom',
                'Investors',
                'Airbnbn Plus',
                'Airbnb Luxe',
            ],
        },
        {
            title: 'COMMUNITY',
            links: [
                'Accessbility',
                'This is not a real site',
                'Its a pretty awesome clone',
                'Referrals accepted',
                'Papafam',
            ],
        },
        {
            title: 'HOST',
            links: [
                'Accessbility',
                'This is not a real site',
                'Its a pretty awesome clone',
                'Referrals accepted',
                'Papafam',
            ],
        },
        {
            title: 'SUPPORT',
            links: [
                'Accessbility',
                'This is not a real site',
                'Its a pretty awesome clone',
                'Referrals accepted',
                'Papafam',
            ],
        },
    ];
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600">
            {links.map((ele, index) =>
                <div key={index} className='space-y-4 mb-5 text-xs text-gray-800'>
                    <h5 className='font-bold'>{ele.title}</h5>
                    {ele.links.map((item) =>
                        <Link href={item} key={item} className='block'>
                            {item}
                        </Link>
                    )}
                </div>
            )}
        </footer>
    )
}