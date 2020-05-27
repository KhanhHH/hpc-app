<template>
  <v-card class="mx-auto" max-width="644">
    <div class="d-flex px-4 py-4 my-4">
      <v-card-text>
        <div class="d-flex align-center pb-1">
          <div class="headline text--primary">
            {{ service.title }}
          </div>
        </div>
        <p>{{ service.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :to="'register/' + service.serviceRoute"
          v-if="service.serviceStatus === 'unregistered'"
          text
          color="deep-purple accent-4 "
        >
          Đăng ký sử dụng
        </v-btn>
        <v-btn
          v-if="service.serviceStatus === 'registered'"
          text
          color="deep-purple accent-4 "
        >
          Truy cập dịch vụ
        </v-btn>
        <v-btn
          v-if="service.serviceStatus === 'pending'"
          text
          color="deep-purple accent-4 "
        >
          Đang chờ xét duyệt
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style lang="scss" scoped></style>
