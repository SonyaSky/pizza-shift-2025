import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// import { RootPage } from './pages/root'
// import { ROUTES } from './utils/constants/router'

// const router = createBrowserRouter([
//   {
//     path: ROUTES.ROOT,
//     element: <RootPage />,
//   },
// ])

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// })

// export function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router} />
//     </QueryClientProvider>
//   )
// }

import PizzaImage  from './icons/pizza.png'; 
import UserImage  from './icons/user.png'; 
import TimerImage  from './icons/timer.png'; 
import CartImage  from './icons/shopping-cart.png'; 
import PizzaComponent from './components/PizzaComponent';

export function App() {
  return (
    <>
    <nav className="navbar bg-body-tertiary ">
      <div className="container-fluid">
        <div className="row with-margin-left">
          <div className="col-auto" id="name">
              <div className="row">
                  <div className="col fs-5 brand">
                      ШИФТ
                  </div>
              </div>
              <div className="row">
                  <div className="col fs-5 brand">
                      PIZZA
                  </div>
              </div>
          </div>
          <div className="col-auto d-flex justify-content-center align-items-center">
              <img src={PizzaImage} alt="Logo" width="40" height="40" className="pic d-inline-block"></img>
          </div>
      </div>
      <div>
        {/* <div className='row'>
          <img src={UserImage} alt="Logo" width="25" height="25" className="d-inline-block col pic text-align-center" id="pizza"></img>
          <p className='col fs-5'>Профиль</p>
        </div> */}
        <ul className='header-nav'>
          <li className='header-nav-item'>
          <a className="nav-item-link" href="#">
          <img className="nav-item-icon" src={UserImage} width="25" height="25" title="Профиль"></img>
          <span className="nav-item-title fs-5">Профиль</span></a>
          </li>
        </ul>
      </div>
      
        
      </div>
    </nav>
    <div className='pizzas-div row '>
    <div className='pizzas-div row'>
      <PizzaComponent 
        title="Пепперони" 
        description="Шифт пицца с пепперони, колбасой, зеленым перцем, луком, оливками и шампиньонами." 
        price="299" 
        imageUrl="https://shift-intensive.ru/api/static/images/pizza/1.webp" 
      />
      <PizzaComponent 
        title="Маргарита" 
        description="Классическая пицца с томатным соусом и моцареллой." 
        price="249" 
        imageUrl="https://shift-intensive.ru/api/static/images/pizza/2.webp" 
      />
      <PizzaComponent 
        title="Маргарита" 
        description="Классическая пицца с томатным соусом и моцареллой." 
        price="249" 
        imageUrl="https://shift-intensive.ru/api/static/images/pizza/2.webp" 
      />
      <PizzaComponent 
        title="Маргарита" 
        description="Классическая пицца с томатным соусом и моцареллой." 
        price="249" 
        imageUrl="https://shift-intensive.ru/api/static/images/pizza/2.webp" 
      />
    </div>
    </div>
    </>
  )
}
