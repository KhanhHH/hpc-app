<template>
  <div>
    <StorageForm v-if="form === 'storage'" />
    <ComputingForm v-if="form === 'computing'" />
    <VirtualMachineForm v-if="form === 'virtual-machine'" />
  </div>
</template>

<script>
import StorageForm from "./RegisterForm/StorageForm";
import ComputingForm from "./RegisterForm/ComputingForm";
import VirtualMachineForm from "./RegisterForm/VirtualMachineForm";
export default {
  components: { StorageForm, ComputingForm, VirtualMachineForm },
  data: () => ({
    form: ""
  }),
  created() {
    const { service } = this.$router.currentRoute.params;
    this.form = service;
  }
};
</script>

<style lang="scss" scoped></style>
