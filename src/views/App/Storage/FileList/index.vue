<template>
  <div class="">
    <v-simple-table fixed-header height="400px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Tên</th>
            <th class="text-left">Ngày tải lên</th>
            <th class="text-left">Kích thước</th>
          </tr>
        </thead>
        <tbody>
          <ListItem v-for="item of fileList" :item="item" :key="item.id" />
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
    selectedFile: null,
    fileList: [
      {
        id: "777",
        name: "Folder mới",
        uploadDate: new Date(),
        fileSize: "0.8 MB",
        type: "folder"
      },
      {
        id: "177",
        name: "Folder mới",
        uploadDate: new Date(),
        fileSize: "0.8 MB",
        type: "folder"
      },
      {
        id: "277",
        name: "Folder mới",
        uploadDate: new Date(),
        fileSize: "0.8 MB",
        type: "folder"
      },
      {
        id: "3",
        name: "File mới",
        uploadDate: new Date(),
        fileSize: "0.8 MB",
        type: "file"
      },
      {
        id: "1",
        name: "Tệp mới tải lên ",
        uploadDate: new Date(),
        fileSize: "200 MB",
        type: "file"
      },
      {
        id: "099",
        name: "uild complete. The dist directory is ready to be deplo",
        uploadDate: new Date(),
        fileSize: "500 MB",
        type: "file"
      },
      {
        id: "768678",
        name: "uild complete. The dist directory is ready to be deplo",
        uploadDate: new Date(),
        fileSize: "500 MB",
        type: "file"
      },
      {
        id: "7",
        name: "uild complete. The dist directory is ready to be deplo",
        uploadDate: new Date(),
        fileSize: "500 MB",
        type: "file"
      },
      {
        id: "8",
        name: "uild complete. The dist directory is ready to be deplo",
        uploadDate: new Date(),
        fileSize: "500 MB",
        type: "file"
      },
      {
        id: "9",
        name: "uild complete. The dist directory is ready to be deplo",
        uploadDate: new Date(),
        fileSize: "500 MB",
        type: "file"
      }
    ]
  }),
  methods: {}
};
</script>

<style lang="sass" scoped></style>
