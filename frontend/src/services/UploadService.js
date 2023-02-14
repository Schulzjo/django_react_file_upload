import http from "../http-common";


const uploadService = (file) => {
    let formData = new FormData();
    console.log("uploading file");
    formData.append("file", file);
    if (formData) {
        console.log(formData.get("file"));
    }
    return http.post("/import_excel/", formData);
}

export {uploadService};