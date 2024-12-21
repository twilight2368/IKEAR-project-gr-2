import React from 'react'

export default function StoreItemAdressDisplay() {
  return (
    <>
       <div className="h-16 shadow-md rounded bg-white p-2">
        <div className="w-full">
          <p className="text-lg font-black truncate ">Store name</p>
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-600 truncate">
            Store address: 123 street, city, country
          </p>
        </div>
      </div>
    </>
  )
}
