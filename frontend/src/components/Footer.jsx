import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-light text-center py-3 mt-auto border-top">
            <small className="text-muted">© {new Date().getFullYear()} StockPredict. All rights reserved.</small>
        </footer>
    </>
  )
}

export default Footer