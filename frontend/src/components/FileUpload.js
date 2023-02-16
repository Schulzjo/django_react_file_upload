import {useState} from "react";
import {uploadService} from "../services/UploadService";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState("Upload your file");
    const [disabled, setDisabled] = useState(true);

    const selectFile = (e) => {
        let f = e.target.files[0]
        setFile(f);
        if (f) {
            setDisabled(false);
        }
    }

    const onClickUpload = () => {
        if (!file) {
            setMsg("Please select a file");
            return;
        }

        setMsg("Uploading....");

        uploadService(file).then(() => {
            setMsg("Uploading Finished");
            setDisabled(true);
        }).catch((e) => {
            setMsg("Error");
            console.log(e.message)
        })
    }

    return (
        <div className={`flex justify-center mt-16`}>
            <div className={`mb-3 w-96`}>
                <label className="form-label inline-block mb-2 text-gray-700"
                       htmlFor="file_input">{msg && <div>{msg}</div>}</label>
                <input type="file" onChange={selectFile}
                       id="file_input"
                       className={`form-control 
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                   focus:text-blue-700
                   focus:bg-white
                   focus:border-blue-600
                   focus:outline-none`}/>
                <div className={`flex justify-center`}>
                <button disabled={disabled} onClick={onClickUpload}
                        className={`bg-green-500
                        mt-5
                        py-2
                        px-4
                        text-sm
                        text-white
                        rounded
                        border
                        border-green
                        focus:outline-none
                        focus:border-green-dark`}>Upload
                </button>
                </div>

        </div>
</div>
)
}

export {FileUpload};