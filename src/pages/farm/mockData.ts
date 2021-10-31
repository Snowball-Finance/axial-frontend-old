import { FarmListModel } from "./types";
import { iconSrcByAddress } from "../../utils/iconSrcByAddress";

const snobAddress = '0xC38f41A296A4493Ff429F1238e030924A1542e50'

export const farmData: FarmListModel = [
    {
        apr: 12,
        icons: [iconSrcByAddress(snobAddress), iconSrcByAddress(snobAddress)],
        liquidity: 16345123,
        name: 'SNOB-AVAX',
        poolWeight: 1.2,
        userStakedAmount: 0,
        farmName: "joe",
    },
    {
        apr: 10,
        icons: [iconSrcByAddress(snobAddress), iconSrcByAddress(snobAddress)],
        liquidity: 1234567.1234,
        name: 'SNIB-AVAX',
        poolWeight: 1.2,
        userStakedAmount: 0,
        farmName: 'pangulin',
    },
    {
        apr: 12,
        icons: [iconSrcByAddress(snobAddress)],
        liquidity: 12345.1234,
        name: 'SNAB-AVAX',
        poolWeight: 1.5,
        userStakedAmount: 0,
        farmName: 'stableCoin',
    },
    {
        apr: 1,
        icons: [iconSrcByAddress(snobAddress)],
        liquidity: 12345.1234,
        name: 'ASNOB-AVAX',
        poolWeight: 0.5,
        userStakedAmount: 0,
        farmName: "mine",
    },
    {
        apr: 2,
        icons: [iconSrcByAddress(snobAddress)],
        liquidity: 12345.1234,
        name: 'ASNOBX-AVAX',
        poolWeight: 0.5,
        userStakedAmount: 0,
        farmName: 'pangulin',
    },
    {
        apr: 121,
        icons: [iconSrcByAddress(snobAddress)],
        liquidity: 1234523.1234,
        name: 'ASBX-WAVAX',
        poolWeight: 0.7,
        userStakedAmount: 0,
        farmName: 'joe'
    },
    {
        apr: 0.5,
        icons: [iconSrcByAddress(snobAddress), iconSrcByAddress(snobAddress)],
        liquidity: 1234523.1234,
        name: 'ASBXE-WVAX',
        poolWeight: 0.7,
        userStakedAmount: 0,
        farmName: 'stableCoin',
    },
    {
        apr: 0.2,
        icons: [iconSrcByAddress(snobAddress), iconSrcByAddress(snobAddress)],
        liquidity: 1234523.1234,
        name: 'ASBCE-WVAX',
        poolWeight: 0.8,
        userStakedAmount: 0,
        farmName: "stableCoin"
    },
    {
        apr: 0.2,
        icons: [iconSrcByAddress(snobAddress), iconSrcByAddress(snobAddress)],
        liquidity: 123453.1234,
        name: 'ASBCE-WVAXQ',
        poolWeight: 0.8,
        userStakedAmount: 0,
        farmName: "mine"
    },
]