<template>
  <div class="">
    This is app page
    <v-app>
      <AppBar />
      <AppNavigator />

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app> </v-footer>
    </v-app>
  </div>
</template>

<script>
import AppNavigator from "@/components/AppNavigator";
import AppBar from "@/components/AppBar";
export default {
  components: { AppNavigator, AppBar }
};
</script>
<style lang="sass" scoped></style>
