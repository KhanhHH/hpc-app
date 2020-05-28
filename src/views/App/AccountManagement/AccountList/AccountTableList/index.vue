<template>
  <div class="">
    <v-simple-table fixed-header height="400px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Họ tên</th>
            <th class="text-left">Email</th>
            <th class="text-left">Điện thoại</th>
            <th class="text-left">Đơn vị công tác</th>
            <th class="text-left">Trạng thái</th>
            <th class="text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <ListItem v-for="item of userList" :item="item" :key="item.id" />
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  components: { ListItem },
  data: () => ({
    userList: [
      {
        id: "777",
        name: "Hoàng Huy Khánh",
        email: "hoang.huykhanh01@gmail.com",
        phone: "0762005242",
        workplace: "Đại học Bách Khoa Hà Nội",
        status: "active"
      },
      {
        id: "1",
        name: "Hoàng Huy Khánh",
        email: "hoang.huykhanh01@gmail.com",
        phone: "0762005242",
        workplace: "Đại học Bách Khoa Hà Nội",
        status: "active"
      }
    ]
  }),
  methods: {}
};
</script>

<style lang="sass" scoped></style>
