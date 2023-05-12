import React from 'react'
import BankDetails from './ProfileTabs/BankDetails';
import BasicDetails from './ProfileTabs/BasicDetails';
import TaxDetails from './ProfileTabs/TaxDetails';
import Documents from './ProfileTabs/Documents';


const MainComponent = ({ data }) => {

    return (
        <div className='flex justify-center align-middle'>
            <div className='w-4/6'>
                <div id="accordion-flush" data-accordion="open" data-active-classes="bg-white dark:bg-white-900 text-white-900 dark:text-black" >
                    <BasicDetails data={data} />
                    <TaxDetails data={data} />
                    <BankDetails data={data} />
                    <Documents data={data} />
                </div>
            </div>
        </div>
    )
}

export default MainComponent