<template>
  <tr>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.name }}
    </td>
    <td class="text-truncate" style="max-width: 300px;">
      {{ item.email }}
    </td>
    <td>
      {{ item.phone }}
    </td>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.workplace }}
    </td>
    <td>
      <template v-if="item.status === 'active'">
        Đang hoạt động
      </template>
      <template v-if="item.status === 'deactive'">
        Ngừng hoạt động
      </template>
    </td>
    <td>
      <template v-if="item.type === 'member'">
        Member
      </template>
      <template v-if="item.type === 'admin'">
        Admin
      </template>
    </td>
    <td>
      <v-btn color="primary" fab x-small dark :to="'edit/' + item.id">
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({}),
  methods: {}
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
