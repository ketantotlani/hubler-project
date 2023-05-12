import React from 'react'
import PDFIcon from '../assets/PDF_file_icon.svg'
import { HiOutlineDownload } from "react-icons/hi";



const FileComponent = ({ data, downloadFile }) => {
    return (
        <div className='grid grid-cols-3 w-[300px] relative h-[130px] bg-[#f4f4f4] rounded-md'>
            <img src={PDFIcon} className='h-[65%] my-auto ms-4' alt="" />
            <div className='flex justify-center ms-3 w-[200px] flex-col'>
                <span className=' font-medium'>{data.fileName}</span>
                <span className='text-gray-500 mt-1'>{data.title}</span>
                <span className='text-gray-500 mt-1'>{data.size}</span>
            </div>
            <div onClick={() => downloadFile()} className='text-gray-500 text-end float-right hover:cursor-pointer absolute bottom-5 right-5'>
                <HiOutlineDownload size={26} />
            </div>
        </div>
    )
}

export default FileComponent