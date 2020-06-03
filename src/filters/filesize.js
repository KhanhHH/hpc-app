import filesize from "filesize";

export default function convertSize(value) {
  return filesize(value);
}
