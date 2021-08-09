import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <>
            <footer className="text-white body-font bg-secondary">
                <div className="container px-8 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center ">
                        <StaticImage
                            src="../images/tani-naturals-logo-dark-bg.png"
                            width={50}
                            quality={80}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Tani Naturals"
                            style={{ marginBottom: `1.45rem` }}
                        />
                    </a>
                    <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        Copyright (c) 2021 Tani Naturals 
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;