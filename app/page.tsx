import Image from 'next/image'
import { ImageLoaderProps, ImageLoader } from "next/image";

export default function Home() {
  return (
    <div>
      <h2>With Loader</h2>
      <Image
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
