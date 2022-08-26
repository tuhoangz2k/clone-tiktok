import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function SideBar(props) {
    return (
        <aside>
            <h2 className={cx('wrapper')}>Sibar day</h2>
        </aside>
    );
}

export default SideBar;
