import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { TbPencil } from "react-icons/tb";
import { FaRegFile } from "react-icons/fa";
import FileComponent from '../FileComponent';

const Documents = ({ data }) => {


    const downloadAllFiles = () => {
        console.log("downloading all files...")
    }

    const downloadFile = (Id) => {
        console.log("downloading all files...")
    }

    return (
        <>
            <h2 id="accordion-flush-heading-4">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-300 dark:border-gray-300 dark:text-gray-700" data-accordion-target="#accordion-flush-body-4" aria-expanded="true" aria-controls="accordion-flush-body-4">
                    <span className='flex'><FaRegFile size={22} className='me-3 text-black' />DOCUMENTS</span>
                    <span className='me-5 flex flex-row justify-center items-center'>
                        <button type="button" onClick={() => downloadAllFiles()} class="text-gray-700 hover:text-white border flex flex-row items-center border-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-3 py-[7px] text-center mr-2 dark:border-gray-300 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            <HiOutlineDownload size={18} className='me-2' />Download All
                        </button>
                        <TbPencil size={24} className='ms-5' />
                    </span>
                </button>
            </h2>
            <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                <div class="py-5 px-3  border-b border-gray-300 dark:border-gray-300">
                    <div className='flex flex-row gap-3 flex-wrap'>
                        {data.documents.map((data) => (
                            <FileComponent data={data} downloadFile={downloadFile} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documents