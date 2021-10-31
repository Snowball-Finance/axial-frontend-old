export type FarmValues =
	'all' |
	'joe' |
	'pangulin' |
	'stableCoin' |
	'mine'



export type SortValues =
	'none' |
	'liquidity' |
	'poolWeight' |
	'apr'


export interface farmSort { value: SortValues, asc: boolean }


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
export type SetPage = {
	type: 'setPage',
	payload: number
}

export type FarmPageActionTypes = SearchAction | SetFilterAction | SetSortAction | SetPage

export type FarmModel = {
	name: string,
	icons: string[],
	none?: ''
	poolWeight: number,
	liquidity: number,
	apr: number,
	userStakedAmount: number,
	visible?: boolean,
	farmName: FarmValues,
}
export type FarmListModel = FarmModel[]
export interface FarmState {
	activeFarm: FarmValues,
	search: string,
	activeSort: farmSort,
	initialFarms: FarmListModel,
	farms: FarmListModel,
	activePage: number
}
