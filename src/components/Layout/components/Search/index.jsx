import HeadlessTippy from '@tippyjs/react/headless';
import { SearchIcon } from '../Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';
const cx = classNames.bind(styles);

function Search(props) {
    const [searchvalue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchvalue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        async function fetchApi() {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);

            console.log(result);
            setLoading(false);
        }
        fetchApi();
    }, [debounce]);
    const handleClearBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue[0] === ' ') return;
        setSearchValue(searchValue);
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
                        onChange={handleChange}
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

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
