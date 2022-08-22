import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function AccountItem(props) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f743f3e37f4eb99c08a19d3cdfa95014~c5_300x300.webp?x-expires=1661313600&x-signature=zEYf5GKFm51qJ6NBSz0acsVu%2B50%3D"
                alt="Hoa"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>Nguyen thi nga</p>
                <span className={cx('username')}>Nguyennga</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
        </div>
    );
}

export default AccountItem;
