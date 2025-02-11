import './home.css'
import Saleslist from './saleslist';
import React, { useState } from 'react';
import AddItemPopUp from './addItemPopUp';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ItemsPage from './Itemstable';
import { useEffect } from 'react';
import axios from 'axios';
const Homepage = () => {
    const [addItemPopUp, setAddItemPopUp] = useState(false);

    const openPopUp = () => {
        setAddItemPopUp(true);
    };

    const closePopUp = () => {
        setAddItemPopUp(false);
    };

    // var productlist;
    // fetch('http://127.0.0.1:8000/inventory/',
    //     {
    //         method:'GET',
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("auth_token")}`,  // Use "Bearer" if using JWT
    //             "Content-Type": "application/json",
    //         },}
    // ).then((res)=>{
    //     return res.json();
    // }).then((item)=>{
    //   productlist=item;
    // })
    // console.log(productlist)

    const [productlist, setproductlist] = useState([]); // ✅ Initialize as an empty array
    async function fetchItems() {
        try {
            const token = localStorage.getItem("auth_token");
            const response = await axios.get("http://127.0.0.1:8000/inventory/", {
                headers: { "Authorization": `Token ${token}` },
            });

            setproductlist(response.data); // ✅ Ensure response.data is an array
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    }

    useEffect(() => {
        fetchItems()       
},[productlist])


        console.log(productlist)
    // [
    //     {
    //         name:"Chips",
    //         img:"https://i5.walmartimages.com/asr/8a71fcba-e670-4b5c-9120-8b162d739de3_1.39861ccb364e931a9b4411d1e96484c5.jpeg",
    //         quantity:9,
    //         id:1,
    //         price:20
    //     },
    //     {
    //         name:"maggi",
    //         img:"https://apnafoodmarket.com/wp-content/uploads/2020/06/maggi-2-minutes-noodles.jpg",
    //         quantity:3,
    //         id:2,
    //         price:20
    //     },
    //     {
    //         name:"kitkat",
    //         img:"https://th.bing.com/th/id/R.9938362deb42f652c3d5726aa22fa946?rik=POGgyHH9HOe%2f6A&riu=http%3a%2f%2fcdn2.bigcommerce.com%2fserver5100%2fh711h5%2fproducts%2f982%2fimages%2f1757%2fkit_kat__91519.1485997572.1280.1280.png%3fc%3d2&ehk=vu6A%2bSKyZ5uKEl8qcmo7vWqMYRC8CAIUIbqGAx2MDBI%3d&risl=&pid=ImgRaw&r=0",
    //         quantity:5,
    //         id:3,
    //         price:35
    //     }
    //     ,
    //     {
    //         name:"munch",
    //         img:"https://th.bing.com/th/id/OIP.6EkKVolHoB8TK3b1fJbogAHaJ4?rs=1&pid=ImgDetMain",
    //         quantity:7,
    //         id:4,
    //         price:30
    //     }
    //     ,
    //     {
    //         name:"bourbon",
    //         img:"https://th.bing.com/th/id/OIP.IKRjrHxKXakkRZmR2GxrJwHaHa?rs=1&pid=ImgDetMain",
    //         quantity:2,
    //         id:5,
    //         price:20
    //     }
    //     ,
    //     {
    //         name:"pen",
    //         img:"https://images-na.ssl-images-amazon.com/images/I/71iryf9Hz3L._SL1500_.jpg",
    //         quantity:4,
    //         id:6,
    //         price:10
    //     }
    //     ,
    //     {
    //         name:"lays Indian Masala",
    //         img:"https://www.urbangroc.com/wp-content/uploads/2021/05/Lays-Chips-Indias-Magic-Masala-01.jpg",
    //         quantity:5,
    //         id:7,
    //         price:20
    //     }
    //     ,
    //     {
    //         name:"Hide&Seek",
    //         img:"https://cdn.shopify.com/s/files/1/0253/1331/2864/products/Parle-Hide-seek_7c34205a-0202-4777-83d3-5041c2884dfb_580x@2x.png?v=1593166639",
    //         quantity:8,
    //         id:8,
    //         price:25
    //     }
    // ];
 
    return ( 
<div id="homepage">
            <div id="homepagehead">
                Welcome, user  
            </div>
            <div id="sidebar">
                <div className="sidebaritem" id="newprod" onClick={openPopUp}>New product <div id="plus">+</div>
                </div>
                <Link to=''>
                <div className="sidebaritem">Log out</div>
                </Link>
                
                {/* <div className="sidebaritem">History</div>
                <div className="sidebaritem">Feedback</div>
                <div className="sidebaritem">settings</div> */}
            </div>
            <div id="profile"></div>
           
                <div id="itemshead">
                    Items Available
                </div>
               {/* <Saleslist productlist={productlist}></Saleslist> */}
           <div id="tablebox">
           <table id='itemstable'>
                <tr id='headrow'>
                    <th> S No.</th>
                    <th> Img</th>
                    <th> Product Name</th>
                    <th> Price</th>
                    <th> Quantity</th>
                    <th> Total</th>
                </tr>
                <ItemsPage productlist={productlist}></ItemsPage>
               </table>
           </div>
            
            <Link to="/inventory-page">
            <button id="startbutton">
                start
                </button> 
            </Link>
            <AddItemPopUp openPopUp = {openPopUp} closePopUp = {closePopUp} addItemPopUp = {addItemPopUp} />
         </div>
     );
}
 
export default Homepage;