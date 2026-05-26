import React from 'react'
import WorkShopCard from '../components/categorypage/WorkShopCard';
import WorkShops from '../components/categorypage/WorkShops'


export default function Category() {
    return (
        <div className="categorypage w-full flex gap-6 flex-col items-center transition-all duration-300">
            <WorkShops />
            <WorkShopCard />
        </div>
    )
}
