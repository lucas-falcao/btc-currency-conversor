export const state = () => ({
    inReal: 100000,
    inUSD: 18000,
    USD_Real: 0.0,
})
export const mutations = {
    setCurrency(state, currency) {
        state.inReal = currency.BRL.buy
        state.inUSD = currency.USD.buy,
        state.USD_Real = currency.USD_BRL.USD.ask
    },
}
