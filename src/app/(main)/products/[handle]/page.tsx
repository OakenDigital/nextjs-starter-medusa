import medusaRequest from "@lib/medusa-fetch"
import ProductTemplate from "@modules/products/templates"
import { Metadata } from "next"

type Props = {
  params: { handle: string }
}

const storeName = process.env.NEXT_PUBLIC_STORE_NAME

async function getProducts(handle: string) {
  const res = await medusaRequest("GET", "/products", {
    query: {
      handle,
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${handle}`)
  }

  return res.body
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { products } = await getProducts(params.handle)

  const product = products[0]

  return {
    title: `${product.title} | ${storeName} Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | ${storeName} Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function CollectionPage({ params }: Props) {
  const { products } = await getProducts(params.handle)

  return <ProductTemplate product={products[0]} />
}
