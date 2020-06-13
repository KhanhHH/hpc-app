<template>
  <div class="">
    <ComputingQueueNavigator class="mt-2 mb-3" />
    <ComputingQueueList />
  </div>
</template>

<script>
import ComputingQueueNavigator from "./ComputingQueueNavigator";
import ComputingQueueList from "./ComputingQueueList";
export default {
  components: { ComputingQueueNavigator, ComputingQueueList }
};
</script>

<style lang="sass" scoped></style>
