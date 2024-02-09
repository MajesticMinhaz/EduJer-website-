import { useState } from "react";
import RightMenu from "./Components/RightMenu/RightMenu";
import TopBar from "./Components/TopBar/TopBar";
import { Outlet } from "react-router-dom";

function App() {
    const [openLeftMenu, setOpenLeftMenu] = useState(false);
    const [openRightMenu, setOpenRightMenu] = useState(false);
    const handleLeftMenu = () => {
        setOpenLeftMenu((prevState) => !prevState);
    };
    const handleRightMenu = () => {
        setOpenRightMenu((prevState) => !prevState);
    };
    const handleAllMenu = () => {
        openLeftMenu && setOpenLeftMenu(false);
        openRightMenu && setOpenRightMenu(false);
    };
    return (
        <div
            className='flex justify-between  gap-0 lg:gap-7'
            onClick={() => handleAllMenu()}
        >
            <TopBar
                handleRightMenu={() => handleRightMenu()}
                handleLeftMenu={() => handleLeftMenu()}
                openLeftMenu={openLeftMenu}
                openRightMenu={openRightMenu}
            />
            <Outlet />
            <RightMenu openRightMenu={openRightMenu} />
        </div>
    );
}

export default App;
