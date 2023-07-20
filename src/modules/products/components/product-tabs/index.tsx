import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import { useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    return [
      {
        label: "Product Information",
        component: <ProductInfoTab product={product} />,
      },
      {
        label: "Shipping & Returns",
        component: <ShippingInfoTab />,
      },
    ]
  }, [product])

  return (
    <div>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-2">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-left uppercase text-small-regular pb-2 -mb-px border-b border-gray-200 transition-color duration-150 ease-in-out",
                    {
                      "border-b border-gray-900": selected,
                    }
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          {product.material &&
            <div>
              <span className="font-semibold">Material</span>
              <p>{product.material ? product.material : "-"}</p>
            </div>
          }
          {product.origin_country &&
            <div>
              <span className="font-semibold">Country of origin</span>
              <p>{product.origin_country ? product.origin_country : "-"}</p>
            </div>
          }
          {product.type &&
            <div>
              <span className="font-semibold">Type</span>
              <p>{product.type ? product.type.value : "-"}</p>
            </div>
          }
        </div>
        <div className="flex flex-col gap-y-4">
          {product.weight &&
            < div >
              <span className="font-semibold">Weight</span>
              <p>{product.weight ? `${product.weight} g` : "-"}</p>
            </div>
          }
          {(product.length || product.width || product.height) &&
            <div>
              <span className="font-semibold">Dimensions</span>
              <p>
                {(product.length && product.width) || product.height
                  ? `${product?.length || 0}L x ${product?.width || 0}W x ${product?.height || 0}H`
                  : "-"}
              </p>
            </div>
          }
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </Tab.Panel>
  )
}

const ShippingInfoTab = () => {
  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Quick delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 5-7 business days.
            </p>
          </div>
        </div>
        {/* <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div> */}
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Damaged or incorrect items may be returned for either a replacement or full refund.
            </p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  )
}

export default ProductTabs
