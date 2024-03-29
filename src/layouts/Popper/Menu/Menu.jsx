import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/layouts/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

Menu.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};
const cx = classNames.bind(styles);
function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            console.log(item.children);
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBackHistory = () => {
        setHistory((prev) => {
            const newHistory = [...prev];
            newHistory.pop();
            return newHistory;
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBackHistory} />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            // visible
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            offset={[12, 8]}
            interactive={true}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
