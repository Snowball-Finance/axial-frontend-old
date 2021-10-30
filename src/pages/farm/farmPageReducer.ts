 import { FarmPageActionTypes, FarmState } from "./types";

 
export const farmReducer = (state:FarmState, action:FarmPageActionTypes):FarmState => {
	const newState = { ...state }

	switch (action.type) {
		case 'setFilter': {
			newState.activeFarm = action.payload
		}
			break;
		case 'setSearch': {
			newState.search = action.payload
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

			newState.activeSort = tmp
		}
			break;
		default:
			break;
	}

	return newState

}