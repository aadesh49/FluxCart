import CategoryForm from '../../components/CategoryForm/categoryForm';
import CategoryList from '../../components/CategoryList/categoryList';
import './manageCategories.css'

const ManageCategories = () => {
    return (
        <div className="category-container text-light">
            <div className="left-column">
                <CategoryForm />
            </div>
            <div className="right-column">
                <CategoryList />
            </div>
        </div>
    )
}

export default ManageCategories;