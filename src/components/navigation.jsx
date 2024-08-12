import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React,{useEffect,useState} from 'react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
// const navigation = [  { "name": "Dashboard","to":"/" },{ "name": "Analytics","to":"/Analytics/Assignment"},
//   { "name": "Penalty Deshbord", "to":"/penalty"},
//   { "name": "Assets Master","to":"/Assetsmaster"},
//   { "name": 'It Admin',"to":"/admin"},
//   { "name": 'Merit Triggers',"to":"/meritalerts"},
//   { "name": "Call Recordings","to":"/callrecording"},
//   { "name": "Reports","to":"/re"}];


// const menu=[
//   {menuname:'Analytics',items:[{name:'Assignment',href:'Analytics/Assignment'},{name:'VNA' ,href:'Analytics/VNA'},{name:'VTR',href:'Analytics/VTR'},{name:'VB',href:'Analytics/VBdata'},{name:'Misscall' ,href:'Analytics/MISSCALL'},{name:'PILOTAPP' ,href:'Analytics/PILOTAPP'},{name:'Callidwise',href:'Analytics/Callidwise'},{name:'Callid_wise_latlong',href:'Analytics/Callid_wise_latlong'},{name:'Vtr_with_last_case_wise',href:'Analytics/Vtr_with_last_case_wise'}]}
// ]
const userNavigation = [
  { name: 'Your Profile', href: '#'},
  { name: 'Settings', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigationbar() {
  const text=localStorage.getItem('permission');
  //  const navigad=JSON.parse(text);
  //  console.log(navigad);
 // const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
  const navigation = JSON.parse(text);
  // console.log(obj);
  // console.log(navigad.name+" this working or not");
  

  const navigate = useNavigate();
  function LogoutSubmit(){
 
    localStorage.removeItem('user')
    localStorage.removeItem('pass');
    localStorage.removeItem('roll');
    localStorage.removeItem('islogin');
      // <Navigate to="/Login"/>;
  
      window.location.replace("/Login");
      navigate("/Login")
  
};

  return (
    <>
 
      <div className="fixed w-full left-64 top-0">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                      {/* {menu.map((items)=>(
                          <Menu as="div" className="relative ml-3 text-white"><div> <MenuButton className="text-white"><div>{items.menuname}</div></MenuButton></div>
                          
                          <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >

                          {items.items.map((itr)=>(
                      
                            <MenuItem key={itr.name}>
                              {({focus})=>(

                                      <Link
                                      to={itr.href}
                                      className={classNames(
                                        focus ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                      )}
                                    >{itr.name}</Link>
                                    
                              )}


                            </MenuItem>
                          ))}

                          </MenuItems>
                          
                          </Menu>
                        ))} */}
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                          
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </MenuButton>
                        </div>
                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                              {({ focus }) => (
                                <a
                                  href={item.href}
                                  onClick={item.func}
                                  className={classNames(
                                    focus ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </MenuItem>
                          ))}
                              <MenuItem key="Sign out">
                              {({ focus }) => (
                                <a
                                  onClick={LogoutSubmit}
                                  className={classNames(
                                    focus ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                  )}
                                >
                                 Sign out
                                </a>
                              )}
                            </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}


                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>



  
    </>
    
  );
}


