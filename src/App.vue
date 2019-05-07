<template>
  <div id="app">
    <!-- <v-app>
    </v-app> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang="sass">
  @import '@/sass/app.sass'
  .main
    padding-top: 64px
</style>
