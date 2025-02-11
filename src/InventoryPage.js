import './InventoryPage.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState,useEffect } from 'react';
import axios from 'axios';
const InventoryPage = () => {
    let ch=0;
    const [itemslist, setitemslist] = useState([]); // ✅ Initialize as an empty array
    async function fetch() {
        try {
            const token = localStorage.getItem("auth_token");
            const response = await axios.get("http://127.0.0.1:8000/inventory/", {
                headers: { "Authorization": `Token ${token}` },
            });

            setitemslist(response.data); // ✅ Ensure response.data is an array
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    }

     useEffect(() => {
         fetch();
       //  console.log("fetched")
     }, [ch]); //ch      
//le.log(itemslist[4].description)


    // const [itemslist, setitemslist] = useState([
    //     {
    //         name:"Chips",
    //        img:"https://i5.walmartimages.com/asr/8a71fcba-e670-4b5c-9120-8b162d739de3_1.39861ccb364e931a9b4411d1e96484c5.jpeg",
    //        quantity:9,
    //        id:1,
    //        price:20
    //    },
    //    {
    //        name:"maggi",
    //        img:"https://apnafoodmarket.com/wp-content/uploads/2020/06/maggi-2-minutes-noodles.jpg",
    //        quantity:3,
    //        id:2,
    //        price:20
    //    },
    //    {
    //        name:"kitkat",
    //        img:"https://th.bing.com/th/id/R.9938362deb42f652c3d5726aa22fa946?rik=POGgyHH9HOe%2f6A&riu=http%3a%2f%2fcdn2.bigcommerce.com%2fserver5100%2fh711h5%2fproducts%2f982%2fimages%2f1757%2fkit_kat__91519.1485997572.1280.1280.png%3fc%3d2&ehk=vu6A%2bSKyZ5uKEl8qcmo7vWqMYRC8CAIUIbqGAx2MDBI%3d&risl=&pid=ImgRaw&r=0",
    //        quantity:5,
    //        id:3,
    //        price:35
    //    }
    //    ,
    //    {
    //        name:"munch",
    //        img:"https://th.bing.com/th/id/OIP.6EkKVolHoB8TK3b1fJbogAHaJ4?rs=1&pid=ImgDetMain",
    //        quantity:7,
    //        id:4,
    //        price:30
    //    }
    //    ,
    //    {
    //        name:"bourbon",
    //        img:"https://th.bing.com/th/id/OIP.IKRjrHxKXakkRZmR2GxrJwHaHa?rs=1&pid=ImgDetMain",
    //        quantity:2,
    //        id:5,
    //        price:20
    //    }
    //    ,
    //    {
    //        name:"pen",
    //        img:"https://images-na.ssl-images-amazon.com/images/I/71iryf9Hz3L._SL1500_.jpg",
    //        quantity:4,
    //        id:6,
    //        price:10
    //    }
    //    ,
    //    {
    //        name:"lays Indian Masala",
    //        img:"https://www.urbangroc.com/wp-content/uploads/2021/05/Lays-Chips-Indias-Magic-Masala-01.jpg",
    //        quantity:5,
    //        id:7,
    //        price:20
    //    }
    //    ,
    //    {
    //        name:"Hide&Seek",
    //        img:"https://cdn.shopify.com/s/files/1/0253/1331/2864/products/Parle-Hide-seek_7c34205a-0202-4777-83d3-5041c2884dfb_580x@2x.png?v=1593166639",
    //        quantity:8,
    //        id:8,
    //        price:25
    //    }
    // ]);
    // let link=fetch('http://localhost:5000/');
    // link.then((itemslist)=>{
    //     return itemslist.json();
    // }).then((items)=>{
    //     itemslist=items;
    // }) 
    function colorcheck(no) {
        if (no >= 5) {
            return "#8DEA65";
        }
        else return "#FF6F6F";
    }
    const[itemNo,SetItemNo]=useState('Item No : 1')
    const[Quantity,SetQuantity]=useState(1);
    // let items=document.querySelectorAll('.item');

    // items.forEach((item,index)=>{
    //     item.addEventListener('click',()=>{
    //            SetItemNo(`Item No: ${index+1}`);
    //            SetQuantity(`Quantity: ${itemslist[index].quantity}`);
    //            console.log("hello")
    //     })
    // })
    const[previndex,setprevindex]=useState(0);
    const [selectedItem, setSelectedItem] = useState(null); //FOR MODAL
    const [selectedItem2, setSelectedItem2] = useState(null); //FOR MODAL
    console.log(selectedItem2);
    
    var increment=((index)=>{
        if(previndex==index&&Quantity<itemslist[index].quantity){
            SetQuantity(number=>number+1);
        }else{
            setprevindex(index)
            SetQuantity(1);
        }
    })
    var decrement = ((index) => {
        if (previndex == index) {
            if (Quantity > 1) {
                SetQuantity(number => number - 1);
            }
        } else {
            setprevindex(index)
            SetQuantity(1);
        }
    })

    var sell = (() => {
        ch++;
        if (itemslist[previndex].quantity > 0) {
            // setitemslist((previtemslist) =>
            //     previtemslist.map((item, itemindex) => {
            //         if (itemindex == previndex) {
            //             let num = item.quantity - Quantity;
            //             SetQuantity(num);
            //             return { ...item, quantity: (num) }  // new syntax
            //         }
            //         else {
            //             return item;
            //         }
            //     })
            // )
            const token = localStorage.getItem("auth_token"); // Retrieve token from local storage
    try {
        if(selectedItem2.quantity-Quantity>0){
            const response =  axios.put(
                `http://127.0.0.1:8000/inventory/${selectedItem2.id}/`,  // Replace with actual API URL
                { quantity: selectedItem2.quantity - Quantity },
                {
                    headers: {
                        "Authorization": `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            SetQuantity(1);
            console.log("Update Successful:", response.data);
        }
        
    } catch (error) {
        console.error("Error updating quantity:", error.response?.data);
        alert("Failed to update quantity.");
    }
}
// fetch();
window.location.reload();
    })
    
    return (
        <div id="inventoryPage">
            <div id="headbar">
                <div id="itemno">
                    {itemNo}
                </div>
                <div id="quantity">
                    Quantity : {Quantity}
                </div>
                <button id="sell" onClick={(e) => {
                    e.preventDefault();
                    sell();
                }}>sell</button>
                <button id="cancel" onClick={() => { SetQuantity(1) }}>cancel</button>
            </div>
            <div id="itemlist">
                {
                    itemslist.map((item, index) => {
                        return <div className="item" onClick={() => {
                            setSelectedItem2(item);
                            setprevindex(index)
                            SetItemNo(`Item No : ${index + 1}`);
                        }}>
                            {!selectedItem &&
                                <div>
                                    <div className="itemquant" style={{ backgroundColor: colorcheck(item.quantity) }}>{item.quantity}</div>

                                    <button class="plus" onClick={() => { increment(index); }}>+</button>
                                    <button class="minus" onClick={() => { decrement(index); }}>-</button>
                                </div>
                            }
                            <img className="itemimg " onClick={() => {

                            }} src={item.img}></img>
                            <div className="itemname" onClick={() => { setSelectedItem(item); }}>{item.name}</div>
                        </div>
                    })
                }
            </div>
            <Link to="/summary">
           <button id="stop">
            stop
            </button>
           </Link>

            {/* POP-UP */}
            {selectedItem && (
                <div className="modaldiv">
                    <div className="overlay" onClick={(e) => setSelectedItem(null)}>
                        <div className="modal-content">
                            <h2>{selectedItem.name}</h2>
                            <p>Price: Rs.{selectedItem.price} <br />Quantity: {selectedItem.quantity} <br />Description: {selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
            {/* Pop-Up ends here */}
        </div>
    );
}
export default InventoryPage;