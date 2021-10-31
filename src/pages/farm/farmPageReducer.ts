import { FarmPageActionTypes, FarmState } from "./types";


export const farmReducer = (state: FarmState, action: FarmPageActionTypes): FarmState => {
	const newState = { ...state }

	switch (action.type) {
		case 'setFilter': {
			newState.activePage = 1
			newState.activeFarm = action.payload
		}
			break;
		case 'setPage': {
			newState.activePage = action.payload
		}
			break;
		case 'setSearch': {
			const list = [...newState.farms].map((item) => {
				const includes = item.name.replace('-', '').toLowerCase()
					.includes(action.payload.replace('-', '').toLowerCase())

				return { ...item, visible: includes, }
			})
			newState.activePage = 1
			newState.search = action.payload
			newState.farms = list
		}
			break;
		case 'setSort': {
			const { activeSort } = newState
			const tmp = { ...activeSort }
			if (activeSort.value === action.payload) {
				tmp.asc = !tmp.asc
			}
			else {
				tmp.value = action.payload
				tmp.asc = true
			}

			const first = tmp.asc ? 1 : -1
			const second = tmp.asc ? -1 : 1
			//@ts-ignore
			newState.farms.sort((a, b) => (a[tmp.value] > b[tmp.value]) ? first : ((b[tmp.value] > a[tmp.value]) ? second : 0))
			newState.activePage = 1
			newState.activeSort = tmp

		}
			break;
		default:
			break;
	}

	return newState

}