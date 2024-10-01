// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Documentation',
      type: 'item',
      url: '/sample-page',
      icon: icons.QuestionOutlined
    }
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: '../pages/extra-pages/samples-page.jsx',
    //   icon: icons.QuestionOutlined
    // }
  ]
};

export default support;
