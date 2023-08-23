import Index from './Pages/Index/Index'
import Login from './Pages/Login/Login'
import Gallery from './Pages/Gallery/Gallery'
import Artist from './Pages/Artist/Artist'
import AboutUs from './Pages/AboutUs/AboutUs'
import Register from './Pages/Register/Register'


const routes = [
    {path : '/', element: <Index />},
    {path : '/login', element: <Login />},
    {path : '/register', element: <Register/>},
    {path : '/gallery', element: <Gallery />},
    {path : '/artist', element: <Artist />},
    {path : '/aboutUs', element: <AboutUs />},
]

export default routes