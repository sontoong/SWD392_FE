import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebase";

export const handleUpload = (name: string, image: File) => {
  const storageRef = ref(storage, `images/${name}`);
  uploadBytes(storageRef, image)
    .then(() => {
      console.log("Image uploaded successfully");
    })
    .catch((error) => {
      console.log("Error uploading image: ", error);
    });
};

export const getImageUrl = async (name: string): Promise<string | null> => {
  const storageRef = ref(storage, `images/${name}`);
  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.log("Error getting download URL: ", error);
    return null;
  }
};
