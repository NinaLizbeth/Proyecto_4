import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NosotrosPage } from "../pages/NosotrosPage"
import { MenuPage } from "../pages/MenuPage"
import { GaleriaPage } from "../pages/GaleriaPage"
import { ReservaPage } from "../pages/ReservaPage"
import {LoginPage} from "../pages/LoginPage"
import{Blog} from "../pages/Blog"
import { AdminPages } from "../pages/AdminPages"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { useState } from "react"



 export const MainRouter = () => {
 const [user, setUser] = useState(null)

return(
 <>
<Routes>
<Route path="/" element={<HomePage/>}/> 
<Route path="/nosotros" element={<NosotrosPage/>}/> 
<Route path="/carta" element={<MenuPage/>}/> 
<Route path="/galeria" element={<GaleriaPage/>}/> 
<Route path="/login" element={<LoginPage setLogin={setUser}/>}/> 
<Route path="/reserva" element={<ReservaPage/>}/> 
<Route path="/blog" element={<Blog/>}/>

{/* ruta protegida */}
<Route element={<ProtectedRoutes isAllowed={user}/>}> 
<Route path="/admin" element={<AdminPages/>}/>
</Route>


</Routes>
 </>
) }