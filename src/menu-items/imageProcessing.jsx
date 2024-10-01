// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  CloudUploadIcon
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'image',
  title: 'Image Processing',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Upload',
      type: 'item',
      url: '/upload',
      icon: icons.CloudUploadIcon
    },
    {
      id: 'util-color',
      title: 'About Project',
      type: 'item',
      url: '/aboutProject',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'More Info',
      type: 'item',
      url: '/moreInfo',
      icon: icons.BarcodeOutlined
    }
  ]
};

export default utilities;
