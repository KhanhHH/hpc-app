<template>
  <div class="d-flex justify-end">
    <div class="subtitle-2 pr-4">
      Ngày đăng ký:
      <span>
        {{ new Intl.DateTimeFormat("vi-VN").format(new Date()) }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      Ngày hết hạn:
      <span>
        {{ new Intl.DateTimeFormat("vi-VN").format(new Date()) }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      Dung lượng:
      <span>
        10.5/20 GB
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({})
};
</script>

<style lang="sass" scoped></style>
