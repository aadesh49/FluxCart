
const ItemForm = () => {
    return (
        <div className="item-form-container" style={{height: '100vh', overflowY: 'auto', overflowX: 'hidden'}}>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img src="https://placehold.co/48x48" alt="" width={48} />
                                    </label>
                                    <input type="file" name="image" id="image" className="form-control" hidden />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Item Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select name="category" id="category" className="form-control">
                                        <option value="">----Select the Category----</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className="form-label">Price</label>
                                    <br />
                                    <input type="number" name="price" id="price" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <textarea rows={5} name="desc" id="desc" className="form-control" placeholder="About the item..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning w-100">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemForm;