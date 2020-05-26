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
    </v-app>
  </div>
</template>

<script>
import AppNavigator from "@/components/layout/AppNavigator";
import AppBar from "@/components/layout/AppBar";
export default {
  components: { AppNavigator, AppBar }
};
</script>
<style lang="scss" scoped></style>
