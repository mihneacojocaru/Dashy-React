import React from "react";
import { BsCurrencyEuro } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import {FaReact} from 'react-icons/fa';
import { SiTailwindcss, SiHiveBlockchain, SiExpress } from "react-icons/si";


import { Stacked, Pie, Button, SparkLine, Footer } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  recentTransactions
} from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-12">
      {/* Project Presentation */}
      
      <div className="flex justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 lg:w-auto">
          <div className="py-12 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2
                  className="text-base font-semibold tracking-wide uppercase"
                  style={{ color: currentColor }}
                >
                  Dashy
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl capitalize">
                  a dynamic dashboard
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                  Made with <span className="font-semibold">React</span>, <span className="font-semibold">Syncfusion</span> and <span className="font-semibold">Express.js</span> by <strong><a style={{color:currentColor}} href="https://mihneacojocaru.github.io/" target="_blank" rel="noreferrer">Mihnea Cojocaru</a></strong>
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div
                        style={{ backgroundColor: currentColor }}
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white"
                      >
                        <FaReact className="text-xl"/>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                        React.JS
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                    React is an DOM management library that is used to create user interfaces, it computes the minimal set of changes that makes keep your DOM up-to-date.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div
                        style={{ backgroundColor: currentColor }}
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white"
                      >
                        <SiTailwindcss className="text-xl"/>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                        TailwindCss
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                    Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes composed to build and design this application.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div style={{ backgroundColor: currentColor }} className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                        <SiHiveBlockchain className="text-xl"/>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                        Syncfusion
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                    The World's Best UI Component Suite for Building Powerful Web, Desktop, and Mobile Apps. It's a software package that provides state-of-the-art solutions for startups and enterprises.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div style={{ backgroundColor: currentColor }} className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                        <SiExpress className="text-xl"/>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                        Express.js
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                    Fast, unopinionated, minimalist web framework for Node.js. Customised RestAPI Server to obtain dynamic data for the diffrent parts of the application.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">63,572.77€</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue Updates */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-auto">
          <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-3 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-3 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">93,435€</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-5">
                <p>
                  <span className="text-3xl font-semibold">13,560€</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked
                color={currentMode === "Dark" ? "#33373E" : "#fff"}
                width="320px"
                height="360px"
              />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-auto">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ecommerce;
