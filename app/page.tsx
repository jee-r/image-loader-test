import Image from 'next/image'
import { ImageLoaderProps, ImageLoader } from "next/image";

const imageLoader: ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://picsum.photos/id/${src}/${width}`;
};

export default function Home() {
  return (
    <div>
      <h2>With Loader</h2>
      <Image
        loader={imageLoader}
        src="59"
        alt="Art Wave #59"
        width={500}
        height={500}
      />
      <h2>Without loader</h2>
      <Image
        src="https://picsum.photos/id/59/500"
        alt="Art Wave #59"
        width={500}
        height={500}
      />

    </div>

  )
}
