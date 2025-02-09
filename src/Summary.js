import './Summary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Summary = () => {

    return (
        <div className="summary">
            <div className="nav">
                <div className="heading-summary">
                    <h2>Summary</h2>
                </div>
                <Link to='/home'>
                <button>Continue</button>
                </Link>
            </div>
            <div className="container">
                <Link to = '/inventory-page'>
                <button className="back">
                    <FontAwesomeIcon className="ic" icon={faLessThan} />Back
                </button>
                </Link>
                <div className="table">
                    <div className="headings">
                        <p>S.No</p>
                        <p>Item No.</p>
                        <p>Quantity</p>
                        <p>Amount</p>
                    </div>
                    <div className="columns">   
                            <p>
                                
                                <br />
                                
                            </p>
                            <p class='col2'>
                                {/* 45
                                <br />
                                46 */}
                            </p>                       
                            <p>
                                {/* 10
                                <br />5 */}
                            </p>                                             
                            <p>
                                {/* 120
                                <br />150 */}
                            </p>
                    </div>
                </div>
                {/* <table>
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Item no.</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>40</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>42</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table> */}

                <div className="total">
                    <p>Total: </p>
                    {/* <p>270</p> */}
                </div>

            </div>

        </div>
    );
}

export default Summary;