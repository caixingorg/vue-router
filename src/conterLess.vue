<template>
  <div id="counter" >
    <button v-on:click="decrement" v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">-{{number}}</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeColor: 'black',
      fontSize: 30
    }
  },
  props: ['number'],
  methods:{
      decrement () {
      
        console.log(this)
        //  number -= 1
         this.$emit('decrement')
      }
  }
}
</script>
<style scoped>
#counter{
    backgroud:#ccc;
}
</style>