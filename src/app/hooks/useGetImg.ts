import { useState, useEffect } from "react";
import { fetchDefaultAvatar, fetchLogo } from "../../constants/images";

type FetchFunctionName = "logo" | "avatar";

export function useImageFetcher(fetchFunctionName: FetchFunctionName) {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      let imageUrl: string | null = null;
      switch (fetchFunctionName) {
        case "logo":
          imageUrl = await fetchLogo();
          break;
        case "avatar":
          imageUrl = await fetchDefaultAvatar();
          break;

        default:
          console.error("Invalid fetch function name");
          break;
      }
      if (imageUrl) {
        setImageUrl(imageUrl);
      }
    };
    fetchImage();
  }, [fetchFunctionName]);

  return imageUrl;
}
