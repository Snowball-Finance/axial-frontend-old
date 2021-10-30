import "./Farm.scss"

import React, { ReactElement, useReducer } from "react"

import TopMenu from "../../components/menu/TopMenu"
import { useTranslation } from "react-i18next"
import {   farmReducer } from "./farmPageReducer"
import {  FarmValues, SortValues } from "./types"

function Risk(): ReactElement {
  const { t } = useTranslation()

	const [pageState, dispatch] = useReducer(farmReducer, {
		activeFarm: FarmValues.all,
		search: '',
		activeSort: { value: SortValues.none, asc: false }
	})

	const handleFilterChange = (v:FarmValues) => {
		dispatch({ type: "setFilter", payload: v })
	}

	const handleSearch = (v:string) => {
		dispatch({ type:'setSearch', payload: v })
	}

	const handleCancelSearch = () => {
		dispatch({ type: 'setSearch', payload: '' })
	}
	const onSortClick = (v:SortValues) => {
		dispatch({ type: "setSort", payload: v })
	}


  return (
    <div className="farmPage">
      <TopMenu activeTab={t("farm")} />
      <div className="content">
        
      </div>
    </div>
  )
}

export default Risk
