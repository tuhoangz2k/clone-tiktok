import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

AccountItem.propTypes = {
    data: PropTypes.object,
};

function AccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} alt={data.full_name} src={data.avatar} />
            <div className={cx('infor')}>
                <p className={cx('name')}>{data.full_name}</p>
                <span className={cx('username')}>{data.nickname} </span>
                {data.tick && (
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                )}
            </div>
        </Link>
    );
}

export default AccountItem;
