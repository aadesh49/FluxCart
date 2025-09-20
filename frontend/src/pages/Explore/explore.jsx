import { useContext } from 'react';
import './explore.css';
import { AppContext } from '../../context/AppContext';

const Explore = () => {
    const {categories} = useContext(AppContext);
    console.log(categories);
    
    return (
        <div className="explore-containter text-light">
            <div className="left-column">
                <div className="first-row" style={{overflowY: 'auto'}}>
                    Categories
                </div>
                <hr className="horizontail-line" />
                <div className="second-row" style={{overflowY: 'auto'}}>
                    Items
                </div>
            </div>
            <div className="right-column d-flex flex-column">
                <div className="customer-form-container" style={{height: '15%'}}>
                    Customer form
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-items-container" style={{height: '55%', overflowY: 'auto'}}>
                    Cart items
                </div>
                <div className="cart-summary-container" style={{height: '30%'}}>
                    Cart summary
                </div>
            </div>
        </div>
    )
}

export default Explore;