<template>
  <div class="">
    <VirtualMachineNavigator class="mt-2 mb-3" />
    <VirtualMachineList />
  </div>
</template>

<script>
import VirtualMachineNavigator from "./VirtualMachineNavigator";
import VirtualMachineList from "./VirtualMachineList";
export default {
  components: {
    VirtualMachineNavigator,
    VirtualMachineList
  }
};
</script>

<style lang="sass" scoped></style>
