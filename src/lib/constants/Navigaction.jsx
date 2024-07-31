import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

export const dashboardbottom = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <RxDashboard />
  },
  {
    key: 'products',
    label: 'Products',
    path: '/product',
    icon: <MdOutlineProductionQuantityLimits />
  }
];

export const lower_links = [
  {
    key: 'support',
    label: 'Support',
    path: '/support',
    icon: <MdOutlineSupportAgent />
  }
];
