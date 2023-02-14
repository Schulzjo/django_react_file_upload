import {useState} from "react";
import {uploadService} from "../services/UploadService";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState(null);

    const selectFile = (e) => {
        setFile(e.target);
    }

    const onClickUpload = () => {
        if (!file) {
            setMsg("Please select a file");
            return;
        }

        setMsg("Uploading....");

        uploadService(file).then(() => {
            setMsg("Finished");
        })
    }

    return (
        <div>
            <input type="file" onChange={selectFile}/>
            <button disabled={!file} onClick={onClickUpload}>Upload</button>
            {msg && <div>{msg}</div>}
        </div>
    )
}

export {FileUpload};