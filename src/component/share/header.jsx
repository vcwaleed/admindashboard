import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi";
import { CiChat1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function header() {
  return (
    <div className="bg-white h-14 p-4 flex justify-between items-center border-b border-gray-200">
      {/* Search Bar */}
      <div className="relative">
        <IoMdSearch fontSize={25} className="text-gray-400 absolute top-1 left-2" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none border h-9 w-[24rem] border-gray-300 rounded-sm pl-10 pr-2 py-1"
        />
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4 items-center">
        {/* Chat Icon with Popover */}
        <Popover>
          <PopoverButton className="focus:outline-none">
            <CiChat1
              data-tip
              data-for="chatTooltip"
              fontSize={28}
              className="hover:bg-gray-300 rounded-lg cursor-pointer"
            />
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute z-10  transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg text-sm px-3  "
          >
            <div className="p-1">
              <Link to="/product" className="block rounded-lg py-2 px-3 transition hover:bg-gray-100  underline">
                <span className="font-semibold text-black">Message</span>
              </Link>
              <p className="text-black/50">
                  Starting we work we develop a  website admin dashboard for the user.
                </p>
            </div>
          </PopoverPanel>
        </Popover>

        {/* Notification Icon with Popover */}
        <Popover>
          <PopoverButton className="focus:outline-none">
            <HiOutlineBell
              data-tip
              data-for="notificationTooltip"
              fontSize={28}
              className="hover:bg-gray-300 rounded-lg cursor-pointer"
            />
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute z-10  transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="p-3">
              <Link to="/notifications" className="block rounded-lg py-2 px-3 transition hover:bg-gray-100">
                <span className="font-semibold text-black">Notification</span>
                <p className="text-black/50">
                  You have new notifications. Check your messages and updates.
                </p>
              </Link>
            </div>
          </PopoverPanel>
        </Popover>

        {/* User Menu */}
        <Menu as="div" className="relative inline-block text-left hover:bg-gray-300 rounded-3xl px-2 py-1">
          <MenuButton className="focus:outline-none">
            <div className="flex items-center space-x-2 cursor-pointer">
      
            <FaRegUser fontSize={22} />
            </div>
          </MenuButton>
          <MenuItems className="absolute z-10 right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                  >
                    Profile
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/logout"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                  >
                    Logout
                  </Link>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default header;
