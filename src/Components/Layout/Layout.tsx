import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import './Layout.scss'

function Layout() {
    return (
        <>
            <NavBar/>
            <section>
                <Outlet/>
            </section>
        </>
    )
}

export default Layout;