<template>
  <div>
    table {{$route.params.type}}
    <router-link to="/table/render">render</router-link> |
    <router-link to="/table/slot">slot</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>

</style>
