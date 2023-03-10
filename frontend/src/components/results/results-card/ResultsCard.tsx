import React from 'react';
import './ResultsCard.css';
import Studio from '../../../types/studios';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

interface Props {
    studio: Studio;
    isActive: boolean;
}

const ResultsCard = (props: Props) => {
    return (
        <div className='card-container' id={!props.isActive ? 'inactive' : ''}>
            {props.studio && (
                <>
                    <div className='card' key={props.studio.id}>
                        <div className='card__heading'>
                            <a
                                href={props.studio.social_links?.website}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <h3>{props.studio.name}</h3>
                            </a>
                            <h4>{props.studio.location?.city}</h4>
                        </div>
                        <div className='card__address'>
                            {props.studio.location?.address}
                            <br />
                            {props.studio.location?.city},{' '}
                            {props.studio.location?.post_code}
                        </div>
                        <div className='card__image-container'>
                            <img src={props.studio.logo} alt='placeholder' />
                        </div>
                        <div className='card__links'>
                            <a
                                href={props.studio.social_links?.instagram}
                                target='_blank'
                                rel='noreferrer'
                                className='card__links--instagram'
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href={props.studio.social_links?.facebook}
                                target='_blank'
                                rel='noreferrer'
                                className='card__links--facebook'
                            >
                                <FacebookIcon />
                            </a>
                        </div>
                        <div className='card__contact'>
                            <a href={props.studio.social_links?.website}>
                                {props.studio.social_links?.website}
                            </a>
                            <a href={`tel:${props.studio.phone_number}`}>
                                {props.studio.phone_number}
                            </a>
                        </div>
                    </div>
                    <div className='card__shadow'></div>
                </>
            )}
        </div>
    );
};

export default ResultsCard;
