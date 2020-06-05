<template>
  <v-list-item :disabled="disabled" link :to="{ path: '/app/' + path }">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["path", "title", "icon", "disabled"]
};
</script>

<style lang="sass" scoped></style>
