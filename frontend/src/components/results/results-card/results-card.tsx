import { useEffect, useState } from 'react';
import Studio from '../../../types/studio';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

interface Props {
    studio: Studio;
    isActive: boolean;
    cardPosition: string;
}

const ResultsCard = (props: Props) => {
    const [logoImage, setLogoImage] = useState<string>('');

    useEffect(() => {
        // Get logo image base64 string to display image
        const logoBase64String = props.studio.logo;
        setLogoImage(`data:image/png;base64,${logoBase64String}`);
    }, [props.studio]);

    return (
        <div
            id='card-container'
            className={` w-11/12 md:w-[350px] h-[550px] flex items-center justify-center ${
                !props.isActive ? 'hidden lg:flex lg:scale-75' : 'scale-100'
            }`}
            data-testid={`${props.cardPosition}`}
        >
            {props.studio && (
                <>
                    <div
                        id='card'
                        className={`${
                            !props.isActive
                                ? 'border-black md:shadow-black'
                                : 'border-cosmic-cobalt md:shadow-medium-slate-blue'
                        } w-full h-full flex flex-col justify-between text-center p-5 shadow-lg md:shadow-none bg-white border-[1px] rounded-md absolute z-10`}
                        key={props.studio._id}
                        data-testid='results-card'
                    >
                        <div id='top'>
                            <div className='top__heading'>
                                <a
                                    href={`http://${props.studio.social_links?.website}`}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <h3
                                        className={`text-3xl font-bold ${
                                            !props.isActive
                                                ? 'text-black hover:text-black'
                                                : 'text-medium-slate-blue hover:text-cosmic-cobalt'
                                        }  `}
                                    >
                                        {props.studio.name}
                                    </h3>
                                </a>
                                <h4
                                    className={`text-xl font-bol ${
                                        !props.isActive ? 'text-black' : 'text-cosmic-cobalt'
                                    }  d`}
                                >
                                    {props.studio.location?.city}
                                </h4>
                            </div>
                            <div className='top__address text-sm mt-4 px-8 leading-relaxed tracking-wide'>
                                {props.studio.location?.address}
                                <br />
                                {props.studio.location?.post_code}
                            </div>
                        </div>
                        <div id='middle' className='h-[200px] flex justify-center items-center'>
                            {logoImage && (
                                <img
                                    className={`${
                                        !props.isActive ? 'grayscale' : 'grayscale-0'
                                    } h-full object-scale-down`}
                                    src={logoImage}
                                    alt={`${props.studio.name} logo`}
                                />
                            )}
                        </div>
                        <div id='bottom'>
                            <a
                                href={`http://${props.studio.social_links?.instagram}`}
                                target='_blank'
                                rel='noreferrer'
                                className={`h-1.5 w-1.5 ${
                                    !props.isActive
                                        ? 'text-black hover:text-black'
                                        : 'text-medium-slate-blue hover:text-cosmic-cobalt'
                                } `}
                                data-testid='instagram'
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href={`http://${props.studio.social_links?.facebook}`}
                                target='_blank'
                                rel='noreferrer'
                                className={`h-1.5 w-1.5 ${
                                    !props.isActive
                                        ? 'text-black hover:text-black'
                                        : 'text-medium-slate-blue hover:text-cosmic-cobalt'
                                } `}
                                data-testid='facebook'
                            >
                                <FacebookIcon />
                            </a>
                            <div className='text-sm py-3 tracking-wide leading-relaxed'>
                                <a
                                    className={`block underline ${
                                        !props.isActive ? ' hover:text-black' : ' hover:text-cosmic-cobalt'
                                    }`}
                                    target='_blank'
                                    href={`http://${props.studio.social_links?.website}`}
                                    rel='noreferrer'
                                >
                                    {props.studio.social_links?.website}
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ResultsCard;
