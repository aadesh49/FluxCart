import './explore.css';

const Explore = () => {
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
                <div className="customer-form-" style={{height: '15%'}}>
                    Customer form
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-items-container" style={{height: '55%', overflowY: 'auto'}}>
                    Cart items
                </div>
                <div className="cart-summary container" style={{height: '30%'}}>
                    Cart summary
                </div>
            </div>
        </div>
    )
}

export default Explore;