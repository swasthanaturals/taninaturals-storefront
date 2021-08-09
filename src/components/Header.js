import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return (
        <>
            <header className="sticky top-0 shadow bg-background">
                <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                    <div className="flex items-center">
                        <StaticImage
                            src="../images/tani-naturals-logo-light-bg.png"
                            width={50}
                            quality={80}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Tani Naturals"
                            style={{ marginBottom: `1.45rem` }}
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;