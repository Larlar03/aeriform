import './page-not-found.css';

const PageNotFound = () => {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center items-center'>
                <span className='text-9xl font-medium mr-4'>4</span>
                <div id='blinking-eye-container'>
                    <svg
                        role='img'
                        id='eye-open'
                        xmlns='http://www.w3.org/2000/svg'
                        width='150'
                        height='150'
                        viewBox='-20 -20 250 250'
                        fill='none'
                        preserveAspectRatio='x100Y100 meet'
                    >
                        <path fill='none' d='M0 0h211v211H0z' />
                        <path
                            fill='#7B6CF6'
                            d='M205.158 102.696c-1.419-2.128-35.297-51.842-99.311-51.842-64.014 0-97.892 49.754-99.31 51.842L5 105.02l1.536 2.324c1.419 2.127 35.297 51.842 99.311 51.842 64.014 0 97.892-49.754 99.311-51.842l1.536-2.324-1.536-2.324Zm-99.311 18.987c-9.179 0-16.663-7.484-16.663-16.663s7.484-16.663 16.663-16.663 16.663 7.484 16.663 16.663-7.484 16.663-16.663 16.663ZM15.164 105.02c6.066-7.879 28.244-33.603 64.683-42.663-14.378 8.785-23.99 24.581-23.99 42.663 0 18.081 9.612 33.839 23.951 42.623-36.32-9.021-58.539-34.744-64.645-42.623Zm116.683 42.663c14.378-8.785 23.99-24.582 23.99-42.663 0-18.082-9.612-33.839-23.951-42.624 36.321 9.06 58.539 34.745 64.644 42.624-6.066 7.879-28.245 33.642-64.683 42.663ZM110.025 5h-8.351v29.151h8.351V5ZM175.143 22.467l-14.572 25.248 7.233 4.175 14.573-25.248-7.234-4.175ZM36.543 22.474l-7.232 4.176 14.576 25.245 7.232-4.176-14.576-25.245ZM110.025 175.849h-8.351V205h8.351v-29.151ZM167.797 158.142l-7.232 4.175 14.575 25.245 7.233-4.175-14.576-25.245ZM43.89 158.147l-14.573 25.247 7.233 4.175 14.573-25.248-7.233-4.174Z'
                        />
                    </svg>
                    <svg
                        role='img'
                        id='eye-close'
                        xmlns='http://www.w3.org/2000/svg'
                        width='150'
                        height='150'
                        viewBox='-20 -20 250 250'
                        fill='none'
                        preserveAspectRatio='x100Y100 meet'
                    >
                        <path fill='none' d='M0 0h211v211H0z' />
                        <path
                            fill='#7B6CF6'
                            d='M205.158 102.842C203.739 100.714 169.861 51 105.847 51c-64.014 0-97.892 49.754-99.31 51.842L5 105.166l1.536 2.324c1.419 2.127 35.297 51.842 99.311 51.842 64.014 0 97.892-49.754 99.311-51.842l1.536-2.324-1.536-2.324Zm-99.311 28.804c11.153 6 34.653-4.821 34.653-14s-45.179-39.5-36-39.5c-14.5-14-24.653 15.517-24.653 24.696 0 9.178 2.153 24.304 26 28.804Zm-90.683-26.48c64.683-21.52 28.244-33.603 64.683-42.663C77 57.646 11.5 84.76 11.5 102.842c0 18.081 54.008 36.163 68.347 44.947C58 126.146 66 118.646 15.164 105.166Zm116.722 42.623c19.614 2.396 64.644-24.542 64.644-42.623 0-18.082-48.53-42.624-64.644-42.624 36.321 9.06 58.539 34.745 64.644 42.624-6.066 7.879-28.205 33.602-64.644 42.623ZM110.025 175.995h-8.351v29.151h8.351v-29.151ZM167.797 158.288l-7.232 4.175 14.575 25.245 7.233-4.175-14.576-25.245ZM43.89 158.293 29.316 183.54l7.233 4.175 14.573-25.248-7.233-4.174Z'
                        />
                    </svg>
                </div>
                <span className='text-9xl font-medium  ml-4'>4</span>
            </div>
            <h1 className='text-6xl font-bold mt-9'>Page Not Found</h1>
            <p className='text-xl mt-5'>
                Back to{' '}
                <a className=' text-main-purple-heart hover:text-main-cornflower-blue' href='/'>
                    home
                </a>
            </p>
        </div>
    );
};

export default PageNotFound;
