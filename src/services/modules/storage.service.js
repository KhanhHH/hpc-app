import Api from "@/services";

export default {
  uploadFile(folderId, formData) {
    return Api().post(`storages/upload/folder/${folderId}`, formData);
  },
  getMyStorage() {
    return Api().get("storages/me");
  },
  getFolder(folderId) {
    return Api().get(`storages/folder/${folderId}`);
  },
  deleteFile(folderId, fileId) {
    return Api().delete(`storages/folder/${folderId}/file/${fileId}`);
  },
  deleteFolder(folderId, childFolderId) {
    return Api().delete(
      `storages/folder/${folderId}/child-folder/${childFolderId}`
    );
  },
  renameFile(folderId, fileId, body) {
    return Api().patch(`storages/folder/${folderId}/file/${fileId}`, body);
  },
  renameChildFolder(folderId, childFolderId, body) {
    return Api().patch(
      `storages/folder/${folderId}/child-folder/${childFolderId}`,
      body
    );
  },
  createNewFolder(body) {
    return Api().post(`storages/folder`, body);
  }
};
