import { FarmValues, SortValues } from "./types";

export const farms: { title: string, value: FarmValues }[] = [
    {
        title: 'All', value: "all"
    },
    {
        title: 'Joe Farms', value: "joe"
    }, {
        title: 'Pangulin Farms', value: "pangulin"
    }, {
        title: 'StableCoin Farms', value: "stableCoin"
    }, {
        title: 'My Farms', value: "mine"
    },

]

export const sortableFields: { title: string, value: SortValues }[] = [

    {
        title: 'Liquidity', value: "liquidity"
    },
    {
        title: 'Pool Weight', value: "poolWeight"
    },
    {
        title: 'APR', value: "apr"
    },
]