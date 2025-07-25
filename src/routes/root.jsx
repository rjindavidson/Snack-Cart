import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar"

export const Root = () => {

    return (
        <div>
            <Navbar numItems={1} />
            <Outlet />
        </div>
    )
}

export default Root;