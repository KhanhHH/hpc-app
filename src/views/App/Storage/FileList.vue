<template>
  <div class="">
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Tên</th>
            <th class="text-left">Ngày tải lên</th>
            <th class="text-left">Kích thước</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>Folder mới </td>
            <td>12/20/2020 </td>
            <td>--</td>
          </tr>
          <!-- <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr> -->
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="sass" scoped></style>
