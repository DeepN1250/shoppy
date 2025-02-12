import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className=" py-8 mt-auto bg-amber-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p>We offer only the best quality products to our customers.</p>
            </div>
            <div className="p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p>Get your orders delivered quickly and on time.</p>
            </div>
            <div className="p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p>Our support team is here to help you 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;