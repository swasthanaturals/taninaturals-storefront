import React from "react"

const Header = () => {
    return (
        <>
            <header className="sticky top-0 shadow bg-background">
                <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                    <div className="flex items-center">
                        <div className="w-12 mr-3">
                            
                        </div>
                        <span className="font-serif">tani</span>
                        <span className="font-sans">NATURALS</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;