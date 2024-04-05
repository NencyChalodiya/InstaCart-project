import React from "react";
import { storesData } from "../../../data/storeData";
const Offers = () => {
  return (
    <div className=" max-w-7xl mx-52">
      <div className="mb-8 ">
        <div className="grid grid-cols-2 gap-6 ">
          <a href="/" className="flex flex-col justify-between flex-nowrap">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div>
                  <div className="box-border flex justify-center w-14 h-14">
                    <img
                      className="border border-gray-300 rounded-lg "
                      src="https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/144/c42efdcb-47d4-4a4a-afb1-c1029be23af1.png"
                      alt="Total wine & more logo"
                    />
                  </div>
                </div>
                <div className="mb-1">
                  <h2>
                    <span className="bg-[#FFDC23] font-semibold text-2xl">
                      $10 off
                    </span>
                    <span className="text-2xl font-semibold">
                      Your first order
                    </span>
                  </h2>
                  <h3>
                    <span className="text-sm leading-5 text-gray-400">
                      At total wine & More -Expires Apr 10
                    </span>
                  </h3>
                </div>
              </div>
              <span className="relative">
                <button className="box-border relative h-8 px-4 m-1 bg-gray-300 border-2 min-w-14 rounded-2xl">
                  Shop
                </button>
              </span>
            </div>
            <img
              src="https://www.instacart.com/image-server/628x/www.instacart.com/assets/home/home_spotlight/updated_assets/Total-wine@3x-aea34a82b90d9037ae567c57667d5d81bdccfd8cbd2da5c664e23af5e6fde93c.png"
              alt="adv-img1"
            />
          </a>

          <a href="/" className="flex flex-col justify-between flex-nowrap">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div>
                  <div className="box-border flex justify-center w-14 h-14">
                    <img
                      className="border border-gray-300 rounded-lg "
                      src="https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/220/174c3400-41b8-4936-bddb-dae74743f810.png"
                      alt="Total wine & more logo"
                    />
                  </div>
                </div>
                <div className="mb-1">
                  <h2>
                    <span className="bg-[#FFDC23] font-semibold text-2xl">
                      $10 off
                    </span>
                    <span className="text-2xl font-semibold">
                      Your first order
                    </span>
                  </h2>
                  <h3>
                    <span className="text-sm leading-5 text-gray-400">
                      At BevMo! -Expires May 9
                    </span>
                  </h3>
                </div>
              </div>
              <span className="relative">
                <button className="box-border relative h-8 px-4 m-1 bg-gray-300 border-2 min-w-14 rounded-2xl">
                  Shop
                </button>
              </span>
            </div>
            <img
              src="https://www.instacart.com/image-server/628x/www.instacart.com/assets/home/home_spotlight/updated_assets/Bevmo@3x-d27b3190649f98b3e7948e3aad4463d427c2afafa0a3dc41debd1c228dca6383.png"
              alt="adv-img2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offers;