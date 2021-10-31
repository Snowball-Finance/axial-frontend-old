import React from 'react'
import { farms } from "../constants"
import { FarmValues } from '../types'

interface FarmFilterButtonBarInterface {
    onChange: (value: FarmValues) => void;
    activeFarm: FarmValues,
}

export const FarmFilterButtonBar = ({ onChange, activeFarm }: FarmFilterButtonBarInterface): JSX.Element => {

    const handleFilterClick = (v: FarmValues) => onChange(v)

    return <>
        {farms.map((item, index) => {
            const last = index === farms.length - 1
            return <button
                key={item.value}
                onClick={() => handleFilterClick(item.value)}
                className={`filterTab ${activeFarm === item.value ? 'selected' : ''} ${last ? 'noBorder' : ''}`}
            >
                {item.title}
            </button>
        })}
    </>
}