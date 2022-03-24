import Nav from "./Nav"
import Main from "./Main"
import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
    const location=useLocation()

    return(
        <>
        <Nav/>
        {console.log(location.pathname=="/blogger/")}
        {location.pathname=="/blogger/"?

        <Main/>:<Outlet/>}
        </>
    )
}

export default Layout