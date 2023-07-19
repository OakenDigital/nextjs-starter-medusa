import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative prose">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-center small:items-start small:p-32">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md shadow-black">
          We got stickers!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          That's about all we have right now.
        </p>
        <UnderlineLink href="/store">Explore stickers</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg?1"
        loading="eager"
        priority={true}
        quality={90}
        alt="Bronco Club Hero Image"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
