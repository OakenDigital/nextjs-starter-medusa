"use client"

import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { useState, useEffect } from "react"
import clsx from "clsx"
import { usePathname } from "next/navigation"


const Footer = ({ ...props }) => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(props.isHome || false)

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  return (
    <footer className={clsx("flex place-content-center", { "bg-stone-800": isHome })}>
      {/* <FooterCTA /> */}
      <FooterNav isHome={isHome} />
      <MedusaCTA />
    </footer>
  )
}

export default Footer
