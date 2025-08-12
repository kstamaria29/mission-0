import { useState } from "react";
import logo from "./assets/logo.png";
import hamburgerIcon from "./assets/hamburger.png";
import closeIcon from "./assets/close.png";
import data from "./data.json";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed flex bg-black w-screen shadow-lg shadow-gray-900  ">
        <img src={logo} alt="" className="hover:cursor-pointer" />
        <div className="flex w-screen justify-between items-center">
          <h3 className="text-xl font-bold text-white pl-5 py-8.5">Marketing Association NZ</h3>
          <img src={hamburgerIcon} alt="" onClick={() => setMobileMenuOpen(true)} className="h-10 lg:hidden mr-10 hover:cursor-pointer" />
          {/* Menu items  */}
          <div className="hidden lg:flex lg:pr-20 gap-20 items-center text-white text-xl font-semibold">
            {["Home", "Services", "Contact Us"].map((menu, i) => (
              <h3
                key={i}
                className="hover:underline hover:decoration-amber-600 hover:underline-offset-8 hover:cursor-pointer hover:text-shadow-lg hover:text-shadow-amber-900"
              >
                {menu}
              </h3>
            ))}
            <button className="bg-red-800 border-2 border-amber-500 px-10 py-2 shadow-amber-600 hover:cursor-pointer hover:shadow-lg hover:bg-gray-200 hover:text-red-800 hover:font-bold hover:border-red-800 ">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed h-100 w-screen flex bg-black border-y-2 border-red-800 shadow-amber-900 shadow-lg ">
            <img src={logo} alt="" className="fixed h-20 hover:cursor-pointer" />

            <div className="flex flex-col items-center w-screen  justify-center gap-8 text-white text-xl font-semibold ">
              {["Home", "Services", "Contact Us"].map((menu, i) => (
                <h3 className="hover:underline hover:decoration-amber-600 hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:text-shadow-lg hover:text-shadow-amber-900">
                  {menu}
                </h3>
              ))}
            </div>
            <img src={closeIcon} onClick={() => setMobileMenuOpen(false)} className="fixed right-0 h-10 hover:cursor-pointer mr-6 mt-8 " />
          </div>
        )}
      </nav>

      {/* Main Content  */}

      <main className=" flex flex-col bg-gray-200 pt-25 ">
        {/* Hero Section */}
        <header className="bg-[url(./assets/hero.png)] bg-cover bg-center bg-black px-15 pt-15 pb-20 shadow-2xl shadow-gray-400">
          <h1 className="text-white text-3xl md:text-6xl font-semibold  leading-snug">Market Association NZ</h1>
          <h1 className="text-white text-6xl font-semibold  leading-snug mb-20">Digital News</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-1 lg:gap-2">
            <input
              className="border-gray-200 bg-white p-5 w-full  focus:outline-none focus:ring-2 focus:ring-red-800 sm:w-100"
              type="search"
              placeholder="Enter search terms"
            />
            <button className="p-5 w-full bg-red-900  border-2 border-amber-500 hover:cursor-pointer shadow-amber-950 shadow-lg hover:shadow-amber-900 hover:shadow-xl hover:bg-gray-300 hover:text-red-800 hover:border-red-800 hover:font-bold text-xl font-semibold text-white sm:w-50">
              Search
            </button>
          </div>
        </header>

        {/* Content Section  */}

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 md:grid-cols-2 md:mx-0 md:px-10 md:max-w-none xl:grid-cols-3 lg:px-30 mb-30">
          {/* News Cards */}
          {data.map((news) => (
            <div
              key={news.id}
              className="mt-25 mx-auto border-1 bg-gray-200 hover:bg-red-800 hover:border-3 border-amber-900 hover:border-red-800  shadow-amber-500 shadow-md hover:shadow-xl hover:cursor-pointer group"
            >
              <div key={news.id} className="bg-cover bg-center h-65 w-auto " style={{ backgroundImage: `url(${news.img})` }}></div>
              <div className="bg-white p-5 h-50 ">
                <h5 className="text-lg font-bold px-3 h-14 w-85">{news.title}</h5>
                <p className="pt-3 w-85 px-3">{news.content}</p>
              </div>
              <div className="flex justify-between mt-1 ">
                <div className="h-25 w-69 bg-white px-8 pt-6">
                  <p className="">{news.date}</p>
                  <p>{news.city}</p>
                </div>
                <svg viewBox="0 0 1200 1200" className="h-25 bg-white fill-gray-800 group-hover:fill-white group-hover:bg-red-800 ">
                  <path d="m150 550h775v100h-775z" />
                  <path d="m710 935-70-70 265-265-265-265 70-70 335 335z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="h-100 bg-black"></footer>
    </>
  );
}

export default App;
