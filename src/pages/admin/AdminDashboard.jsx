// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { createProductApi, deleteProductApi, getAllProductsApi, createSaleProductApi } from '../../apis/Api';

// const AdminDashboard = () => {
//     const [productName, setProductName] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productCategory, setProductCategory] = useState('');

//     const [saleProductName, setSaleProductName] = useState('');
//     const [saleProductPrice, setSaleProductPrice] = useState('');
//     const [saleDiscount, setSaleDiscount] = useState('');
//     const [saleRating, setSaleRating] = useState('');

//     const [productImage, setProductImage] = useState(null);
//     const [saleProductImage, setSaleProductImage] = useState(null);
//     const [previewImage, setPreviewImage] = useState(null);
//     const [previewSaleImage, setPreviewSaleImage] = useState(null);

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         console.log(file);
//         setProductImage(file);
//         setPreviewImage(URL.createObjectURL(file));
//     };

//     const handleSaleImageUpload = (event) => {
//         const file = event.target.files[0];
//         console.log(file);
//         setSaleProductImage(file);
//         setPreviewSaleImage(URL.createObjectURL(file));
//     };

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         getAllProductsApi().then((res) => {
//             setProducts(res.data.products);
//         });
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('productName', productName);
//         formData.append('productPrice', productPrice);
//         formData.append('productDescription', productDescription);
//         formData.append('productCategory', productCategory);
//         formData.append('productImage', productImage);

//         createProductApi(formData).then((res) => {
//             if (res.data.success === false) {
//                 toast.error(res.data.message);
//             } else {
//                 toast.success(res.data.message);
//                 window.location.reload();
//             }
//         }).catch((err) => {
//             console.log(err);
//             toast.error('Internal Server Error!');
//         });
//     };

//     const handleDelete = (id) => {
//         const confirm = window.confirm("Are you sure you want to delete this product?");
//         if (!confirm) {
//             return;
//         } else {
//             deleteProductApi(id).then((res) => {
//                 if (res.data.success === false) {
//                     toast.error(res.data.message);
//                 } else {
//                     toast.success(res.data.message);
//                     window.location.reload();
//                 }
//             });
//         }
//     };

//     const handleSaleSubmit = (e) => {
//         e.preventDefault();
//         const saleData = new FormData();
//         saleData.append('saleProductName', saleProductName);
//         saleData.append('saleProductPrice', saleProductPrice);
//         saleData.append('saleDiscount', saleDiscount);
//         saleData.append('saleRating', saleRating);
//         saleData.append('saleProductImage', saleProductImage);

//         createSaleProductApi(saleData).then((res) => {
//             if (res.data.success === false) {
//                 toast.error(res.data.message);
//             } else {
//                 toast.success(res.data.message);
//             }
//         }).catch((err) => {
//             console.log(err);
//             toast.error('Internal Server Error!');
//         });
//     };

//     return (
//         <>
//             <div className='m-4'>
//                 <div className='d-flex justify-content-between'>
//                     <h1>Admin Panel</h1>

//                     <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addProductModal">
//                         Add Product
//                     </button>

//                     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addSaleModal">
//                         Add to Sale
//                     </button>

//                     <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
//                         <div className="modal-dialog">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h1 className="modal-title fs-5" id="addProductModalLabel">Create a new product!</h1>
//                                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     <label>Product Name</label>
//                                     <input onChange={(e) => setProductName(e.target.value)} className='form-control mb-2' type="text" placeholder='Enter product name' />

//                                     <label htmlFor="">Product Description</label>
//                                     <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control mb-2' placeholder="Enter description" cols="4" rows="4"></textarea>

//                                     <label htmlFor="">Price</label>
//                                     <input onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

//                                     <label htmlFor="">Select category</label>
//                                     <select onChange={(e) => setProductCategory(e.target.value)} className='form-control mb-2'>
//                                         <option value="Indoor Plants">Indoor Plants</option>
//                                         <option value="Outdoor Plants">Outdoor Plants</option>
//                                         <option value="Birthday Celebration">Birthday Celebration</option>
//                                         <option value="Engagement">Engagement</option>
//                                     </select>

//                                     <label>Product Image</label>
//                                     <input onChange={handleImageUpload} type="file" className='form-control' />

//                                     {previewImage && <img src={previewImage} className='img-fluid rounded object-cover mt-2' alt="Preview" />}
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                     <button onClick={handleSubmit} type="button" className="btn btn-primary">Save changes</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="modal fade" id="addSaleModal" tabIndex="-1" aria-labelledby="addSaleModalLabel" aria-hidden="true">
//                         <div className="modal-dialog">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h1 className="modal-title fs-5" id="addSaleModalLabel">Add Product to Sale</h1>
//                                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     <label>Product Name</label>
//                                     <input onChange={(e) => setSaleProductName(e.target.value)} className='form-control mb-2' type="text" placeholder='Enter product name' />

//                                     <label htmlFor="">Product Price</label>
//                                     <input onChange={(e) => setSaleProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

//                                     <label htmlFor="">Discount</label>
//                                     <input onChange={(e) => setSaleDiscount(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter discount percentage' />

//                                     <label htmlFor="">Rating</label>
//                                     <input onChange={(e) => setSaleRating(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter product rating' />

//                                     <label>Product Image</label>
//                                     <input onChange={handleSaleImageUpload} type="file" className='form-control' />

//                                     {previewSaleImage && <img src={previewSaleImage} className='img-fluid rounded object-cover mt-2' alt="Preview" />}
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                     <button onClick={handleSaleSubmit} type="button" className="btn btn-primary">Save changes</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <table className='table mt-2'>
//                     <thead className='table-dark'>
//                         <tr>
//                             <th>Product Image</th>
//                             <th>Product Name</th>
//                             <th>Product Price</th>
//                             <th>Product Category</th>
//                             <th>Product Description</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((item) => (
//                             <tr key={item._id}>
//                                 <td>
//                                     <img src={item.productImageUrl} height={40} width={40} alt="Product" />
//                                 </td>
//                                 <td>{item.productName}</td>
//                                 <td>NPR.{item.productPrice}</td>
//                                 <td>{item.productCategory}</td>
//                                 <td>{item.productDescription.slice(0, 10)}</td>
//                                 <td>
//                                     <div className="btn-group" role="group" aria-label="Basic example">
//                                         <Link to={`/admin/edit/${item._id}`} type="button" className="btn btn-success">Edit</Link>
//                                         <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-danger">Delete</button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createProductApi, deleteProductApi, getAllProductsApi, createSaleProductApi } from '../../apis/Api';

const AdminDashboard = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');

    const [saleProductName, setSaleProductName] = useState('');
    const [saleProductPrice, setSaleProductPrice] = useState('');
    const [saleDiscount, setSaleDiscount] = useState('');
    const [saleRating, setSaleRating] = useState('');

    const [productImage, setProductImage] = useState(null);
    const [saleProductImage, setSaleProductImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewSaleImage, setPreviewSaleImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setProductImage(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSaleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setSaleProductImage(file);
        setPreviewSaleImage(URL.createObjectURL(file));
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProductsApi().then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productPrice', productPrice);
        formData.append('productDescription', productDescription);
        formData.append('productCategory', productCategory);
        formData.append('productImage', productImage);

        createProductApi(formData).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
                window.location.reload();
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Internal Server Error!');
        });
    };

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product?");
        if (!confirm) {
            return;
        } else {
            deleteProductApi(id).then((res) => {
                if (res.data.success === false) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);
                    window.location.reload();
                }
            });
        }
    };

    const handleSaleSubmit = (e) => {
        e.preventDefault();
        const saleData = new FormData();
        saleData.append('saleProductName', saleProductName);
        saleData.append('saleProductPrice', saleProductPrice);
        saleData.append('saleDiscount', saleDiscount);
        saleData.append('saleRating', saleRating);
        saleData.append('saleProductImage', saleProductImage);

        createSaleProductApi(saleData).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Internal Server Error!');
        });
    };

    return (
        <>
            <div className='m-4'>
                <div className='d-flex justify-content-between'>
                    <h1>ADMIN PANEL</h1>

                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addProductModal">
                        Add Product
                    </button>

                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addSaleModal">
                        Add to Sale
                    </button>

                    <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="addProductModalLabel">Create a new product!</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label>Product Name</label>
                                    <input onChange={(e) => setProductName(e.target.value)} className='form-control mb-2' type="text" placeholder='Enter product name' />

                                    <label htmlFor="">Product Description</label>
                                    <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control mb-2' placeholder="Enter description" cols="4" rows="4"></textarea>

                                    <label htmlFor="">Price</label>
                                    <input onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

                                    <label htmlFor="">Select category</label>
                                    <select onChange={(e) => setProductCategory(e.target.value)} className='form-control mb-2'>
                                        <option value="Indoor Plants">Jeans</option>
                                        <option value="Outdoor Plants">Shoes</option>
                                        <option value="Birthday Celebration">Specail Offers</option>
                                        <option value="Birthday Celebration">Sale</option>
                                        <option value="Birthday Celebration">Baby</option>
                                        <option value="Birthday Celebration">Womens</option>
                                        <option value="Birthday Celebration">Jackets</option>
                                        <option value="Birthday Celebration">Bags</option>

                                        <option value="Birthday Celebration">Sing Glasses</option>

                                        <option value="Engagement">Engagement</option>
                                    </select>

                                    <label>Product Image</label>
                                    <input onChange={handleImageUpload} type="file" className='form-control' />

                                    {previewImage && <img src={previewImage} className='img-fluid rounded object-cover mt-2' alt="Preview" />}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" className="btn btn-dark">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="addSaleModal" tabIndex="-1" aria-labelledby="addSaleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="addSaleModalLabel">Add Product to Sale</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label>Product Name</label>
                                    <input onChange={(e) => setSaleProductName(e.target.value)} className='form-control mb-2' type="text" placeholder='Enter product name' />

                                    <label htmlFor="">Product Price</label>
                                    <input onChange={(e) => setSaleProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

                                    <label htmlFor="">Discount</label>
                                    <input onChange={(e) => setSaleDiscount(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter discount percentage' />

                                    <label htmlFor="">Rating</label>
                                    <input onChange={(e) => setSaleRating(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter product rating' />

                                    <label>Product Image</label>
                                    <input onChange={handleSaleImageUpload} type="file" className='form-control' />

                                    {previewSaleImage && <img src={previewSaleImage} className='img-fluid rounded object-cover mt-2' alt="Preview" />}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSaleSubmit} type="button" className="btn btn-dark">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Product Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <img src={item.productImageUrl} height={40} width={40} alt="Product" />
                                </td>
                                <td>{item.productName}</td>
                                <td>NPR.{item.productPrice}</td>
                                <td>{item.productCategory}</td>
                                <td>{item.productDescription.slice(0, 10)}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <Link to={`/admin/edit/${item._id}`} type="button" className="btn btn-secondary" style={{ borderRight: '1px solid white' }}>Edit</Link>
                                        <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-dark">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminDashboard;
