<template>
    <div id="app">
      <h1>vue-router from mother{{msg}}</h1>
      <ul class="nav">
        <li><router-link to="/index">index</router-link></li>
        <li><router-link to="/about">about</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>
