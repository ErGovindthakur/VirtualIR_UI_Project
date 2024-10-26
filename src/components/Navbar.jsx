import React, { useState } from "react";
import { Menu,X } from "lucide-react";
import logo from '../assets/logo.png'
import { navItems } from "../constants";
const Navbar = () => {
     const [Drawer, setDrawer] = useState(false)

     const toggleDrawer = () => {
          setDrawer(!Drawer)
     }
  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-14 mx-auto  relative text-sm">
{/* This is our main flex container  */}
          <div className="flex justify-between items-center">

            <div className="flex items-center flex-shrink-0">
               <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
               <span className="text-xl tracking-tight">Virtual Reality</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
            {
               navItems.map((items,index) =>(
                    <li key={index}>
                         <a href={items.href}>{items.label}</a>
                    </li>
               ))
            }
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
               <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
               <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an Account</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleDrawer}>
            {Drawer ? <X />: <Menu />}
            </button>
            </div>
          </div>
          {/* End of our main flex container  */}

          {Drawer && (
               <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden transition-all">
                    <ul>
                         {navItems.map((items,index) => (
                              <li key={index} className="py-3">
                                   <a href={items.href}>{items.label}</a>
                              </li>
                         ))}
                    </ul>
                    <div className="flex space-x-5">
                         <a href="#" className="py-2 px-3 border border-white rounded-md">Sign In</a>
                         <a href="#" className="py-2 px-3 border border-white rounded-md bg-gradient-to-r from-orange-500 to-orange-900 ">Create an Account</a>
                    </div>
               </div>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
