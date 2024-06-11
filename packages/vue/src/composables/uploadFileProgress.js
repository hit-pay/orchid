import { ref } from "vue";


const validateImageExtension = (file, extensions)  => {
  const allowedExtensions = extensions.split(',');
  const extension = file.name.split('.').pop().toLowerCase();
  return allowedExtensions.indexOf(`.${extension}`) !== -1;
}
export const useUploadFileProgress = (maxSize, emit, acceptExtensions) => {
  const currentFiles = ref([]);
  const isErrorMaxSize = ref(false);
  const onChangeFile = (event, singleFileUpload = false) => {
    
    const uploadFiles = [...event.target.files].filter(
      (f) => {
        const checkExist = !currentFiles.value.some((file) => file.fileName === f.name)
        if(!checkExist){
          emit("fileExist")
        }
        if(acceptExtensions){
          const checkExt = validateImageExtension(f, acceptExtensions)
          if(!checkExt){
            emit("invalidFileType")
          }
          return checkExist && checkExt
        }else{
          return checkExist
        }
      }
    );

    isErrorMaxSize.value =
      uploadFiles.reduce((acc, file) => acc + file.size, 0) >
      maxSize * 1024 * 1024;

    if (isErrorMaxSize.value) {
      emit("onExceedMaxFileSize", uploadFiles);

      return;
    }
    for (let i = 0; i < uploadFiles.length; i++) {
      const file = uploadFiles[i];
      const reader = new FileReader();
      const formData = new FormData();
      formData.append("file", file);
      currentFiles.value.unshift({
        file: file,
        fileName: file.name,
        link: file.link,
        progress: 0,
        fileUrl: "",
        totalSize: 0,
        isLoaded: false,
        extension: file.name.split(".").at(-1) || "png",
      });
      emit(
        "update:modelValue",
        !singleFileUpload ? currentFiles.value : currentFiles.value[0]
      );
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
          (event.loaded / currentFiles.value[index].totalSize).toFixed(2)
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
      handleEventFile(e, reader, index)
    );
    reader.addEventListener("load", (e) => handleEventFile(e, reader, index));
    reader.addEventListener("loadend", (e) =>
      handleEventFile(e, reader, index)
    );
    reader.addEventListener("progress", (e) =>
      handleEventFile(e, reader, index)
    );
    reader.addEventListener("error", (e) => handleEventFile(e, reader, index));
    reader.addEventListener("abort", (e) => handleEventFile(e, reader, index));
  };

  const onDeleteFile = (index) => {
    let selected = currentFiles.value.find((_, i) => i === index);
    currentFiles.value = currentFiles.value.filter((c) => c !== selected);

    emit("onRemoveFile", selected);

    emit(
      "update:modelValue",
      currentFiles.value.length > 0 ? currentFiles.value : null
    );
  };
  return {
    isErrorMaxSize,
    currentFiles,
    onChangeFile,
    onDeleteFile,
  };
};
