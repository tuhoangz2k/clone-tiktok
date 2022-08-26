import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

function Menu({ children }) {
    return <nav>{children}</nav>;
}

export default Menu;
