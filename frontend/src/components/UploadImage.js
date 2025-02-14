import React, { useState } from 'react';
import axios from 'axios';
 
function UploadImage() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 
  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
 
  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
 
  // Handle description input change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
 
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
 
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    

 
    try {
      // Replace the URL with your backend API endpoint
      const response = await axios.post('http://localhost:8084/api/dishes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload successful!');
      console.log(response.data); // Log the response from the server
    } catch (err) {
      setError('Error uploading file');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
 
  return (
<div>
<h1>Upload Image</h1>
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="image">Image:</label>
<input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
</div>
<div>
<label htmlFor="name">Name:</label>
<input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
</div>
<div>
<label htmlFor="description">Description:</label>
<textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
</div>
<div>
          <label htmlFor="price">Prix (TND):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
<button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
</button>
</form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
</div>
  );
}
 
export default UploadImage;