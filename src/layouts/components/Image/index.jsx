import { forwardRef, useState } from 'react';
import image from '~/asset/image';
import styles from './Image.module.scss';
import classNames from 'classnames';
function Image(
    { src, alt, className, fallback: customFallback = image.noImage, ...props },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
