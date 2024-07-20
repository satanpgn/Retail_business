import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { create_order, getAllProductsApi } from "../apis/Api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQueryUsers, setSearchQueryUsers] = useState("");
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        toast.error("Failed to fetch products");
        console.log(err.message);
      });
  }, []);

  const handleSearchUsers = (e) => {
    e.preventDefault();
    const filteredUsers = products.filter((product) => {
      const lowerCaseQuery = searchQueryUsers.toLowerCase();
      return product.productName.toLowerCase().includes(lowerCaseQuery);
    });
    setProducts(filteredUsers);
  };

  const addToCart = (index) => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUserData);

    const productToAdd = products[index];

    if (!cart.find((item) => item.id === productToAdd._id)) {
      const orderData = {
        userId: storedUserData._id,
        productId: productToAdd._id,
        orderId: index.toString(),
        quantity: cartValue,
      };

      create_order(orderData)
        .then((res) => {
          if (res.data.success === false) {
            toast.error(res.data.message);
          } else {
            setCart([
              ...cart,
              {
                id: productToAdd._id,
                name: productToAdd.productName,
                price: productToAdd.productPrice,
                quantity: cartValue,
                orderId: res.data.order.orderId,
              },
            ]);
            alert("Item added to cart!");
          }
        })
        .catch((err) => {
          toast.error("Server Error");
          console.log(err.message);
        });
    } else {
      alert("Item is already in the cart!");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Welcome To Retail Store</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
        <img
          src="https://the4.co/cdn/shop/articles/Advantage-and-Disadvantage-of-online-and-offline-stores-2048x1151.jpg?v=1692675695"
          alt="Introduction"
          style={{ height: '1000px', width: '100%', borderRadius: '0px' }}
        />
        {/* <div style={{ position: 'absolute', top: '10%', left: '10%', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Discover the Latest in Trending Items</h2>
          <p style={{ fontSize: '1.2rem' }}>From cutting-edge keyboards to immersive products, find everything you need to elevate your shopping experience.</p>
        </div> */}
        <button
          className="secondary-button"
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translate()',
            padding: '15px',
            background: 'black',
            color: '#fff',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Get Started Today <FiArrowRight />
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <form className="d-flex" onSubmit={handleSearchUsers} style={{ width: '100%', maxWidth: '600px' }}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search Product..."
            aria-label="Search"
            value={searchQueryUsers}
            onChange={(e) => setSearchQueryUsers(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '2px solid #000000',
            }}
          />
          <button className="btn btn-outline-black" type="submit" style={{ padding: '10px', borderRadius: '5px', border: '2px solid #000000' }}>Search</button>
        </form>
      </div>

      <h2 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold', marginTop: '20px' }}>New Arrivals</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
        {products.map((product, index) => (
          <div key={product._id} style={{ margin: '20px', padding: '15px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '10px', textAlign: 'center' }}>
            <img src={product.productImageUrl} alt={product.productName} style={{ width: '350px', height: '400px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productName}</h3>
            <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productPrice}</h3>
            <Link to={`/product/${product._id}`}>
              <button
                style={{ padding: '8px', background: 'black', color: '#fff', borderRadius: '10px', cursor: 'pointer' }}>
                Buy Now
              </button>
            </Link>
            <button onClick={() => addToCart(index)} style={{ padding: '8px', background: 'black', color: '#fff', borderRadius: '10px', cursor: 'pointer', marginLeft: '10px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
       
      <div style={{ marginTop: '50px', textAlign: 'left' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold' }}>Highly Recommended</h2>
        <div style={{ display: 'flex', alignItems: 'center', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '8px' }}>
          <img
            src='https://cdn.shopify.com/s/files/1/1532/8355/files/Cool_Break2_3f443b2c-5950-4a5a-b59d-66c01ef83f4a.jpg?v=1654639837'
            alt='Recommended Product'
            style={{ width: '40%', height: '500px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
          />
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>Male Dress</h3>
            <p style={{ fontSize: '16px', color: '#333', margin: '5px 0' }}>
              This fits for all the slim body with average sizes. In Store visit you can find the many items with similiarity and discounts.

          
            </p>
            <button style={{ padding: '10px', background: 'black', color: '#fff', borderRadius: '20px', cursor: 'pointer' }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>  

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
        <div style={{ width: '413px', height: '400px', textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'Yellow' }}>Our Services</h3>
          <ul>
            <li style={{ color: 'white' }}>Buy Online Items</li>
            <li style={{ color: 'white' }}>Festival Offers</li>
            <li style={{ color: 'white' }}>Contacts us any time</li>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'Yellow' }}>Location</h3>
          <ul>
            <li style={{ color: 'white' }}>Visit Office</li>
            <li style={{ color: 'white' }}>New Baneshwor, Kathmandu</li>
            <li style={{ color: 'white' }}>Suryabinayak, Bhakatapur</li>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'Yellow' }}>Contacts</h3>
          <ul>
            <li style={{ color: 'white' }}>Call Any Time</li>
            <span style={{ color: 'white' }}>9803017003</span>
            <li style={{ color: 'white' }}>Send Email</li>
            <span style={{ color: 'white' }}>pankaj@gmail.com</span>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'Yellow' }}>Retail Business</h3>
          <ul>           
            <p style={{ color: 'white' }}>This Store welcomes all the ultimate destination for all needs! It is your ultimate destination for top-notch  trending and latest items arrivals in the markets.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useEffect, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import { Link, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { create_order, getAllProductsApi } from "../apis/Api";

// const HomePage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQueryUsers, setSearchQueryUsers] = useState("");
//   const { id } = useParams();
//   const [cart, setCart] = useState([]);
//   const [cartValue, setCartValue] = useState(1);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     getAllProductsApi()
//       .then((res) => {
//         setProducts(res.data.products);
//       })
//       .catch((err) => {
//         toast.error("Failed to fetch products");
//         console.log(err.message);
//       });
//   }, []);

//   const handleSearchUsers = (e) => {
//     e.preventDefault();
//     const filteredUsers = products.filter((product) => {
//       const lowerCaseQuery = searchQueryUsers.toLowerCase();
//       return product.productName.toLowerCase().includes(lowerCaseQuery);
//     });
//     setProducts(filteredUsers);
//   };

//   const addToCart = (index) => {
//     const storedUserData = JSON.parse(localStorage.getItem("user"));
//     setUserData(storedUserData);

//     const productToAdd = products[index];

//     if (!cart.find((item) => item.id === productToAdd._id)) {
//       const orderData = {
//         userId: storedUserData._id,
//         productId: productToAdd._id,
//         orderId: index.toString(),
//         quantity: cartValue,
//       };

//       create_order(orderData)
//         .then((res) => {
//           if (res.data.success === false) {
//             toast.error(res.data.message);
//           } else {
//             setCart([
//               ...cart,
//               {
//                 id: productToAdd._id,
//                 name: productToAdd.productName,
//                 price: productToAdd.productPrice,
//                 quantity: cartValue,
//                 orderId: res.data.order.orderId,
//               },
//             ]);
//             alert("Item added to cart!");
//           }
//         })
//         .catch((err) => {
//           toast.error("Server Error");
//           console.log(err.message);
//         });
//     } else {
//       alert("Item is already in the cart!");
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
//       <style>
//         {`
//           .product-card {
//             margin: 20px;
//             padding: 15px;
//             box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//             border-radius: 10px;
//             text-align: center;
//             transition: transform 0.3s ease;
//           }

//           .product-card:hover {
//             transform: scale(1.05);
//           }

//           .product-image {
//             width: 350px;
//             height: 400px;
//             object-fit: cover;
//             border-radius: 5px;
//             transition: transform 0.3s ease;
//           }

//           .product-image:hover {
//             animation-iteration-count: infinite;
//           }

//           @keyframes shake {
//             0% { transform: translate(1px, 1px) rotate(0deg); }
//             10% { transform: translate(-1px, -2px) rotate(-1deg); }
//             20% { transform: translate(-3px, 0px) rotate(1deg); }
//             30% { transform: translate(3px, 2px) rotate(0deg); }
//             40% { transform: translate(1px, -1px) rotate(1deg); }
//             50% { transform: translate(-1px, 2px) rotate(-1deg); }
//             60% { transform: translate(-3px, 1px) rotate(0deg); }
//             70% { transform: translate(3px, 1px) rotate(-1deg); }
//             80% { transform: translate(-1px, -1px) rotate(1deg); }
//             90% { transform: translate(1px, 2px) rotate(0deg); }
//             100% { transform: translate(1px, -2px) rotate(-1deg); }
//           }
//         `}
//       </style>
//       <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>WELCOME TO GAME GALAXY</h1>

//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
//         <img
//           src="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-3d-glasses_23-2149529351.jpg?size=626&ext=jpg"
//           alt="Introduction"
//           style={{ height: '600px', width: '120%', borderRadius: '0px' }}
//         />
//         <div style={{ position: 'absolute', top: '10%', left: '10%', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
//           <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Discover the Latest in Game Galaxy</h2>
//           <p style={{ fontSize: '1.2rem' }}>From cutting-edge keyboards to immersive headsets, find everything you need to elevate your gaming experience.</p>
//         </div>
//         <button
//           className="secondary-button"
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '10%',
//             transform: 'translate()',
//             padding: '10px',
//             background: 'black',
//             color: '#fff',
//             borderRadius: 'px',
//             cursor: 'pointer',
//           }}
//         >
//           Get Started Today
//         </button>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         <form className="d-flex" onSubmit={handleSearchUsers} style={{ width: '100%', maxWidth: '600px' }}>
//           <input
//             className="form-control me-2"
//             type="text"
//             placeholder="Search Product..."
//             aria-label="Search"
//             value={searchQueryUsers}
//             onChange={(e) => setSearchQueryUsers(e.target.value)}
//             style={{
//               flex: 1,
//               padding: '10px',
//               marginRight: '10px',
//               borderRadius: '5px',
//               border: '2px solid #000000',
//             }}
//           />
//           <button className="btn btn-outline-black" type="submit" style={{ padding: '10px', borderRadius: '5px', border: '2px solid #000000' }}>Search</button>
//         </form>
//       </div>

//       <h2 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold', marginTop: '20px' }}>New Arrivals</h2>

//       <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
//         {products.map((product, index) => (
//           <div 
//             key={product._id} 
//             className="product-card"
//           >
//             <img 
//               src={product.productImageUrl} 
//               alt={product.productName} 
//               className="product-image"
//             />
//             <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productName}</h3>
//             <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productPrice}</h3>
//             <Link to={`/product/${product._id}`}>
//               <button
//                 style={{ padding: '8px', background: 'black', color: '#fff', borderRadius: '10px', cursor: 'pointer' }}>
//                 Buy Now
//               </button>
//             </Link>
//             <button onClick={() => addToCart(index)} style={{ padding: '8px', background: 'black', color: '#fff', borderRadius: '10px', cursor: 'pointer', marginLeft: '10px' }}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
       
//       <div style={{ marginTop: '50px', textAlign: 'left' }}>
//         <h2 style={{ color: 'black', fontWeight: 'bold' }}>Highly Recommended</h2>
//         <div style={{ display: 'flex', alignItems: 'center', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '8px' }}>
//           <img
//             src='https://img.freepik.com/premium-photo/immerse-yourself-gaming-world-captivating-image-black-tour-pc-gamer-crisp-white-ba_983420-194932.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user'
//             alt='Recommended Product'
//             style={{ width: '30%', height: '500px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
//           />
//           <div style={{ textAlign: 'left' }}>
//             <h3 style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>Ryzen ZproPC</h3>
//             <p style={{ fontSize: '16px', color: '#333', margin: '5px 0' }}>
//             A high-end Windows PC that is suited for gaming. Although available ready built, gaming PCs are often custom made for the serious enthusiast. 
//             They have as much as 32GB of RAM and the fastest CPU and GPU chips that are generally no more than one generation behind. Typically using a tower case to accommodate multiple drives and state-of-the-art graphics cards that can cost five times as much as an entire non-gaming PC, such machines often use elaborate cooling mechanisms, especially if the CPU is overclocked.</p>
//             <button style={{ padding: '10px', background: 'black', color: '#fff', borderRadius: '20px', cursor: 'pointer' }}>
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>  

//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
//         <div style={{ width: '413px', height: '400px', textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'white' }}>Our Services</h3>
//           <ul>
//             <li style={{ color: 'white' }}>Buy Gaming Accessories</li>
//             <li style={{ color: 'white' }}>Festival Offers</li>
//             <li style={{ color: 'white' }}>Contacts us any time</li>
//           </ul>
//         </div>
//         <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'white' }}>Location</h3>
//           <ul>
//             <li style={{ color: 'white' }}>Visit Office</li>
//             <li style={{ color: 'white' }}>New Baneshwor, Kathmandu</li>
//             <li style={{ color: 'white' }}>Suryabinayak, Bhakatapur</li>
//           </ul>
//         </div>
//         <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'white' }}>Contacts</h3>
//           <ul>
//             <li style={{ color: 'white' }}>Call Any Time</li>
//             <span style={{ color: 'white' }}>9811796917</span>
//             <li style={{ color: 'white' }}>Send Email</li>
//             <span style={{ color: 'white' }}>sahm83381@gmail.com</span>
//           </ul>
//         </div>
//         <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'white' }}>GAME GALAXY</h3>
//           <ul>           
//             <p style={{ color: 'white' }}>Game Galaxy welcomes gamers to the ultimate destination for all gaming needs! It is your ultimate destination for top-notch gaming accessories and gear.</p>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

