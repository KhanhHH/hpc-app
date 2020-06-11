<template>
  <div class="">
    <ComputingInfo class="mt-2 mb-4" />
    <ComputingNavigator class="mb-3" />
    <ComputingQueueList />
  </div>
</template>

<script>
import ComputingInfo from "./ComputingInfo";
import ComputingNavigator from "./ComputingNavigator";
import ComputingQueueList from "./ComputingQueueList";
export default {
  components: { ComputingInfo, ComputingNavigator, ComputingQueueList }
};
</script>

<style lang="sass" scoped></style>
