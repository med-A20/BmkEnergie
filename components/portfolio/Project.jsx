import Image from 'next/image'
import React from 'react'

const Project = ({category, name, info, src}) => {
  return (
    <div className='max-w-[300px] min-h-[400px]  flex flex-col justify-start items-center rounded-md m-3 shadow-xl pb-2 '>
        {/* image */}
        <div className='rounded-xl relative h-2/3 overflow-hidden pt-2'>
            <Image
            onLoad={()=>src}
            src={src}
            height={270}
            width={270}
            alt='test'
            className='rounded-md p-1 !object-cover'
            />
            <p className='absolute bottom-0 left-[50%] translate-x-[-50%] text-md  font-light italic p-1 rounded-t-md bg-white'>
                {category}
            </p>
        </div>
        {/* description */}
        <div className=' mt-5 flex flex-col justify-between items-center'>
            <p className='text-xl text-center font-medium capitalize'>
                {name}
            </p>
            <p className='mt-4 p-1 text-[14px] text-ellipsis text-center capitalize'>
                {info}
            </p>
        </div>
    </div>
  )
}

export default Project