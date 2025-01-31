import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem() {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
        <img
          src='../src/assets/city.jpeg'
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Name
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              Address
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            Description
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            $Price
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              Bedrooms
            </div>
            <div className='font-bold text-xs'>
              Bathrooms
          </div>
        </div>
    </div>
    </div>
  );
}
