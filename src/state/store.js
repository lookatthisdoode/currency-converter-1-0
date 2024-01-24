import { configureStore, createSlice } from '@reduxjs/toolkit'
import Converter from '../utils/Converter'

const converter = new Converter()

const initialState = {
  fromCurrency: '',
  toCurrency: '',
  input: 0,
  result: '0.00',
  currentPairRateString: '',
  lastUpdated: converter.getLastUpdated(),
  selectedCurrenciesList: converter.getSelectedCurrenciesList(),
}

const converterSlice = createSlice({
  name: 'converterSlice',
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
      if (!state.fromCurrency || !state.toCurrency) return
      state.result = converter.convert(
        state.input,
        state.fromCurrency,
        state.toCurrency
      )
    },
    setCurrentPairRateString: (state) => {
      // Get actual rate based on chosen currencies
      let rate = converter.getRate(state.fromCurrency, state.toCurrency)
      if (!state.fromCurrency || !state.toCurrency) return
      // Construct a string
      state.currentPairRateString = `1 ${state.fromCurrency} = ${1 * rate} ${
        state.toCurrency
      }`
    },
    switchPair: (state) => {
      const { fromCurrency, toCurrency } = state

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
  setCurrentPairRateString,
  switchPair,
} = converterSlice.actions

const store = configureStore({
  reducer: converterSlice.reducer,
})

export default store
