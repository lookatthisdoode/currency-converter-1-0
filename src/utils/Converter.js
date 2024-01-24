class Converter {
  constructor() {
    this.date = '20240124'
    this.API_URL = `https://data.kurzy.cz/json/meny/b[1]den[${this.date}].json`
    this.rates = {}
    this.updateRates()
    this.lastUpdated = new Date().toLocaleString('en-US', {
      timeZoneName: 'short',
    })
  }

  async updateRates() {
    try {
      const response = await fetch(this.API_URL)
      const data = await response.json()

      const selectedCurrencies = ['USD', 'EUR', 'PLN', 'GBP', 'JPY']
      const exchangeRates = {}

      // Constructing fresh rates object
      for (let baseCurrency of selectedCurrencies) {
        exchangeRates[baseCurrency] = {}

        for (let targetCurrency of selectedCurrencies) {
          const exchangeRate =
            data.kurzy[baseCurrency].dev_stred /
            data.kurzy[targetCurrency].dev_stred

          exchangeRates[baseCurrency][targetCurrency] = exchangeRate
        }
      }

      this.rates = exchangeRates
      return exchangeRates
    } catch (error) {
      throw new Error('Error updating rates:', error)
    }
  }

  convert(amount, fromCurrency, toCurrency) {
    const rate = this.getRate(fromCurrency, toCurrency)

    if (rate !== undefined) {
      const convertedAmount = amount * rate
      return this.trimToMoneyFormat(convertedAmount)
    } else {
      console.warn('Invalid currency pair or exchange rate not found.')
      return undefined
    }
  }

  getRate(fromCurrency, toCurrency) {
    return this.rates[fromCurrency] && this.rates[fromCurrency][toCurrency]
  }

  getLastUpdated() {
    return this.lastUpdated
  }

  trimToMoneyFormat(number) {
    // Ensure that the input is a number
    if (typeof number !== 'number') {
      throw new Error('Input must be a number')
    }

    // Round the number to 2 decimal places
    const roundedNumber = Number(number.toFixed(2))

    // Convert the rounded number to a string with 2 decimal places
    const moneyFormat = roundedNumber.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    return moneyFormat
  }
}

export default Converter
