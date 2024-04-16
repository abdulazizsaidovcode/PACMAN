import { useState } from "react";
import img from "../../../src/assets/img/img.jpg"
import { FaArrowLeft } from "react-icons/fa6";

const Sitebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-64" : "w-24 "} bg-dark-purple h-max p-5  pt-8 relative duration-300`}
            >
                <p

                    className={`w-7 h-7 flex justify-center items-center absolute cursor-pointer right-3 top-9 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >
                    <FaArrowLeft />
                </p>
                <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Designer
                    </h1>
                </div>
                <ul className={`pt-6 ${open ? "w-48" : "justify-center"}`}>
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md border  p-1 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "" : "mt-0 "} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <img src={img} className="rounded-full w-10 h-10" />
                            <span className={`${!open && "hidden"}  duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div>
        </div>
    );
};



export default Sitebar