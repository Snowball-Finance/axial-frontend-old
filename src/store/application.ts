import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { SwapStatsReponse } from "../libs/getSwapStats"

interface GasPrices {
  gasStandard?: number
  gasFast?: number
  gasInstant?: number
}
interface SwapStats {
  [swapAddress: string]: {
    oneDayVolume: number
    apy: number
    tvl: number
    utilization: string
  }
}
export interface TokenPricesUSD {
  [tokenSymbol: string]: number
}
interface LastTransactionTimes {
  [transactionType: string]: number
}

type ApplicationState = GasPrices & { tokenPricesUSD?: TokenPricesUSD } & {
  lastTransactionTimes: LastTransactionTimes
} & { swapStats?: SwapStats }

const initialState: ApplicationState = {
  lastTransactionTimes: {},
}

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    updateGasPrices(state, action: PayloadAction<GasPrices>): void {
      const { gasStandard, gasFast, gasInstant } = action.payload
      state.gasStandard = gasStandard
      state.gasFast = gasFast
      state.gasInstant = gasInstant
    },
    updateTokensPricesUSD(state, action: PayloadAction<TokenPricesUSD>): void {
      state.tokenPricesUSD = action.payload
    },
    updateLastTransactionTimes(
      state,
      action: PayloadAction<LastTransactionTimes>,
    ): void {
      state.lastTransactionTimes = {
        ...state.lastTransactionTimes,
        ...action.payload,
      }
    },
    updateSwapStats(state, action: PayloadAction<SwapStatsReponse[]>): void {
      const formattedPayload = Object.values(action.payload).reduce(
        (acc, data) => {
          if (isNaN(data.last_apr) || isNaN(data.last_vol)) {
            return acc
          }
          const apy = data.last_apr
          const tvl = 0
          const oneDayVolume = data.last_vol
          const utilization = 0
          return {
            ...acc,
            [data.swapaddress]: {
              apy,
              tvl,
              oneDayVolume,
              utilization,
            },
          }
        },
        {},
      )
      state.swapStats = formattedPayload
    },
  },
})

export const {
  updateGasPrices,
  updateTokensPricesUSD,
  updateLastTransactionTimes,
  updateSwapStats,
} = applicationSlice.actions

export default applicationSlice.reducer
