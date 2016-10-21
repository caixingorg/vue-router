<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ about }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      about: 'Hello about!'
    }
  },
  methods:{
    incrementTotal() {
      this.total += 1
    },
    decrementTotal() {
      this.total -= 1
    }
  }
}
</script>
