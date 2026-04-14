import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/NAvbar';
import Home from './pages/Home';
import Products from './pages/products';
import Counter from './pages/useState';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductHighlights from './pages/ProductHighlights';
import RatingReviews from './pages/RatingReviews';
import QuestionAnswers from './pages/QuestionAnswers';
import Employees from './pages/Employees';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Todos from './pages/Todos';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="product-details/:productId" element={<ProductDetails/>}>
          <Route path="" element={<ProductHighlights/>}></Route>
          <Route path="rating-reviews" element={<RatingReviews/>}></Route>
          <Route path="question-answers" element={<QuestionAnswers/>}></Route>
        </Route>
        <Route path="employees" element={<Employees/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="todos" element={<Todos/>}></Route>
      </Routes>
      {/* <Home />
      <Products /> */}
      {/* <Cart /> */}
      <Footer></Footer>

      {/* i have created a useState Counter for understanding purposre */}
      <Counter/>
    </div>
  )
}

export default App
