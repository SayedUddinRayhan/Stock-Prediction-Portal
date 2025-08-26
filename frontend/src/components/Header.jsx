import React from 'react'

const Header = () => {
    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
                {/* Left side - Logo */}
                <a className="navbar-brand fw-bold text-primary" href="#">
                    StockPredict
                </a>

                {/* Right side - Buttons */}
                <div className="ms-auto">
                    <button className="btn btn-outline-primary me-2">Login</button>
                    <button className="btn btn-primary">Register</button>
                </div>
            </header>


        </>
    )
}

export default Header