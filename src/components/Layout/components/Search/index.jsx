import HeadlessTippy from '@tippyjs/react/headless';
import { SearchIcon } from '../Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Search(props) {
    const [searchvalue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debouce = useRef();
    useEffect(() => {
        if (debouce.current) clearTimeout(debouce.current);
        if (!searchvalue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        debouce.current = setTimeout(() => {
            fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    searchvalue,
                )}&type=less`,
            )
                .then((response) => response.json())
                .then((res) => {
                    setSearchResult(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                });
        }, 300);
    }, [searchvalue]);
    const handleClearBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>

                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchvalue}
                        onChange={(e) => {
                            if (e.target.value[0] === ' ') return;
                            setSearchValue(e.target.value);
                        }}
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                    />
                    {!loading && !!searchvalue && (
                        <button className={cx('clear')} onClick={handleClearBtn}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    )}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
