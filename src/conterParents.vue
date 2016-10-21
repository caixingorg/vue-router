<template>
  <div id="conterParents" >
     <p>{{ total }}</p>
     <conterAdd v-on:increment="incrementTotal" v-bind:number="total"></conterAdd>
     <conterLess v-on:decrement="decrementTotal" v-bind:number="total"></conterLess>
  </div>
</template>
<script>
console.log("--------")
import conterAdd from './conterAdd.vue';   
import conterLess from './conterLess.vue';   
export default {
  data () {
    return {
        total:0
    }
  },
  methods: {
    incrementTotal() {
      this.total += 1
    },
    decrementTotal() {
      this.total -= 1
    }
  },
  components:{conterAdd,conterLess},
}
</script>
<style scoped>
#conterParents{
    backgroud:#ccc;
}
</style>