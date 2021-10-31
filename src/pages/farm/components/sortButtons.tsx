import React from 'react';
import { sortableFields } from '../constants';

import { farmSort, SortValues } from "../types"

interface FarmSortButtonBarInterface {
    onSortClick: (v: SortValues) => void;
    activeSort: farmSort
}
export const FarmSortButtonBar = ({ onSortClick, activeSort }: FarmSortButtonBarInterface): JSX.Element => {


    const handleSortClick = (v: SortValues) => onSortClick(v)
    return <>
        <span  >
            Sort By :
        </span>
        {sortableFields.map((item) => {
            return <button
                key={item.value}

                onClick={() => handleSortClick(item.value)}
                className={`sortButton filterTab ${activeSort.value === item.value ? 'active selected' : ''}`}
            >
                {item.title}
                {activeSort.value === item.value && (activeSort.asc ? '-asc' : '-desc')}
            </button>
        })}
    </>
}