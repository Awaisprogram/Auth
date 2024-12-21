import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <div>
        <h4 className="text-3xl font-bold mb-4">Our Information</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-200 hover:underline">About Us</a>
          </li>
          <li className="mb-2">
            <a href="#" className=" text-gray-200 hover:underline">Our Team</a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:underline">Careers</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-3xl font-bold mb-4">About Us</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-200 hover:underline">Company Overview</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-200 hover:underline">History</a>
          </li>
          <li>
            <a href="#" className=" text-gray-200 hover:underline">Values</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-3xl font-bold mb-4">Product</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className=" text-gray-200 hover:underline">Features</a>
          </li>
          <li className="mb-2">
            <a href="#" className=" text-gray-200 hover:underline">Pricing</a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:underline">FAQs</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-3xl font-bold mb-4">Support</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className=" text-gray-200 hover:underline">Help Center</a>
          </li>
          <li className="mb-2">
            <a href="#" className=" text-gray-200 hover:underline">Contact Us</a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-10 text-center border-t border-gray-700 pt-4">
      <p>&copy; 2024 Awais Mehmood. All Rights Reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
