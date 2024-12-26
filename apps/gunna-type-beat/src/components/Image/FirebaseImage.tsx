import { useEffect, useState } from "react";
import { StorageService } from "@repo/firebase/storageService";
import type { ImageProps } from "next/image";
import Image from "next/image";

export type FirebaseImageProps = Partial<ImageProps> & {
  filePath: string;
  alt: string;
};

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
      height={200}
      style={{ maxWidth: "100%" }}
      width={200}
      {...rest}
      alt={alt}
      src={imageURL}
    />
  ) : (
    <p>Loading...</p>
  );
};

export default FirebaseImage;
