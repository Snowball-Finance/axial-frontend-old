export type Farms =
	'all' |
	'joe' |
	'pangulin' |
	'stableCoin' |
	'mine'


export const farms: { title: string, value: Farms }[] = [
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

export type Sorts =
	'none' |
	'liquidity' |
	'poolWeight' |
	'apr'


export const sortableFields: { title: string, value: Sorts }[] = [

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
export interface farmSort { value: Sorts, asc: boolean }

export interface FarmState {
	activeFarm: Farms,
	search: string,
	activeSort: farmSort
}

export type SearchAction = {
	type: 'setSearch',
	payload: string
}
export type SetFilterAction = {
	type: 'setFilter',
	payload: Farms
}
export type SetSortAction = {
	type: 'setSort',
	payload: Sorts
}

export type FarmPageActionTypes = SearchAction | SetFilterAction | SetSortAction