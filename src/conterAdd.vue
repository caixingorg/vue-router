<template>
  <div id="counter" >
    <button v-on:click="increment" v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">+{{number}}</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeColor: 'red',
      fontSize: 30
    }
  },
  props: ['number'],
  methods:{
     increment (){
       console.log(this.$parent.set("activeColor","blue"))
        this.$emit('increment')
     
     }
  }
}
</script>
<style scoped>
#counter{
    backgroud:#ccc;
}
</style>