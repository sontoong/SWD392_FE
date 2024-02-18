import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebase";

export const handleUpload = (name: string, image: File) => {
  const storageRef = ref(storage, `images/${name}`);
  uploadBytes(storageRef, image)
    .then(() => {
      console.log("Image uploaded successfully");
      getDownloadURL(storageRef)
        .then((url) => {
          console.log("Download URL:", url);
          return url;
        })
        .catch((error) => {
          console.log("Error getting download URL: ", error);
        });
    })
    .catch((error) => {
      console.log("Error uploading image: ", error);
    });
};
