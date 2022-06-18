import {
  FcCustomerSupport,
  FcBusinessman,
  FcBusinesswoman,
} from 'react-icons/fc'
import { FaPeopleArrows, FaUserTie } from 'react-icons/fa'
import { ImOffice } from 'react-icons/im'

export const sidebarLink = [
  { id: 1, name: 'Dashboard', path: '/dashboard' },
  { id: 2, icon: <FaUserTie />, name: 'Jeff', path: '/dashboard/jeff' },
  { id: 3, icon: <FcBusinessman />, name: 'Tom', path: '/dashboard/tom' },
  { id: 4, icon: <FcBusinesswoman />, name: 'Wendy', path: '/dashboard/wendy' },
  {
    id: 5,
    icon: <FcCustomerSupport />,
    name: 'SalesRep',
    path: '/dashboard/salesrep',
  },
  { id: 6, icon: <ImOffice />, name: 'Office', path: '/dashboard/office' },
  { id: 7, icon: <FaPeopleArrows />, name: 'Agent', path: '/dashboard/agents' },
]
