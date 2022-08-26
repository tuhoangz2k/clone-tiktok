import React from 'react';
import Header from '../components/Header';
import SideBar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
