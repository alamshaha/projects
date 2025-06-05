import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState('');

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Please choose a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/index.php/api/upload-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        },
      });

      if (response.data.status === 'success') {
        setMessage('File uploaded successfully.');
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      console.error('Error during file upload:', error);
      setMessage('There was an error uploading the file.');
    }
  };

  return (
    <div>
      <h2>Upload File</h2>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}

      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;