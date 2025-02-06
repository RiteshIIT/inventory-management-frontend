import './InventoryPage.css'
import { useState, useEffect } from 'react';
const InventoryPage = () => {
    const [itemslist, setitemslist] = useState([
        {
            name: "Chips",
            img: "https://i5.walmartimages.com/asr/8a71fcba-e670-4b5c-9120-8b162d739de3_1.39861ccb364e931a9b4411d1e96484c5.jpeg",
            quantity: 9,
            id: 1,
            price: 20
        },
        {
            name: "maggi",
            img: "https://apnafoodmarket.com/wp-content/uploads/2020/06/maggi-2-minutes-noodles.jpg",
            quantity: 3,
            id: 2,
            price: 30
        },
        {
            name: "kitkat",
            img: "https://www.pngmart.com/files/23/Kitkat-PNG-Photo.png",
            quantity: 5,
            id: 3,
            price: 25
        }
        ,
        {
            name: "munch",
            img: "https://th.bing.com/th/id/OIP.6EkKVolHoB8TK3b1fJbogAHaJ4?rs=1&pid=ImgDetMain",
            quantity: 7,
            id: 4,
            price: 10
        }
        ,
        {
            name: "bourbon",
            img: "https://th.bing.com/th/id/OIP.IKRjrHxKXakkRZmR2GxrJwHaHa?rs=1&pid=ImgDetMain",
            quantity: 2,
            id: 5,
            price: 50
        }
        ,
        {
            name: "pen",
            img: "https://images-na.ssl-images-amazon.com/images/I/71iryf9Hz3L._SL1500_.jpg",
            quantity: 4,
            id: 6,
            price: 100
        }
        ,
        {
            name: "lays Indian Masala",
            img: "https://www.urbangroc.com/wp-content/uploads/2021/05/Lays-Chips-Indias-Magic-Masala-01.jpg",
            quantity: 5,
            id: 7,
            price: 20
        }
        ,
        {
            name: "Hide&Seek",
            img: "https://cdn.shopify.com/s/files/1/0253/1331/2864/products/Parle-Hide-seek_7c34205a-0202-4777-83d3-5041c2884dfb_580x@2x.png?v=1593166639",
            quantity: 8,
            id: 8,
            price: 40
        }
    ]);
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
    const [itemNo, SetItemNo] = useState('Item No :')
    const [Quantity, SetQuantity] = useState(1);
    // let items=document.querySelectorAll('.item');

    // items.forEach((item,index)=>{
    //     item.addEventListener('click',()=>{
    //            SetItemNo(`Item No: ${index+1}`);
    //            SetQuantity(`Quantity: ${itemslist[index].quantity}`);
    //            console.log("hello")
    //     })
    // })
    
    const [previndex, setprevindex] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null); //FOR MODAL

    var increment = ((index) => {
        if (previndex == index && Quantity < itemslist[index].quantity) {
            SetQuantity(number => number + 1);
        } else {
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
        if (itemslist[previndex].quantity > 0) {
            setitemslist((previtemslist) =>
                previtemslist.map((item, itemindex) => {
                    if (itemindex == previndex) {
                        let num = item.quantity - Quantity;
                        SetQuantity(num);
                        return { ...item, quantity: (num) }  // new syntax
                    }
                    else {
                        return item;
                    }
                })
            )
        }
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
                <button id="sell" onClick={() => {
                    sell();
                }}>sell</button>
                <button id="cancel" onClick={() => { SetQuantity(1) }}>cancel</button>
            </div>
            <div id="itemlist">
                {
                    itemslist.map((item, index) => {
                        return <div className="item" onClick={() => {
                            SetItemNo(`Item No : ${index + 1}`);
                        }}>
                            {!selectedItem &&
                                <div className="con">
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
            <button id="stop" onClick={() => { SetItemNo(`Item No : `); SetQuantity(`Quantity : `) }}>stop</button>

            {/* POP-UP */}
            {selectedItem && (
                <div className="modaldiv">
                    <div className="overlay" onClick={(e) => setSelectedItem(null)}>
                        <div className="modal-content">
                            <h2>{selectedItem.name}</h2>
                            <p>Price: Rs.{selectedItem.price} <br />Quantity: {selectedItem.quantity}</p>
                        </div>
                    </div>
                </div>
            )}
            {/* Pop-Up ends here */}
        </div>
    );
}
export default InventoryPage;