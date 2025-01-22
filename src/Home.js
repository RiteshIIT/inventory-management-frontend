import './home.css'
import Saleslist from './saleslist';
const Homepage = () => {
    var productlist=[
        {
            date: "13th Jan",
            day: "monday",
            products: {
                maggi: 2,
                soap: 3,
                copy: 1,
            },
        },
        {
            date: "12th Jan",
            day: "sunday",
            products: {
                maggi: 3,
                soap: 1,
                copy: 2,
            },
        },
        {
            date: "14th Jan",
            day: "tuesday",
            products: {
                maggi: 5,
                soap: 2,
                copy: 1,
            },
        },
    ];
    return ( 
         <div id="homepage">
            <div id="homepagehead">
                Welcome, user
            </div>
            <div id="sidebar">
                <div className="sidebaritem" id="newprod">New product <div id="plus">  +</div>
                </div>
                <div className="sidebaritem">Analytics</div>
                <div className="sidebaritem">History</div>
                <div className="sidebaritem">Feedback</div>
                <div className="sidebaritem">settings</div>
            </div>
            
            <div id="recentsales">
                <div id="recentsaleshead">
                    Recent sales
                </div>
                <Saleslist productlist={productlist}></Saleslist>
            </div>
            <button id="startbutton">start</button>
         </div>
     );
}
 
export default Homepage;