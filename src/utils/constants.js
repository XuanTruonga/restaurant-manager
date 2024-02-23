import PersonIcon from '@mui/icons-material/Person';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HiveIcon from '@mui/icons-material/Hive';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TelegramIcon from '@mui/icons-material/Telegram';
import PlaceIcon from '@mui/icons-material/Place';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

export const DASHBOARD = [
  {
    id: 1,
    name: 'Lễ tân',
    icon: PersonIcon
  },
  {
    id: 2,
    name: 'Thu ngân',
    icon: ConnectedTvIcon
  },
  {
    id: 3,
    name: 'Phòng bàn',
    icon: BorderAllIcon
  },
  {
    id: 4,
    name: 'Hàng hóa',
    icon: CardGiftcardIcon
  },
  {
    id: 5,
    name: 'Hóa đơn',
    icon: AttachMoneyIcon
  },
  {
    id: 6,
    name: 'Nhân viên',
    icon: SupervisorAccountIcon
  },
  {
    id: 7,
    name: 'Chấm công',
    icon: EventNoteIcon
  },
  {
    id: 8,
    name: 'Bảng lương',
    icon: HiveIcon
  },
  {
    id: 9,
    name: 'Giới thiệu',
    icon: MapsHomeWorkIcon
  },
  {
    id: 10,
    name: 'Tài khoản',
    icon: SwitchAccountIcon
  }
];

export const APP_BAR = [
  { id: 1, name: 'Hỗ trợ', icon: <TelegramIcon fontSize='small' />, link: 'https://web.telegram.org/a/' },
  { id: 2, name: 'Chi nhánh trung tâm', icon: <PlaceIcon fontSize='small' />, link: '#' }
];
