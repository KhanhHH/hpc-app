<template>
  <div class="">
    <VirtualMachineInfo class="mt-2 mb-4" />
    <VirtualMachineNavigator class="mt-2 mb-3" />
    <VirtualMachineList />
  </div>
</template>

<script>
import VirtualMachineInfo from "./VirtualMachineInfo";
import VirtualMachineNavigator from "./VirtualMachineNavigator";
import VirtualMachineList from "./VirtualMachineList";
export default {
  components: {
    VirtualMachineNavigator,
    VirtualMachineList,
    VirtualMachineInfo
  }
};
</script>

<style lang="sass" scoped></style>
