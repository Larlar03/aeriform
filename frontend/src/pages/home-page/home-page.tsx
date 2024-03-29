import Header from '../../components/header/header';
import SearchForm from '../../components/search/search-form';
import Loading from '../../components/loading/loading';
import Navbar from '../../components/navbar/navbar';
import Service from '../../types/service';

interface Props {
    getStudios: (location: string | undefined, services: string[]) => void;
    isLoading?: boolean;
    services: Service[] | undefined;
}

const HomePage = (props: Props) => {
    return (
        <>
            <Navbar />{' '}
            <div id='home-page' className='h-auto min-h-screen flex flex-col items-center gap-y-12 mt-6'>
                <div
                    id='home-page__card'
                    className='w-full max-w-md p-6 bg-alabaster md:max-w-[476px] md:h-[725px] md:rounded-lg md:border-[1px] md:border-cosmic-cobalt md:shadow-cosmic-cobalt'
                >
                    <Header subheading='Aerial, pole & fitness classes near you.' />
                    {props.isLoading && (
                        <div className='w-full h-4/6 flex justify-center items-center'>
                            <Loading />
                        </div>
                    )}
                    {!props.isLoading && <SearchForm getStudios={props.getStudios} services={props.services} />}
                </div>
                <div className='text-center'>
                    Created by{' '}
                    <a
                        className='text-medium-slate-blue'
                        href='https://github.com/Larlar03/aeriform'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Lana Gordon
                    </a>
                </div>
            </div>
        </>
    );
};

export default HomePage;
