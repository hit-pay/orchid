import { ref } from "vue";

export const useUploadFileProgress = (maxSize, emit) => {
  const currentFiles = ref([]);
  const isErrorMaxSize = ref(false);
  const onChangeFile = (event) => {
    const uploadFiles = [...event.target.files].filter(
      (f) => !currentFiles.value.some((file) => file.fileName === f.name),
    );
    isErrorMaxSize.value =
      uploadFiles.reduce((acc, file) => acc + file.size, 0) >
      maxSize * 1024 * 1024;
    if (isErrorMaxSize.value) return;
    for (let i = 0; i < uploadFiles.length; i++) {
      const file = uploadFiles[i];
      const reader = new FileReader();
      const formData = new FormData();
      formData.append("file", file);
      currentFiles.value.unshift({
        file: file,
        fileName: file.name,
        progress: 0,
        fileUrl: "",
        totalSize: 0,
        isLoaded: false,
        extension: file.name.split(".").at(-1) || "png",
      });
      emit("update:modelValue", currentFiles.value);
      if (file) {
        addListeners(reader, i);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleEventFile = (event, reader, index) => {
    if (!event.type) return;
    const loadStart = () => {
      currentFiles.value[index].totalSize = event.total;
    };
    const loadEndFile = () => {
      currentFiles.value[index].fileUrl = reader.result;
      currentFiles.value[index].isLoaded = true;
    };
    const progressFile = () => {
      currentFiles.value[index].progress =
        Number(
          (event.loaded / currentFiles.value[index].totalSize).toFixed(2),
        ) * 100;
    };

    const fileListeners = {
      loadstart: loadStart,
      loadend: loadEndFile,
      load: loadEndFile,
      progress: progressFile,
    };
    fileListeners[event.type]();
  };

  const addListeners = (reader, index) => {
    reader.addEventListener("loadstart", (e) =>
      handleEventFile(e, reader, index),
    );
    reader.addEventListener("load", (e) => handleEventFile(e, reader, index));
    reader.addEventListener("loadend", (e) =>
      handleEventFile(e, reader, index),
    );
    reader.addEventListener("progress", (e) =>
      handleEventFile(e, reader, index),
    );
    reader.addEventListener("error", (e) => handleEventFile(e, reader, index));
    reader.addEventListener("abort", (e) => handleEventFile(e, reader, index));
  };

  const onDeleteFile = (index) => {
    emit(
      "onRemoveFile",
      currentFiles.value.find((_, i) => i === index),
    );

    currentFiles.value.splice(index, 1);
    emit("update:modelValue", currentFiles.value);
  };
  return {
    isErrorMaxSize,
    currentFiles,
    onChangeFile,
    onDeleteFile,
  };
};
