import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import { useRouter } from "next/router"

const Layout: React.FC = ({ children }) => {
  const { pathname } = useRouter()
  const isHome = pathname === "/"

  return (
    <div>
      <Nav isHome={isHome} />
      <main className="relative">{children}</main>
      <Footer isHome={isHome} />
    </div>
  )
}

export default Layout
