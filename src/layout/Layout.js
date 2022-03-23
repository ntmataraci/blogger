import Nav from "./Nav"
import Main from "./Main"
import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
    const location=useLocation()

    return(
        <>
        <Nav/>
        {location.pathname=="/"?
        <Main/>:<Outlet/>}
        </>
    )
}

export default Layout