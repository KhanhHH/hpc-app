<template>
  <div class="">
    <v-app>
      <GlobalUI />
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
import GlobalUI from "@/components/ui/global";

export default {
  components: { AppNavigator, AppBar, GlobalUI },
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
    await this.$store.dispatch("featureRequest/getMyFeatureRequestStatus");
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
