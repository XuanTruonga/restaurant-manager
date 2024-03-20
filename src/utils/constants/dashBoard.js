import PersonIcon from '@mui/icons-material/Person';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HiveIcon from '@mui/icons-material/Hive';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { pathName } from './pathName';

export const DASHBOARD = [
  {
    id: 1,
    name: 'Lễ tân',
    icon: PersonIcon,
    link: pathName.receptionist
  },

  {
    id: 3,
    name: 'Phòng bàn',
    icon: BorderAllIcon,
    link: pathName.diningRoom
  },
  {
    id: 4,
    name: 'Hàng hóa',
    icon: CardGiftcardIcon,
    link: pathName.eating
  },
  {
    id: 5,
    name: 'Hóa đơn',
    icon: AttachMoneyIcon,
    link: pathName.bill
  },
  {
    id: 6,
    name: 'Nhân viên',
    icon: SupervisorAccountIcon,
    link: pathName.personnel
  },
  {
    id: 7,
    name: 'Chấm công',
    icon: EventNoteIcon,
    link: pathName.timekeeping
  },
  {
    id: 8,
    name: 'Bảng lương',
    icon: HiveIcon,
    link: pathName.payroll
  },
  {
    id: 9,
    name: 'Giới thiệu',
    icon: MapsHomeWorkIcon,
    link: pathName.introduce
  },
  {
    id: 10,
    name: 'Tài khoản',
    icon: SwitchAccountIcon,
    link: pathName.account
  }
];
