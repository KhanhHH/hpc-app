<template>
  <div class="">
    <AccountNavigator class="mb-3" />
    <AccountTableList />
  </div>
</template>

<script>
import AccountTableList from "./AccountTableList";
import AccountNavigator from "./AccountNavigator";
export default {
  components: { AccountTableList, AccountNavigator }
};
</script>

<style lang="sass" scoped></style>
