import { FaHome, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";


const menuData = [
    {
        name: 'Home',
        path: '/',
        icon: <FaHome/>
    },
    {
        name: 'User',
        path: '/user',
        icon: <FaUserAlt/>
    },
    {
        name: 'Shop',
        path: '/shop',
        icon: <FaShoppingCart/>
    },
    {
        name: 'Admin',
        path: '/admin',
        icon: <RiAdminFill/>
    }
]

export default menuData;