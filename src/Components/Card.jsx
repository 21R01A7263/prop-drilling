import React from 'react'

function Card({data, index, handleClick}) {

  const {image, artist, name, added} = data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-4 shadow-lg shadow-slate-600'>
      <div className='shrink-0 w-20 h-20 bg-orange-600 rounded-md overflow-hidden shadow-lg shadow-slate-400'>
        <img className="w-full h-full object-cover"  src={image} alt='Cover Art' />
      </div>
      <div>
        <h3 className='text-xl leading-none font-semibold '>{artist}</h3>
        <h6 className='text-sm mt-2'>{name}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className='px-4 py-3 whitespace-nowrap bg-orange-600 absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full'>{added === false ? "Add to favourites":"Added"}</button>
    </div>
  )
}

export default Card;