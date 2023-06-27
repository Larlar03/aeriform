import { useState, useEffect } from 'react';
import './blinking-eye.css';

interface Props {
    width: string;
    height: string;
}

const BlinkingEye = (props: Props) => {
    const [width, setWidth] = useState<string>('211');
    const [height, setHeight] = useState<string>('211');

    useEffect(() => {
        props.width && setWidth(props.width);
        props.height && setHeight(props.height);
    }, [props.width, props.height]);

    return (
        <>
            <svg
                id='eye'
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <svg
                    id='eye-open'
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect width={width} height={height} fill='#F7F7F7' />
                    <path
                        d='M205.158 102.696C203.739 100.568 169.861 50.854 105.847 50.854C41.8328 50.854 7.9545 100.608 6.53634 102.696L5 105.02L6.53634 107.344C7.9545 109.471 41.8328 159.186 105.847 159.186C169.861 159.186 203.739 109.432 205.158 107.344L206.694 105.02L205.158 102.696ZM105.847 121.683C96.6683 121.683 89.1836 114.199 89.1836 105.02C89.1836 95.8412 96.6683 88.3565 105.847 88.3565C115.026 88.3565 122.51 95.8412 122.51 105.02C122.51 114.199 115.026 121.683 105.847 121.683ZM15.1635 105.02C21.2301 97.1412 43.4085 71.4173 79.8474 62.3569C65.4688 71.1416 55.8568 86.9383 55.8568 105.02C55.8568 123.101 65.4688 138.859 79.808 147.643C43.4873 138.622 21.2695 112.899 15.1635 105.02ZM131.847 147.683C146.225 138.898 155.837 123.101 155.837 105.02C155.837 86.9383 146.225 71.181 131.886 62.3963C168.207 71.4567 190.425 97.1412 196.53 105.02C190.464 112.899 168.285 138.662 131.847 147.683Z'
                        fill='#7B6CF6'
                    />
                    <path d='M110.025 5H101.674V34.1511H110.025V5Z' fill='#7B6CF6' />
                    <path
                        d='M175.143 22.4671L160.571 47.7148L167.804 51.8897L182.377 26.642L175.143 22.4671Z'
                        fill='#7B6CF6'
                    />
                    <path
                        d='M36.5434 22.4745L29.3111 26.6501L43.8867 51.895L51.119 47.7193L36.5434 22.4745Z'
                        fill='#7B6CF6'
                    />
                    <path d='M110.025 175.849H101.674V205H110.025V175.849Z' fill='#7B6CF6' />
                    <path
                        d='M167.797 158.142L160.565 162.317L175.14 187.562L182.373 183.387L167.797 158.142Z'
                        fill='#7B6CF6'
                    />
                    <path
                        d='M43.8895 158.147L29.3169 183.394L36.55 187.569L51.1226 162.321L43.8895 158.147Z'
                        fill='#7B6CF6'
                    />
                </svg>

                <svg
                    id='eye-close'
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect width={width} height={height} fill='#F7F7F7' />
                    <path
                        d='M205.158 102.842C203.739 100.714 169.861 51 105.847 51C41.8328 51 7.9545 100.754 6.53634 102.842L5 105.166L6.53634 107.49C7.9545 109.617 41.8328 159.332 105.847 159.332C169.861 159.332 203.739 109.578 205.158 107.49L206.694 105.166L205.158 102.842ZM105.847 131.646C117 137.646 140.5 126.825 140.5 117.646C140.5 108.467 95.3213 78.1459 104.5 78.1459C90 64.1459 79.8474 93.663 79.8474 102.842C79.8474 112.02 82 127.146 105.847 131.646ZM15.1635 105.166C79.8474 83.6459 43.4085 71.5633 79.8474 62.5029C77 57.6459 11.5 84.7601 11.5 102.842C11.5 120.923 65.5082 139.005 79.8474 147.789C58 126.146 66 118.646 15.1635 105.166ZM131.886 147.789C151.5 150.185 196.53 123.247 196.53 105.166C196.53 87.0843 148 62.5423 131.886 62.5423C168.207 71.6027 190.425 97.2872 196.53 105.166C190.464 113.045 168.325 138.768 131.886 147.789Z'
                        fill='#7B6CF6'
                    />
                    <path d='M110.025 175.995H101.674V205.146H110.025V175.995Z' fill='#7B6CF6' />
                    <path
                        d='M167.797 158.288L160.565 162.463L175.14 187.708L182.373 183.533L167.797 158.288Z'
                        fill='#7B6CF6'
                    />
                    <path
                        d='M43.8895 158.293L29.3169 183.54L36.55 187.715L51.1226 162.467L43.8895 158.293Z'
                        fill='#7B6CF6'
                    />
                </svg>
            </svg>
        </>
    );
};

export default BlinkingEye;
