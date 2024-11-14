// components/ImageLoader.js
import Image from 'next/image';

interface ImageLoaderProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const ImageLoader = ({ src, width, height, alt }: ImageLoaderProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
    />
  );
};

export default ImageLoader;
