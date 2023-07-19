import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

const defaultDescription = process.env.NEXT_PUBLIC_STORE_DESCRIPTION

export const metadata: Metadata = {
  title: "Home",
  description: defaultDescription,
}

const Home = () => {
  return (
    <>
      <Hero />
      {/* <FeaturedProducts /> */}
    </>
  )
}

export default Home
