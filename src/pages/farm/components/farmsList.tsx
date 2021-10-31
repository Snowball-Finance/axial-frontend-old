import React from 'react';
import { useTranslation } from 'react-i18next';
import { FarmListModel, FarmModel, FarmValues } from "../types"
import { FarmListItem } from './farmListItem';

interface FarmsListInterface {
    farms: FarmListModel,
    onFarmClick: (farms: FarmModel) => void;
    activeFarm: FarmValues
}
export const FarmsList = ({ farms, onFarmClick, activeFarm }: FarmsListInterface): JSX.Element => {
    const { t } = useTranslation()
    return <div className="farmsListWrapper">
        {farms.map((farm) => {
            return <FarmListItem  {...{ farm, t }} onClick={onFarmClick} key={farm.name} />
        })}
    </div>
}