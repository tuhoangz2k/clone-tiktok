import { Menu } from '~/components/Layout/Popper';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import image from '~/asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import routesConfig from '~/config/routes';

import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '../Icons';
import Image from '../Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'in',
                    type: 'language',
                    title: 'Bahasa Indonesia',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feed back and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroad shortcuts',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon className={cx('upload-icon')} />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 200]}
                                content="Message video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 200]}
                                content="Inbox video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('inbox-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                rounded
                                primary
                                onClick={() => {
                                    console.log('hello world');
                                }}
                            >
                                Login
                            </Button>
                            <Button rounded outline className={cx('custom-register')}>
                                Register
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt=""
                                src="https://tbkc.edu.vn/wp-content/uploads/2022/05/yandere-la-gi-3.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
