import React, { useState } from 'react';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContact, setUserContact] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserContactChange = (e) => {
    setUserContact(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Description:', productDescription);
    console.log('User Email:', userEmail);
    console.log('User Contact:', userContact);

    // You can send this data to a server or perform other actions here.
  };

  return (
    <form action="process_form.php" method="post">
      <div className="container mt-4">
        <h1 className="text-center">Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Your Name:
            </label>
            <input
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="productName"
              value={productName}
              onChange={handleProductNameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
              Type (shopping, blog, etc.):
            </label>
            <input
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="productPrice"
              value={productPrice}
              onChange={handleProductPriceChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
              Explain how you want your website to look like:
            </label>
            <textarea
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="productDescription"
              value={productDescription}
              onChange={handleProductDescriptionChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
              Your Email:
            </label>
            <input
              type="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="userEmail"
              value={userEmail}
              onChange={handleUserEmailChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userContact" className="block text-sm font-medium text-gray-700">
              Your Contact Number:
            </label>
            <input
              type="tel"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="userContact"
              value={userContact}
              onChange={handleUserContactChange}
              required
            />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </form>
        <p className="text-center mt-3">
          Our contact email is{' '}
          <a href="mailto:mdsali914@gmail.com">mdsali914@gmail.com</a>
        </p>
      </div>
    </form>
  );
}

export default ProductForm;
