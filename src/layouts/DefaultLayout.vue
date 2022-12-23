<template>
    <v-app>
      <AppBar />
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar
  }
}
</script>

  <style lang="scss" scoped>
    .toolbar-title {
      z-index: 2;
      margin-top: -15px;
      margin-left: -29px;
      font-size: 0.8em;
      font-weight: 600;
      letter-spacing: 5px;
    }
  </style>
