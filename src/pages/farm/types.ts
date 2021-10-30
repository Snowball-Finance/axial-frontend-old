export enum FarmValues  {
	all= 'all',
	joe= 'joe',
	pangulin= 'pangulin',
	stableCoin= 'stableCoin',
	mine= 'mine'
}

export const farms = [
	{
		title: 'All', value: FarmValues.all
	},
	{
		title: 'Joe Farms', value: FarmValues.joe
	}, {
		title: 'Pangulin Farms', value: FarmValues.pangulin
	}, {
		title: 'StableCoin Farms', value: FarmValues.stableCoin
	}, {
		title: 'My Farms', value: FarmValues.mine
	},

]

export enum SortValues  {
	none= 'none',
	liquidity= 'liquidity',
	poolWeight= 'poolWeight',
	apr= 'apr',
}

export const sortableFields = [

	{
		title: 'Liquidity', value: SortValues.liquidity
	},
	{
		title: 'Pool Weight', value: SortValues.poolWeight
	},
	{
		title: 'APR', value: SortValues.apr
	},
]
export interface farmSort
	{ value: SortValues, asc: boolean }

export interface FarmState{
	activeFarm: FarmValues,
	search: string,
	activeSort:farmSort
}

export type SearchAction={
    type:'setSearch',
    payload:string
}
export type SetFilterAction={
    type:'setFilter',
    payload:FarmValues
}
export type SetSortAction={
    type:'setSort',
    payload:SortValues
}

export type FarmPageActionTypes=SearchAction|SetFilterAction|SetSortAction