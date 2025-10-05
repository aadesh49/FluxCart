import { assets } from "../../assets/assests.js";
import { useContext, useState } from 'react';
import { addCategory } from "../../service/CategoryService";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";

const CategoryForm = () => {

    const {categories, setCategories} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        description: '',
        bgColor: '#2c2c2c'
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({
            ...data,
            [name]: value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await addCategory(data);
            //add new category to the list
            if (response.status === 201) {
                setCategories([...categories, response.data]);
                toast.success('Category added');
            }
            setData({
                name: '',
                description: '',
                bgColor: '#2c2c2c'
            });
            setImage(null);
        } catch (error) {
            console.log(error); 
            toast.error('Failed to add category');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={48} />
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="form-control"
                                    hidden
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Category Name"
                                    onChange={onChangeHandler}
                                    value={data.name}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    rows="5"
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    placeholder="About the category..."
                                    onChange={onChangeHandler}
                                    value={data.description}>
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bgColor" className="form-label">Background Color</label>
                                <br />
                                <input
                                    type="color"
                                    name="bgColor"
                                    id="bgColor"
                                    onChange={onChangeHandler}
                                    value={data.bgColor} />
                            </div>
                            <button type="submit"
                                className="btn btn-warning w-100"
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Save"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryForm;