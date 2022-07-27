import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PlaylistAddOutlined } from '@mui/icons-material'

export interface BeerState {
    id: number,
    name: string,
}

const initialState: BeerState[] = [

]

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        addBeerToCurt: (state, action: PayloadAction<BeerState>) => {
            const isBeerInCurt = state.find((beer: BeerState) => beer.id === Number(action.payload.id))
            if (isBeerInCurt) {
                return state
            }
            else {
                return [...state, action.payload]
            }
        },

        removeBeerFromCut: (state, action: PayloadAction<number>) => {
            return state.filter(beer => beer.id !== action.payload)
        }
    }
})

export const { addBeerToCurt, removeBeerFromCut} = beerSlice.actions
export default beerSlice.reducer