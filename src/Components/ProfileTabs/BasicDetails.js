import React from 'react'
import { TbNotebook, TbPencil } from "react-icons/tb";

const BasicDetails = ({ data }) => {
    return (
        <>
            <h2 id="accordion-flush-heading-1">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-300 dark:border-gray-300 dark:text-gray-700" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span className='flex'><TbNotebook size={22} className='me-3 text-black' />BASIC DETAILS</span>
                    <span className='me-5'>
                        <TbPencil size={24} />
                    </span>
                </button>
            </h2>
            <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                <div class="py-5 px-3  border-b border-gray-300 dark:border-gray-300">
                    <p class="mb-3 text-black">Landlord Name: <span class=" font-medium">{data.basicDetails.landlordName}</span></p>
                    <p class="mb-3 text-black">Owner category: <span class=" font-medium">{data.basicDetails.ownerCategory}</span></p>
                    <p class="mb-3 text-black">Vendor code: <span class=" font-medium">{data.basicDetails.vendorCode}</span></p>
                    <p class="mb-3 text-black">Email: <span class=" font-medium">{data.basicDetails.email}</span></p>
                    <p class="mb-3 text-black">Mobile Number: <span class=" font-medium">{data.basicDetails.mobNumber}</span></p>
                    <p class="mb-3 text-black">Address: <span class=" font-medium">{data.basicDetails.address}</span></p>
                </div>
            </div>
        </>
    )
}

export default BasicDetails