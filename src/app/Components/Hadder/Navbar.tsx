import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    return (
        <div className='flex space-x-4 items-center justify-end text-gray-500'>
            <p className='hidden lg:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer text-gray-500" />
            <div className='flex space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className="h-6 w-6 text-gray-500" />
                <UserCircleIcon className="h-6 w-6 text-gray-500" />
            </div>
        </div>
    )
}
