import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsCurrencyEuro } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
  
  ];

export const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
  ];

  export const recentTransactions = [
    {
      icon: <BsCurrencyEuro />,
      amount: '+350€',
      title: 'Paypal Transfer',
      desc: 'Money Added',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
    {
      icon: <BsShield />,
      amount: '-560€',
      desc: 'Bill Payment',
      title: 'Wallet',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
    {
      icon: <FiCreditCard />,
      amount: '+350€',
      title: 'Credit Card',
      desc: 'Money reversed',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
  
      pcColor: 'green-600',
    },
    {
      icon: <TiTick />,
      amount: '+350€',
      title: 'Bank Transfer',
      desc: 'Money Added',
  
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'green-600',
    },
    {
      icon: <BsCurrencyEuro />,
      amount: '-50€',
      percentage: '+38%',
      title: 'Refund',
      desc: 'Payment Sent',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
  ];