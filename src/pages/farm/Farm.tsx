import "./Farm.scss"

import React, { ReactElement, useReducer } from "react"
import farmHeaderImage from '../../assets/images/farm_header.png'

import TopMenu from "../../components/menu/TopMenu"
import { useTranslation } from "react-i18next"
import { farmReducer } from "./farmPageReducer"
import { FarmListModel, FarmModel, FarmValues, SortValues } from "./types"
import { farmData } from "./mockData"
import { FarmFilterButtonBar } from "./components/filterButtons"
import filterStyles from '../../styles/modules/filters.module.scss'
import { SearchInput } from "./components/searchInput"
import { FarmSortButtonBar } from "./components/sortButtons"
import { FarmsList } from "./components/farmsList"
import { Pagination } from "../../components/pagination/Pagination"
import { isFarmVisible } from "./utils/isVisible"

const farmConfig = {
	numberOfPageFarms: 6
}

function Farm(): ReactElement {
	const { t } = useTranslation()

	const [pageState, dispatch] = useReducer(farmReducer, {
		activeFarm: "all",
		search: '',
		activeSort: { value: "none", asc: false },
		farms: [...farmData],
		initialFarms: [...farmData],
		activePage: 1
	})

	const handleFilterChange = (v: FarmValues) => {
		dispatch({ type: "setFilter", payload: v })
	}

	const handleSearch = (v: string) => {
		dispatch({ type: 'setSearch', payload: v })
	}

	const handleCancelSearch = () => {
		dispatch({ type: 'setSearch', payload: '' })
	}
	const onSortClick = (v: SortValues) => {
		dispatch({ type: "setSort", payload: v })
	}

	const onFarmClick = (farm: FarmModel) => {
		console.log(farm);
	}
	const handlePageChange = (page: number) => {
		dispatch({ type: 'setPage', payload: page })
	}

	const calculateTotalPages = ({ activeFarm }: { activeFarm: FarmValues }): number => {
		const items = [...pageState.farms].filter((item) => {
			return isFarmVisible(item, activeFarm)
		})
		if (items.length < farmConfig.numberOfPageFarms) {
			return 1
		}
		return Number(((farmConfig.numberOfPageFarms / items.length) + 1).toString().split('.')[0]) + 1
	}

	const { activeFarm, search, activeSort, farms, activePage } = pageState
	const visibleFarms = farms.filter((item) => isFarmVisible(item, activeFarm))
	const slicedFarms = visibleFarms.slice((activePage - 1) * farmConfig.numberOfPageFarms, (activePage) * farmConfig.numberOfPageFarms)
	return (
		<div className="farmPage">
			<TopMenu activeTab={t("farm")} />
			<div className="content">
				<div className="pageHeader">
					<div className="titleAndSubtitles">
						<p className="title">Farm</p>
						<p className="subtitle">Total TVL: $938.49m</p>
					</div>
					<div className="imageWrapper">
						<img src={farmHeaderImage} alt="farm_header" className="headerImage" />
					</div>
				</div>
				{/* <div className={filterStyles.filters}> */}
				<div className={filterStyles.filterAlignStart}>
					<FarmFilterButtonBar  {...{ activeFarm }} onChange={handleFilterChange} />
				</div>
				<div className="inputWrapper">
					<SearchInput onChange={(e) => handleSearch(e.target.value)} value={search} />
				</div>
				<div className={filterStyles.filterAlignStart}>
					<FarmSortButtonBar {...{ activeSort, onSortClick }} />
				</div>
				<FarmsList {...{ farms: slicedFarms, onFarmClick, activeFarm }} />
				{calculateTotalPages({ activeFarm }) > 1 && <Pagination
					page={activePage}
					totalPages={calculateTotalPages({ activeFarm })}
					handlePagination={handlePageChange}
				/>}

			</div>

		</div>
	)
}

export default Farm
