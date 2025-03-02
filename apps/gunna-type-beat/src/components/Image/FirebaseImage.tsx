import { useEffect, useState } from "react";
import { StorageService } from "@repo/firebase/storageService";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { Skeleton } from "../Skeleton";

export type FirebaseImageProps = Partial<ImageProps> & {
  filePath: string;
  alt: string;
};

//TODO: standardize image sizing and loading component
const FirebaseImage: React.FC<FirebaseImageProps> = ({
  filePath,
  alt,

  ...rest
}) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runEffect = async () => {
      try {
        const url = await StorageService.getFileURL(filePath);
        setImageURL(url ?? null);
      } catch (err) {
        setError("Failed to load image");
      }
    };

    runEffect();
  }, [filePath]);

  if (error) return <p>{error}</p>;

  return imageURL ? (
    <Image
      alt={alt}
      height={300}
      src={imageURL}
      style={{ objectFit: "cover" }}
      width={200}
      {...rest}
    />
  ) : (
    <Skeleton height={300} width="100%" />
  );
};

export default FirebaseImage;
