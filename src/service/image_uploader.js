class ImageUploader {
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/dyazcou3r/upload";
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "banofl6m");
    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return await result.json();
  }
}

export default ImageUploader;
