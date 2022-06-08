import React from 'react'

function Tags({guestsByJob}) {
  return (
    <div className='flex flex-wrap mx-2 justify-center items-center py-3'>
      {Object.keys(guestsByJob)
            .sort((a, b) => guestsByJob[b].length - guestsByJob[a].length)
            .map((entry) => (
              <p key={entry.split('-')[0]} className='bg-slate-300 rounded-full mx-2 px-2 py-2 my-1 font-light text-sm text-slate-800'>
                <span className='mr-1'> 
                  {entry.toUpperCase().split('-')[0]} &nbsp;
                  {entry.toUpperCase().split('-').length > 1 ? entry.toUpperCase().split('-')[1]: null}
                </span>
                <span>{guestsByJob[entry].length}</span>
                </p>
            ))
      }
    </div>
  )
}

export default Tags;
