export type FarmValues =
	'all' |
	'joe' |
	'pangulin' |
	'stableCoin' |
	'mine'


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

export type SortValues =
	'none' |
	'liquidity' |
	'poolWeight' |
	'apr'


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
export interface farmSort { value: SortValues, asc: boolean }

export interface FarmState {
	activeFarm: FarmValues,
	search: string,
	activeSort: farmSort
}

export type SearchAction = {
	type: 'setSearch',
	payload: string
}
export type SetFilterAction = {
	type: 'setFilter',
	payload: FarmValues
}
export type SetSortAction = {
	type: 'setSort',
	payload: SortValues
}

export type FarmPageActionTypes = SearchAction | SetFilterAction | SetSortAction