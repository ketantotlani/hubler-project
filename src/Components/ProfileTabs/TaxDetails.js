import React from 'react'
import { HiOutlineReceiptTax } from "react-icons/hi";
import { TbPencil } from "react-icons/tb";
import { TiWarningOutline } from "react-icons/ti";

const TaxDetails = ({ data }) => {
    return (
        <>
            <h2 id="accordion-flush-heading-2">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-300 dark:border-gray-300 dark:text-gray-700" data-accordion-target="#accordion-flush-body-2" aria-expanded="true" aria-controls="accordion-flush-body-2">
                    <span className='flex'><HiOutlineReceiptTax size={22} className='me-3 text-black' />TAX DETAILS</span>
                    <span className='me-5'>
                        <TbPencil size={24} />
                    </span>
                </button>
            </h2>
            <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                <div class="border-b flex flex-row justify-between border-gray-300 dark:border-gray-300">
                    <div className='py-5 px-3  border-b border-gray-300 dark:border-gray-300'>
                        <p class="mb-3 text-black">Pan Number: <span class=" font-medium">{data.taxDetails.panNumber}</span></p>
                        <p class="mb-3 text-black">Lower rate of TDS: <span class=" font-medium">{data.taxDetails.lowerTDS}</span></p>
                        <p class="mb-3 text-black">Lower rate of TDS rate: <span class=" font-medium">{data.taxDetails.lowerTDSrate}</span></p>
                        <p class="mb-3 text-black">TDS Rate: <span class=" font-medium">{data.taxDetails.TDSrate}</span></p>
                        <p class="mb-3 text-black">GST Registration: <span class=" font-medium">{data.taxDetails.gstReg}</span></p>
                        <p class="mb-3 text-black">GSTIN: <span class=" font-medium">{data.taxDetails.GSTIN}</span></p>
                    </div>
                    <div className=' bg-[#ffebe6] w-[435px] h-[80px]' >
                        <div className='flex ps-5 pe-1 py-4 flex-col'>
                            <span className='flex flex-row text-[#d85040]'>
                                <TiWarningOutline size={24} />
                                <span className=' ms-2  text-sm mt-1 font-medium'>KYC REQUIRED</span>
                            </span>
                            <span className='text-xs ps-3 mt-1 font-light ms-5'>please collect Supporting document and upload to the system</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxDetails