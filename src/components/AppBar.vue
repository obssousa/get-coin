<template>
    <v-app-bar app class="ma-3" color="primary" shaped dark>
        <div class="d-flex align-center">
            <v-icon large class="pr-3" color="secondary">
                mdi-hand-coin
            </v-icon>

            <h4 class="toolbar-title">
                GETCOIN
            </h4>
        </div>

        <v-spacer></v-spacer>

        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
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
