import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleProductApi, updateProductApi } from '../../apis/Api';

const AdminEditProduct = () => {
  // receive product id from url
  const { id } = useParams();

  // Make useState
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [oldImage, setOldImage] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();

  // load product data
  useEffect(() => {
    getSingleProductApi(id)
      .then((res) => {
        if (res.data && res.data.product) {
          const product = res.data.product;
          setProductName(product.productName || '');
          setProductPrice(product.productPrice || '');
          setProductDescription(product.productDescription || '');
          setProductCategory(product.productCategory || '');
          setOldImage(product.productImageUrl || '');
        } else {
          toast.error('Product data not found');
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load product data');
      });
  }, [id]);

  // image upload function
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    formData.append('productDescription', productDescription);
    formData.append('productCategory', productCategory);
    formData.append('productImage', productImage);

    // make an api call
    updateProductApi(id, formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate('/admin/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Internal Server Error!');
      });
  };

  return (
    <>
      <div className='m-4'>
        <h3>Editing product - <span className='text-success'>{productName}</span></h3>
        <div className='d-flex gap-3'>
          <form action="">
            <label>Product Name</label>
            <input value={productName} onChange={(e) => setProductName(e.target.value)} className='form-control mb-2' type="text" name="" id="" placeholder='Enter product name' />

            <label htmlFor="">Product Description</label>
            <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className='form-control mb-2' placeholder={"Enter description"} cols="4" rows="4"></textarea>

            <label htmlFor="">Price</label>
            <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

            <label htmlFor="">Select category</label>
            <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className='form-control mb-2'>
              <option value="Gaming Chairs">For Mariage</option>
              <option value="Gaming Headphones">Birthday Celebration</option>
              <option value="Gaming PC">Indoor Plants </option>
              <option value="Gaming Laptop">Outdoor Plants</option>
            </select>

            <label>Product Image</label>
            <input onChange={handleImageUpload} type="file" className='form-control' />

            <div className="d-flex justify-content-center">
              <button onClick={handleSubmit} className='btn btn-dark w-100 mt-2'>Update product</button>
            </div>
          </form>
          <div>
            <h6>Old Image Preview</h6>
            <img className='img-fluid rounded-4 object-fit-cover' width={300} height={300} src={oldImage} alt="" />

            <h6 className='mt-4'>New Image</h6>
            {
              previewImage ? <img src={previewImage} alt="product Image" className='img-fluid rounded-4 object-fit-cover' width={300} height={300} />
                : <p>No image selected!</p>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditProduct;
