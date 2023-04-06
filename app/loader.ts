import { ImageLoaderProps, ImageLoader } from "next/image";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
    return `https://picsum.photos/id/${src}/${width}`;
  }