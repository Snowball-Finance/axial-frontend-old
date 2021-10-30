import "./Farm.scss"

import React, { ReactElement } from "react"

import TopMenu from "../../components/menu/TopMenu"
import { useTranslation } from "react-i18next"

function Risk(): ReactElement {
  const { t } = useTranslation()

  return (
    <div className="farmPage">
      <TopMenu activeTab={t("farm")} />
      <div className="content">
        
      </div>
    </div>
  )
}

export default Risk
