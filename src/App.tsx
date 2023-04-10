import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Signin from './pages/sign/signin';
import { addProduct, getAll, removeProduct, updateProduct } from "./api/product";
import RootLayout from "./component/rootLayout";
import AdminLayout from "./component/adminLayout";
import { IProduct } from './interfaces/products';
import { ICategory } from './interfaces/categories';
import { addCategory, getAllCategory, removeCategory, updateCategory } from './api/category';
import CategoryPage from './pages/admin/category/CategoryPage';
import AddCategory from './pages/admin/category/AddCategory';
import UpdateCategory from './pages/admin/category/updateCategory';
import { signUp } from './api/auth';
import { IUser } from './interfaces/user';
import SignUp from './pages/sign/signup';
import "./App.css"
import CategoryDetail from './pages/CategoryDetail';
import ProductsPage from './pages/Products';
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAll();
      setProducts(data.docs);
    })()
  }, [])

  const OnhandleRemove = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeProduct(id).then(() => {
        const newProducts = products.filter((product) => product._id != id);
        setProducts(newProducts)
      })

    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => alert("Thêm sản phẩm thành công"));
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProducts(products.map(item => item._id == product._id ? product : item))).then(() => alert("Cập nhật sản phẩm thành công"));
  }
  // Category
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      setCategories(data);
    })()
  }, [])
  const OnhandleRemoveCate = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeCategory(id).then(() => {
        const newCategories = categories.filter((category) => category._id != id);
        setCategories(newCategories);
      })
    }
  }
  const onHandleAddCate = (category: ICategory) => {
    addCategory(category).then(() => alert("Thêm danh mục thành công"));
  }
  const onHandleUpdateCate = (category: ICategory) => {
    updateCategory(category).then(() => setCategories(categories.map(item => item._id == category._id ? category : item))).then(() => alert("Cập nhật danh mục thành công"));
  }
  return (
    <div className="App" style={{ width: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" index element={<HomePage categories={categories} products={products} />} />
            <Route path="products" element={<ProductsPage products={products} />} />
            <Route path="products/:id" element={<ProductDetail products={products} />} />
            <Route path="categories/:id" element={<CategoryDetail categories={categories} products={products} />} />
            <Route path="contact" element="Contact Page" />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManagementPage products={products} onRemove={OnhandleRemove} />} />
              <Route path='add' element={<AddProduct categories={categories} products={products} onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProduct categories={categories} products={products} onUpdate={onHandleUpdate} />} />
            </Route>
            <Route path='categories'>
              <Route index element={<CategoryPage categories={categories} onRemoveCate={OnhandleRemoveCate} />} />
              <Route path='add' element={<AddCategory categories={categories} onAddCate={onHandleAddCate} />} />
              <Route path=':id/update' element={<UpdateCategory categories={categories} onUpdateCate={onHandleUpdateCate} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
