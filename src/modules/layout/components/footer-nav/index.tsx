"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import CountrySelect from "../country-select"

const storeNameCopyright = process.env.NEXT_PUBLIC_STORE_NAME_COPYRIGHT;

const FooterNav = ({ ...props }) => {
  const { collections } = useCollections()
  const [isHome, setIsHome] = useState(props.isHome)

  useEffect(() => {
    setIsHome(props.isHome)
  }, [props])

  return (
    <div className="content-container flex flex-col justify-center gap-y-8 pt-16 pb-8">
      <div className="flex flex-col-reverse gap-y-4 xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className={clsx("text-xsmall-regular", { "text-stone-400": isHome }, { "text-black": !isHome })}>
          © Copyright {new Date().getFullYear()} {storeNameCopyright}
        </span>
        {/* <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div> */}
      </div>
    </div>
  )
}

export default FooterNav
