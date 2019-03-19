<template>
  <div class="about">
    <!-- <router-link to="/tree">Tree</router-link> |
    <router-link to="/table/render">Table Render</router-link> |
    <router-link to="/table/slot">Table Render</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>
