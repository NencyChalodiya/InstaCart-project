import { Drawer } from "antd";
import React from "react";

const StoreSidebar = ({ open, onCancel }) => {
  return (
    <>
      <Drawer placement="left" visible={open} onClose={onCancel}>
        <nav>
          <ul className="list-none">
            <div className="relative mb-3">
              <div className="pl-3 pr-3 ">
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl font-semibold leading-7">Nency C.</h1>

                  <img
                    src="https://www.instacart.com/assets/express/profile_menu/peach-395cdd46a3b267de59e3c744d42cea40e4aba9f33d58482e61e9db30e33bc06e.png"
                    alt="apple-logo"
                    className="h-12 w-12 rounded-[50%] border-2 max-w-full "
                  />
                </div>
                <p className="inline-block mb-4 text-xs leading-5">
                  Instacart customer since February 2024
                </p>
                <div className="mb-4">
                  <div>
                    <div className="mb-2 text-xl left-5 text-[#750246] font-semibold">
                      Try Instacart+
                    </div>
                    <ul className="flex items-start justify-between py-2">
                      <li className="flex flex-col items-center flex-grow flex-shrink mx-1 text-center">
                        <div className="h-7 w-7">
                          <img
                            src="https://www.instacart.com/image-server/32x/www.instacart.com/assets/express/badges/instacartplus-delivery-white-e4fea40f0b0b6c1af1b041ca776e0fea2fbc296e048de9c3e41cb07980cfa207.png"
                            alt="truck-img"
                          />
                        </div>
                        <div className="mt-2">
                          {" "}
                          <span className="whitespace-pre-wrap text-wrap">
                            <span className="text-xs leading-3">
                              $0 delivery fee on orders $35+
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="flex flex-col items-center flex-grow flex-shrink mx-1 text-center">
                        <div className="h-7 w-7">
                          <img
                            src="https://www.instacart.com/image-server/32x/www.instacart.com/assets/express/badges/instacartplus-credit-back-white-bac602898aeeebc277455592648a80d471b076df1c991d6e0efc0869c7a0a7f1.png"
                            alt="truck-img"
                          />
                        </div>
                        <div className="mt-2">
                          {" "}
                          <span className="whitespace-pre-wrap text-wrap">
                            <span className="text-xs leading-3">
                              5% credit back on pickup
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="flex flex-col items-center flex-grow flex-shrink mx-1 text-center">
                        <div className="h-7 w-7">
                          <img
                            src="https://www.instacart.com/image-server/32x/www.instacart.com/assets/express/badges/instacartplus-fees-white-721e7aa582bdb3f1b7b0a5db286cc2d48c2e417d7e2b9a1e10e1382e363086ca.png"
                            alt="truck-img"
                          />
                        </div>
                        <div className="mt-2">
                          {" "}
                          <span className="whitespace-pre-wrap text-wrap">
                            <span className="text-xs leading-3">
                              Lower service fees
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul className="list-none">
                  <li className="mb-3">
                    <a
                      href="/"
                      className="block p-4 rounded-xl relative bg-[#750246] "
                    >
                      <p className="text-xl font-bold text-white">
                        Start your free trial today!
                      </p>
                      <p className="mt-1 text-xs leading-4 text-white">
                        You can cancel at any time
                      </p>
                      <div className="items-center justify-between block mt-3 ">
                        <span className="text-sm leading-4 py-1 px-2 rounded-xl mr-1 mt-3 bg-white text-[#750246] ">
                          Try Instacart+ for free
                        </span>
                        <img
                          src="https://www.instacart.com/image-server/88x15/www.instacart.com/assets/express/account/instacartplus-logo-3c73d959a972a32a13c7cb1faf3ad0618d6cf08c0059c981bacab8c6f3ea8ea2.png"
                          alt="instacart+-logo"
                          className="mt-3"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb-3 pl-3 pr-3 ">
              <hr />
              <li>
                <a
                  href="/"
                  className="box-border relative flex items-center w-full pl-3 pr-3 text-white bg-gray-800 rounded-lg cursor-pointer flex-nowrap"
                >
                  <span className="flex items-center h-10 ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      size="24"
                      class="e-1bvo66g"
                      aria-hidden="true"
                    >
                      <path d="M12 2 2 10v11h7v-5a3 3 0 1 1 6 0v5h7V10z"></path>
                    </svg>
                  </span>
                  <span className="pt-2 pb-2 ml-8 text-white">Stores</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="box-border relative flex items-center w-full pl-3 pr-3 text-white bg-gray-800 rounded-lg cursor-pointer flex-nowrap"
                >
                  <span className="flex items-center h-10 ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      size="24"
                      class="e-6su6fj"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 3h14v18h-1l-2-2-2 2-2-2-2 2-2-2-2 2H5zm3 8h8v2H8zm8-5H8v2h8z"
                      ></path>
                    </svg>
                  </span>
                  <span className="pt-2 pb-2 ml-8 text-white">Your orders</span>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default StoreSidebar;
