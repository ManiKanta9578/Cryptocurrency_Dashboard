import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./redux/action/action";
import {PrimaryChart} from "./components/PrimaryChart"
import {ExchangeCoins} from "./components/ExchangeCoins"
import SideBar from "./components/SideBar";
import {Portfolio} from "./components/Portfolio";
import {Searchbar} from "./components/Searchbar";
import { useState } from "react";
import {Navbar} from "./components/Navbar";
import { BallTriangle } from "react-loader-spinner";
import "./App.css";


const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.default);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      if (data.coinList.length === 0) {
        dispatch(fetchCoins());
        setCompleted(true);
      }
    }, 2500);
  }, [data.coinList.length, dispatch]);

  return (
    <>
        {!completed ? (
    <div className="w-screen h-[90vh] flex justify-center items-center ">
            <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
          </div>
        ) : (
            <>
            <div className="bg-white flex md:h-14">
            <Navbar />
            </div>
              <div className="bg-slate-200 py-4 px-4   backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-2">
                  <div className="md:col-span-3 lg:grid-cols-3 sm:grid-cols-3 container-fluid">
                    <Searchbar />
                    <PrimaryChart />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <Portfolio />
                      <ExchangeCoins />
                    </div>
                  </div>
                  <SideBar />
                </div>
              </div>
            </>
          )}
    
    </>
  );
}

export default App;