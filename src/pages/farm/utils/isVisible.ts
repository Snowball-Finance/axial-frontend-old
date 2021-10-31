import { FarmModel, FarmValues } from "../types"

export const isFarmVisible = (farm: FarmModel, activeFarm: FarmValues): boolean => {
    return farm.visible !== false &&
        ((farm.farmName === activeFarm) || (activeFarm === 'all'))
}