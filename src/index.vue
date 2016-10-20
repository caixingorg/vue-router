<template>
  <div id="indexapp">
    <h1>{{ index }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 'Hello index! test'
    }
  }
}
</script>
<style lang="sass">
#indexapp{
  background:red;
  h1{
    font-size:normal;
  }
}
</style>
