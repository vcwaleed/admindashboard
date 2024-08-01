import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { BsCloudUpload } from "react-icons/bs";
import { TbPhotoSensor2 } from "react-icons/tb";





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
  },

  {
    key: 'registeruser',
    label: 'Register User',
    path: '/registeruser',
    icon: <FaUserCheck/>
  },

  {
    key: 'bookingapproval',
    label: 'booking Approval',
    path: '/bookingapproval',
    icon: <FcApproval />
  },

  {
    key: 'uploadimage',
    label: 'Uploading Image',
    path: '/uploadimage',
    icon: <BsCloudUpload />
  },

  {
    key: 'photographer',
    label: 'Photographer',
    path: '/uploadimage',
    icon: <TbPhotoSensor2 />
  },














];

export const lower_links = [
  {
    key: 'support',
    label: 'Support',
    path: '/support',
    icon: <MdOutlineSupportAgent />
  }
];
