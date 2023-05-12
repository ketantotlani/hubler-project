import React from 'react'
import { HiOutlineLibrary } from "react-icons/hi";
import { TbPencil } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs"

const BankDetails = ({ data }) => {
    return (
        <>
            <h2 id="accordion-flush-heading-3">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-300 dark:border-gray-300 dark:text-gray-700" data-accordion-target="#accordion-flush-body-3" aria-expanded="true" aria-controls="accordion-flush-body-3">
                    <span className='flex'><HiOutlineLibrary size={22} className='me-3 text-black' />BANK DETAILS</span>
                    <span className='me-5'>
                        <TbPencil size={24} />
                    </span>
                </button>
            </h2>
            <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                <div class="border-b flex flex-row justify-between border-gray-300 dark:border-gray-300">
                    <div className='py-5 px-3  border-b border-gray-300 dark:border-gray-300'>
                        <p class="mb-3 text-black">Account Name: <span class=" font-medium">{data.bankDetails.accName}</span></p>
                        <p class="mb-3 text-black">Account Number: <span class=" font-medium">{data.bankDetails.accNumber}</span></p>
                        <p class="mb-3 text-black">Bank Name: <span class=" font-medium">{data.bankDetails.bankName}</span></p>
                        <p class="mb-3 text-black">Bank Branch: <span class=" font-medium">{data.bankDetails.bankBranch}</span></p>
                        <p class="mb-3 text-black">MSME No: <span class=" font-medium">{data.bankDetails.MSMENo}</span></p>
                    </div>
                    <div className=' bg-[#e3fcef] w-[310px] h-[100]' >
                        <div className='flex ps-5 pe-1 py-4 flex-col'>
                            <span className='flex flex-row mt-2'>
                                <BsFillCheckCircleFill className='text-[#81d165]' size={24} />
                                <span className='ms-3 text-sm font-medium'>VERIFICATION SUCCESSFUL</span>
                            </span>
                            <span className='text-sm flex flex-row gap-14 ps-4 mt-4 ms-5'>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-gray-600'>Transaction ID</span>
                                    <span className='text-black font-medium'>fet6488BG323</span>
                                </span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-gray-600'>Status</span>
                                    <span className='text-black font-medium'>Success</span>
                                </span>
                            </span>
                            <span className='text-sm flex flex-row gap-14 ps-4  mt-5 pt-3 ms-5'>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-gray-600'>Date & Time</span>
                                    <span className='text-black font-medium'>12th Sept 2022, 12:20</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankDetails