import React from "react";
import { elements } from "./Elements";
import { Link } from "react-router-dom";
const RightMenu = ({ openRightMenu }) => {
    return (
        <div className='flex relative'>
            <div
                className={` ${
                    openRightMenu
                        ? "fixed top-[70px] flex xl:hidden"
                        : "sticky top-0 hidden xl:hidden"
                }  right-0 bg-dark1 shadow1  h-screen  min-w-[208px] flex-col items-center justify-center`}
            >
                <div className='flex flex-col space-y-10'>
                    {elements.map((menu) => {
                        return (
                            <Link
                                key={menu.id}
                                to={`/${menu.route}`}
                                className=' flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                            >
                                <p className='text-white'>{menu.name}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RightMenu;
