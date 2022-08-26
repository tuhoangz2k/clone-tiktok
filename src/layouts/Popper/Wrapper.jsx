import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
