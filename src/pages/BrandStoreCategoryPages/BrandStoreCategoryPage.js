import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { brandStoresData } from "../../BrandStoreData/brandStoreData";

import Navbar from "../../components/LandingPageComponents/Navbar";

const BrandStoreCategoryPage = () => {
  const recipes = [
    "Recipes",
    "Snacks & Candy",
    "Meat & Seafood",
    "Produce",
    "Beverages",
    "Dairy & Eggs",
    "Frozen",
    "Wine",
    "Prepared Foods",
    "Bakery",
    "Household",
    "Deli",
    "Beer & Cider",
    "Liquor",
    "Canned Goods & Soups",
    "Floral",
    "Personal Care",
    "BreakFast",
    "Pets",
    "Dry Goods & Pasta",
  ];
  const [storeData, setstoreData] = useState(null);
  const [brandsStoreLogo, setbrandsStoreLogo] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    brandStoresData.map((d) => {
      if (d.id == params.storeId) {
        setstoreData(d);
        setbrandsStoreLogo(d);
      }
    });
  }, [params]);
  // console.log(storeData);
  return (
    <>
      <Navbar />
      <div className="h-full bg-white">
        <div
          className="fixed z-10 w-64 overflow-y-auto bg-white border-r-2 top-20"
          style={{ height: `calc(100% - 80px)` }}
        >
          <div className="sticky bg-white z-1 will-change-transform backdrop-blur-sm">
            <div className="flex flex-col items-center px-1 pt-6 pb-4 text-center flex-nowrap">
              {brandsStoreLogo ? (
                <div className="relative">
                  <a
                    href="/"
                    className="flex flex-col items-center no-underline"
                  >
                    <img
                      src={brandsStoreLogo.img}
                      className="w-auto h-20 border-2 rounded-full aspect-square"
                    />
                    <h2 className="mt-1 text-xl leading-5">
                      {brandsStoreLogo.title}
                    </h2>
                  </a>
                </div>
              ) : (
                <div>Loading...</div>
              )}

              <a
                href="/"
                className="relative flex items-center mt-1 text-sm leading-4 text-gray-400"
              >
                View pricing policy
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#C7C8CD"
                  xmlns="http://www.w3.org/2000/svg"
                  color="systemGrayscale30"
                  size="12"
                  class="e-ozd7xs"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                  ></path>
                </svg>
              </a>
              <button>
                <div className="flex items-center mt-1 cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#2B78C6"
                    xmlns="http://www.w3.org/2000/svg"
                    size="16"
                    color="brandHighlightRegular"
                    class="e-15ro776"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.534 4.201 12 2 9.466 4.201 6.122 3.91l-.756 3.27-2.877 1.73L3.8 12l-1.31 3.09 2.877 1.73.756 3.27 3.344-.291L12 22l2.534-2.201 3.344.291.756-3.27 2.876-1.73L20.2 12l1.31-3.09-2.876-1.73-.756-3.27zM11.1 15.604l5.847-5.858-1.416-1.412-4.474 4.482-2.373-2.234-1.37 1.456z"
                    ></path>
                  </svg>
                  <p className="text-sm leading-4 text-[#3C84CA]">
                    100% satisfaction guarantee
                  </p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="12"
                    data-testid="chevron-cta"
                    class="e-1hchw5q"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                    ></path>
                  </svg>
                </div>
              </button>
              <span>
                <a
                  href="/"
                  className="relative flex items-center mt-1 text-sm leading-4 text-gray-400"
                >
                  Earn with Safeway for U®
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#C7C8CD"
                    xmlns="http://www.w3.org/2000/svg"
                    color="systemGrayscale30"
                    size="12"
                    class="e-ozd7xs"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <hr />
          <ul className="w-full px-3 py-4 list-none">
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-1bvo66g"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 3H6l-4 8h2v10h5v-7h6v7h5V11h2zM8 7h8v3H8z"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Shop</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
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
                    <path d="M7.631 18.702a8 8 0 0 1-3.149-3.966l1.88-.684a6 6 0 1 0 1.395-6.295L10 10H4V4l2.343 2.343a8 8 0 1 1 1.288 12.359"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Buy it again</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
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
                    <path d="M10 6h10v2H10zM7 11H4v2h3zM20 11H10v2h10zM10 16h10v2H10zM7 16H4v2h3zM7 6H4v2h3z"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Lists</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="px-3 pt-4 pb-3">
            {recipes.map((recipe) => (
              <li>
                <a
                  href="/"
                  className="box-border relative flex items-center w-full pb-4 pl-3 pr-3 text-sm leading-5 text-gray-700 rounded-lg cursor-pointer flex-nowrap "
                >
                  <span>{recipe}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-64 ">
          <div className="h-14"></div>

          <div className="w-full py-6 ">
            <div className="w-full px-8 mb-6">
              <div className="flex items-center justify-between mt-6 ">
                <div>
                  <h2 className="flex mr-2">
                    <div className="text-3xl font-bold leading-5 ">
                      Best Sellers
                    </div>
                  </h2>
                </div>
                <div className="flex items-center justify-center align-baseline">
                  <div className="flex items-center justify-center">
                    <button className="flex w-full h-10 text-green-600 rounded-xl">
                      <span className="flex items-center gap-1 mt-2 ml-2 mr-2 overflow-hidden text-sm leading-5 text-ellipsis">
                        View all (80+)
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#242529"
                          xmlns="http://www.w3.org/2000/svg"
                          color="systemGrayscale80"
                          size="14"
                          class="e-jyj61s"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center ml-4 mr-2 min-h-20">
                    <div className="rounded-3xl">
                      <button className="relative flex items-center justify-center w-10 h-10 mr-2 text-gray-600 bg-gray-400 rounded-3xl ">
                        <span className="flex overflow-hidden text-ellipsis">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="#C7C8CD"
                            xmlns="http://www.w3.org/2000/svg"
                            color="systemGrayscale30"
                            class="e-1xkhv85"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="m11.48 11.999 4.208-4.208-1.584-1.584-5.792 5.792 5.792 5.792 1.584-1.584z"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="rounded-3xl">
                      <button className="relative flex items-center justify-center w-10 h-10 mr-2 text-gray-600 bg-gray-400 rounded-3xl ">
                        <span className="flex overflow-hidden text-ellipsis">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            color="systemGrayscale70"
                            class="e-1xkhv85"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {/* <div className="relative flex flex-row">
                  <div className="w-full ">
                    <ul className="w-full h-full min-h-[304px] grid grid-cols-3 justify-between mt-2 ">
                      <div>
                        {storeData ? (
                          <li>
                            <div className="h-full">
                              <div>
                                {storeData?.items?.map((item) => {
                                  return (
                                    <div className="relative h-full rounded-xl">
                                      <a className="relative flex flex-col h-full opacity-100">
                                        <div className="relative">
                                          <div className="mb-2 ">
                                            <div
                                              className="relative "
                                              style={{ height: `calc(100%)` }}
                                            >
                                              <div className="absolute flex items-center justify-center w-full h-full top-24 right-36 ">
                                                <div> {item.itemsImg}</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="box-border">
                                            <div>
                                              <div className="py-[1px] px-1">
                                                <span className="h-[1px] w-[1px] m-[-1px] absolute  top-44 left-4">
                                                  {item.itemWeight}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute text-sm leading-5 top-48 left-4">
                                            <span className="text-sm leading-5 ">
                                              {item.itemDesc}
                                            </span>
                                          </div>
                                          <div className="absolute flex top-52 left-4 ">
                                            <div className="text-sm leading-5 ">
                                              {item.itemsPrice}
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </li>
                        ) : (
                          <div>Loading</div>
                        )}
                        
                      </div>
                    </ul>
                  </div>
                </div> */}
                <div className="relative flex flex-row">
                  <div className="w-full">
                    <ul className="w-full h-full min-h-[304px] grid grid-cols-8 gap-4 justify-between mt-2">
                      {storeData ? (
                        storeData.items.map((item, index) => (
                          <li key={index} className="flex flex-col">
                            <div className="relative overflow-hidden rounded-xl">
                              <div className="w-full h-[200px] object-cover">
                                {" "}
                                {item.itemsImg}
                              </div>
                            </div>
                            <div className="px-2 mt-2">
                              <div className="font-bold">{item.itemName}</div>
                              <div>{item.itemWeight}</div>
                              <div>{item.itemDesc}</div>
                              <div>{item.itemsPrice}</div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <div>Loading...</div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandStoreCategoryPage;
