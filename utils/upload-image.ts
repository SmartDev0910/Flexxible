export const UploadImage = async (posterPath: string) => {
  try {
    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: JSON.stringify({
        path: posterPath,
      }),
    });

    return response.json();
  } catch (err) {
    return err;
  }
}
