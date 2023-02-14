const uploadService = (file) => {
    let formData = new FormData();
    console.log("uploading file");
    formData.append("file", file);
    if (formData) {
        console.log(formData.get("file"));
    }
    return new Promise(resolve => setTimeout(resolve, 1000))
}

export {uploadService};