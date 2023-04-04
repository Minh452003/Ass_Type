import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import { addProduct, getAll, removeProduct, updateProduct } from "./api/product";
import RootLayout from "./component/rootLayout";
import AdminLayout from "./component/adminLayout";
import { IProduct } from './interfaces/products';
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAll().then(({ data }) => setProducts(data));
  }, [])

  const OnhandleRemove = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeProduct(id).then(() => {
        const newProducts = products.filter((product) => product.id != id);
        setProducts(newProducts)
      })

    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => alert("Thêm sản phẩm thành công"));
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProducts(products.map(item => item.id == product.id ? product : item))).then(() => alert("Cập nhật sản phẩm thành công"));
  }

  return (
    <div className="App" style={{ width: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="contact" element="Contact Page" />
            {/* <Route path="signin" element={<Signin />} /> */}
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManagementPage products={products} onRemove={OnhandleRemove} />} />
              <Route path='add' element={<AddProduct products={products} onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
