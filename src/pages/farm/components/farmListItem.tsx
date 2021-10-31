import { TFunction } from 'i18next'
import React from 'react'
import { FarmModel } from "../types"

interface FarmListItemInterface {
    onClick: (farm: FarmModel) => void;
    farm: FarmModel,
    t: TFunction
}
export const FarmListItem = ({ onClick, farm, t }: FarmListItemInterface): JSX.Element => {
    return <div className="farmListItem" onClick={() => onClick(farm)}>
        <div className="iconsAndName">
            <div className="iconsWrapper">
                {farm.icons.map((icon, index) => {
                    return <img className='farmIcon' key={index} src={icon} alt={icon} />
                })}
            </div>
            {farm.name}
        </div>
        <div className="dataPart">
            <div className="dataItemTitle">{t("PoolWeight")}</div>
            <div className="dataItemTitle">{t("Liquidity")}</div>
            <div className="dataItemValue">{farm.poolWeight}</div>
            <div className="dataItemValue">{farm.liquidity}</div>
        </div>
        <div className="dataPart">
            <div className="dataItemTitle">{t("APR")}</div>
            <div className="dataItemTitle">{t("YourStake")}</div>
            <div className="dataItemValue">{farm.apr}</div>
            <div className="dataItemValue">{farm.userStakedAmount}</div>
        </div>

    </div>
}