
import { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

// type MenuItem = Required<MenuProps>['items'][number];
type MenuItem = { label: string, key: string, icon?: React.ReactNode, children?: MenuItem[] }
const items: MenuItem[] = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301',
            },
            {
                label: '栏目302',
                key: '/page3/page302',
            },
            {
                label: '栏目303',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: '栏目4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            },
            {
                label: '栏目402',
                key: '/page4/page402'
            },
        ]
    },
    {
        label: '栏目5',
        key: '/page5',
        icon: <FileOutlined />
    }
];

const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const currentLocation = useLocation();
    console.log(currentLocation.pathname);

    let defaultSubMenuKey = "";
    function findKey(obj: { key: string }) {
        return obj.key === currentLocation.pathname;
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]['children']!.length > 0 && items[i]['children']!.find(findKey)) {
            defaultSubMenuKey = items[i].key;
            break;
        }

    }

    const [openSubMenuKeys, setOpenSubMenuKeys] = useState([defaultSubMenuKey]);

    const onClickMenum = (e: { key: string }) => {
        // console.log("点击了菜单 " + e.key);
        navigateTo(e.key);
    }

    const openSubMenu = (keys: string[]) => {
        console.log(keys);
        setOpenSubMenuKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentLocation.pathname]}
            mode="inline" items={items}
            onClick={onClickMenum}
            onOpenChange={openSubMenu}
            openKeys={openSubMenuKeys}
        />
    )
}
export default MainMenu;