import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";


// this sidebar will display the all major cryptocoins list 
 
export const SideBar = () => {
  const { cryptoData, currency } = useContext(CryptoContext);


  return (
    <div className="bg-white backdrop-blur-md border border-gray-100 rounded-lg shadow-lg">
      <div data-testid="Sidebar_1">
        {/* heading */}
        <p className="text-black  text-center  mt-5 pb-10 font-semibold font-sans">
          Cryptocurrency By Market Cap
        </p>
      </div>

      
      <div className="overflow-x-auto max-h-screen no-scrollbar  ">
        {cryptoData ? (
          <table className="w-full  table-auto  ">
            <tbody>
              {cryptoData.map((cryptoData) => {
                return (
                  <div
                    key={cryptoData.id}
                    className="text-center text-lg border-b border-gray-100  hover:bg-blue-100 hover:rounded-lg "
                  >
                    <div className="flex flex-row pl-4 mt-2 text-[13px] font-semibold text-black">
                     
                      {/* logo of crypto coin */}
                      <img
                        src={cryptoData.image}
                        alt="crypto pic"
                        className="h-5 w-5 rounded-full mx-2"
                      />
                     
                      {/* cryptocoins name */}
                      <h6 className="text-lg pb-2 font-medium">
                        {cryptoData.name}
                      </h6>
                    </div>

                    <div className="flex flex-row justify-end mr-2">
                      <div
                        className={`text-[12px] font-semibold ${
                          cryptoData.market_cap_change_percentage_24h > 0
                            ? "text-green-500 "
                            : "text-orange-400 "
                        }`}
                      >
                        <i
                          className={`mr-1 text-xs ${
                            cryptoData.market_cap_change_percentage_24h > 0
                              ? "fa-solid fa-caret-up"
                              : "fa-solid fa-caret-down"
                          }`}
                        ></i>
                        <span>
                          {parseFloat(
                            cryptoData.market_cap_change_percentage_24h
                          ).toFixed(2)}{" "}
                          %
                        </span>
                      </div>
                    </div>

                    <div className="-ml-9">
                      <span className="text-[11px] -mt-5 ml-3  text-gray-500 font-semibold flex pl-12 mx-4 mb-4 truncate">
                        Mkt.Cap{"  "}
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: currency,
                        }).format(cryptoData.market_cap)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};


export default SideBar;
