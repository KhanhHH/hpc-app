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
import { mapState } from "vuex";

import AppNavigator from "@/components/layout/AppNavigator";
import AppBar from "@/components/layout/AppBar";

export default {
  components: { AppNavigator, AppBar },
  computed: {
    ...mapState("account", ["myAccount", "requestError", "requestStatus"])
  },
  async created() {
    await this.$store.dispatch("account/getMyAccount");
    if (
      this.requestStatus === "error" &&
      this.requestError.statusCode === 401
    ) {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
