import React from 'react'
import CardComponents from './_components/Card'
import BannerComponent from './_components/Banner'
import NewSeasons from './_components/NewSeasons'
import NewProduct from './_components/NewProcut'

const HomePage = () => {
    return (
        <div className='space-y-5'>
            <BannerComponent />
            <NewSeasons />
            <NewProduct />
        </div>
    )
}

export default HomePage