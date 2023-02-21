import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCoinList } from "../redux/action/action";

//exchange coins component

export const ExchangeCoins = () => {
  const dispatch = useDispatch();
  const exchangeData = useSelector((state) => state.exchange);
  // console.log('coin', exchangeData);
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState(1);
  const [units, setUnits] = useState([]);
  const [value1, setvalue1] = useState(1);
  const [value2, setvalue2] = useState(1);
  const coin = exchangeData.coinList.rates;

  //useEffect Hook allows to perform side effects in this components

  useEffect(() => {
    if (exchangeData.coinList.length === 0) {
      dispatch(fetchCoinList());
    }
  }, []);

//   this convert function converts the national currencies to cryptocurrencies or vice versa
  const convert = () => {
    const unit = Object.values(coin).find((unit) => {
      return unit.value == value2;
    });

    // console.log('unit',unit,'value2',value2)

    console.log("value", Object.values(coin));
    setUnits(unit.unit);
    let result = (value2 / value1) * text1;
    settext2(result);
  };

  return (
    <div className="px-4 py-4 font-body bg-white  backdrop-blur-md rounded-lg border border-gray-200 shadow-lg items-center">
      {/* heading */}

      <h4 className="text-lg text-black font-semibold font-sans  ml-8">
        Exchange Coins
      </h4>
      <div className="flex flex-row mt-8">
        <div className="pr-4 items-center">
          <div className="flex my-1 content-center items-center py-1 px-2 lg:ml-3">
            <p className="text-red-500 font-semibold mr-3 font-sans text-lg">
              Sell
            </p>

            {/* Dropdown menu for cryptocurrency */}

            <select
              onChange={(e) => setvalue1(e.target.value)}
              className="lg:pl-8 w-[130px] h-[2rem] rounded-lg p-1 text-black bg-gray-400 bg-opacity-30 backdrop-blur-md focus:ring-2 focus:outline-none px-5 inline-flex cursor-pointer"
            >
              {coin &&
                Object.values(coin).map((d, k) => (
                  <option
                    key={k}
                    value={d.value}
                    className="text-black bg-white"
                  >
                    {d.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex my-2 content-center items-center py-1 px-2 lg:ml-3">
            <p className="text-green-500 font-semibold font-sans mr-3 text-lg">
              Buy
            </p>

            {/* Dropdown menu for cryptocurrency */}

            <select
              onChange={(e) => setvalue2(e.target.value)}
              className="lg:pl-8 w-[130px] h-[2rem]  rounded-lg text-black bg-gray-400 bg-opacity-30 backdrop-blur-md focus:ring-2 focus:outline-none px-5 items-center cursor-pointer"
            >
              {coin &&
                Object.values(coin).map((d, k) => (
                  <option
                    key={k}
                    value={d.value}
                    className="text-black bg-white"
                  >
                    {d.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="-mt-5 mr-3 lg:pl-10">
          <div>
            <label className="text-md text-gray-900">Enter value</label>
            <div className="mr-[90px] lg:w-[90px] md:w-full sm:w-[90px] w-full py-2">
             
             {/* In this Input field user can enter the value */}
              <input
                type="number"  //user can enter only numbers
                className="appearance-none block w-[90px] bg-gray-100 bg-opacity-20 backdrop-blur-md text-black leading-tight focus:outline-none focus:bg-white focus:border-black rounded border border-gray-600 px-3 py-1 text-sm outline-none pt-2 pb-2"
                placeholder="Avl: 0.002BTC"
                value={text1 || ""}
                onChange={(e) => settext1(e.target.value)}
              />
            </div>
            <p className="mt-4 text-green-500 text-md text-transform:capitalize">
              {parseFloat(text2).toFixed(2)} {units}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 pb-4">
       
        {/* button */}
        <button
          onClick={() => convert()}
          className="bg-blue-400 font-sans   rounded-lg text-lg py-2 px-6 text-black  hover:bg-blue-600 border hover:text-white border-gray-400"
        >
          Exchange
        </button>
      </div>
    </div>
  );
};
