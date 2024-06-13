import { useState, useEffect } from "react";
import { db } from "../firebase/Firebase";

const Data = ({ isGrid, uid }) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    db.collection(uid).onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const changeBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <div
      className={
        isGrid ? "grid grid-cols-3 gap-4 mt-4" : "flex flex-col gap-2 mt-4"
      }
    >
      {files.map((file) => (
        <div
          key={file.id}
          className={`border p-4 rounded shadow-sm bg-white max-w-[80%] m-auto min-w-[80%] ${
            isGrid ? "" : "flex justify-between items-center"
          }`}
        >
          <div
            className={`${
              isGrid
                ? "flex flex-col gap-4"
                : "flex-1 flex flex-col justify-between"
            }`}
          >
            <h2 className="font-medium">{file.data.filename}</h2>
            <p>Size: {changeBytes(file.data.size)}</p>
          </div>
          <div
            className={`${
              isGrid ? "" : "flex-1 flex justify-center items-center"
            }`}
          >
            <a
              href={file.data.fileURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Open
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
