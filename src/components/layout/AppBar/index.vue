<template>
  <v-app-bar app clipped-left dense flat>
    <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
    <span class="title ml-3 mr-5">
      HPC
      <span class="font-weight-light">services</span>
    </span>
    <v-spacer />
    <v-text-field
      solo-inverted
      flat
      hide-details
      dense
      label="Tìm kiếm"
    ></v-text-field>
    <v-spacer />
    <span class="">
      {{ myAccount.name }}
    </span>
    <v-btn class="ms-2" icon large>
      <v-avatar size="32px" item>
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        ></v-img>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState("account", ["myAccount"]),
    ...mapState("ui", ["drawer"])
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch("ui/toggleDrawer", !this.drawer);
    }
  }
};
</script>

<style lang="sass" scoped></style>
