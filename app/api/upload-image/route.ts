import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const POST = async (
  req: Request,
) => {
  const { path } = await req.json();

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.v2.uploader.upload(path, options);

    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error) {

    console.error(error);
    return new Response(JSON.stringify("error"), { status: 404 })
  }
}
