<template>
  <div class="container-fluid">
    <section class="pagina-completa">
      <article id="artigo1">
        <form class="form-inline">
          <div class="form-group form-input">
            <label for="BTC">BTC: </label>
            <input v-model="BTC" min="0.00" step="0.05" type="number" class="form-control input-box" />
          </div>
        </form>
        <p> {{ (BTC * this.$store.state.inReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}) }}</p>
        <p> {{ (BTC * this.$store.state.inUSD).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
      </article>
      <article id="artigo2">
        <form class="form-inline">
          <div class="form-group form-input">
            <label for="BTC">BRL: </label>
            <input v-model="Real" min="0.00" step="0.05" type="number" class="form-control input-box" />
          </div>
        </form>
        <p>BTC {{ (Real / this.$store.state.inReal) }}</p>
        <p> {{ (Real / this.$store.state.USD_Real).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
      </article>
      <article id="artigo3">
        <form class="form-inline">
          <div class="form-group form-input">
            <label for="BTC">USD: </label>
            <input v-model="USD" min="0.00" step="0.05" type="number" class="form-control input-box" />
          </div>
        </form>
        <p>BTC {{ USD / this.$store.state.inUSD }}</p>
        <p>{{ (USD * this.$store.state.USD_Real).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({store}) {
    const response1 = await axios.get("https://blockchain.info/ticker");
    const response2 = await axios.get("https://economia.awesomeapi.com.br/json/all/usd-brl");
    const { USD, BRL } = response1.data;
    const  USD_BRL = response2.data;
    store.commit('setCurrency', { USD, BRL, USD_BRL });

  },
  data() {
    return {
      BTC: 1.0,
      Real:1.0,
      USD:1.0,
    };
  },
};
</script>

<style>

body{
  text-align: center;
}
label{
  color: rgb(0, 0, 0);
}

article{
  width: 500px;
  margin: auto ;
  color: rgb(3, 3, 3);
  background-color: rgb(33, 85, 134);
  border-radius: 10px;
  padding: 0px;

}
article form{
  margin-left: 115px;
  margin-top: 50px;
  margin-bottom: 20px ;
}
p{
  font-size: 25px;
}
label{
  color: rgb(5, 2, 2);
  font-size: 20px;
}
.input-box{
  font-size: 15px;

  border-radius: 15px;
}


</style>
