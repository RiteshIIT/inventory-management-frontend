const Saleslist = ({productlist}) => {
    return (  
       <div id="saleslist">
        {
            productlist.map((product)=>{
           return <div className="salesbox">{product.date}, {product.day}</div>
            })
        }
       </div>
    );
}
 
export default Saleslist;