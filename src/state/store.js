import { configureStore, createSlice } from '@reduxjs/toolkit'
import Converter from '../utils/Converter'

const converter = new Converter()

const initialState = {
  fromCurrency: '',
  toCurrency: '',
  input: 0,
  result: '0.00',
  currentPairRate: converter.getRate('USD', 'GBP'),
  lastUpdated: converter.getLastUpdated(),
}
const converterSlice = createSlice({
  name: 'converterState',
  initialState,
  reducers: {
    changeFromCurrency: (state, action) => {
      state.fromCurrency = action.payload
    },
    changeToCurrency: (state, action) => {
      state.toCurrency = action.payload
    },
    changeInput: (state, action) => {
      state.input = action.payload
    },
    changeResult: (state, action) => {
      state.result = action.payload
    },
    convert: (state) => {
      state.result = converter.convert(
        state.input,
        state.fromCurrency,
        state.toCurrency
      )
    },
    setCurrentPairRate: (state) => {
      state.currentPairRate = converter.getRate(
        state.fromCurrency,
        state.toCurrency
      )
    },
    switchPair: (state) => {
      const { input, fromCurrency, toCurrency } = state

      // Swap the values
      state.fromCurrency = toCurrency
      state.toCurrency = fromCurrency
    },
  },
})

export const {
  changeResult,
  changeInput,
  changeFromCurrency,
  changeToCurrency,
  convert,
  setCurrentPairRate,
  switchPair,
} = converterSlice.actions

const store = configureStore({
  reducer: converterSlice.reducer,
})

export default store
