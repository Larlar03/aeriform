import { useEffect, useState } from 'react';
import CtaButton from '../buttons/cta-button/cta-button';
import './form.css';
import Studio from '../../types/studio';

interface Props {
    goToFormSection: (section: number) => void;
    storeNewStudioData: (e: any) => void;
    newStudio: Studio;
}

const FormSectionTwo = (props: Props) => {
    const [validWebsite, setValidWebsite] = useState<boolean>(false);
    const [validInstagram, setValidInstagram] = useState<boolean>(true);
    const [validFacebook, setValidFacebook] = useState<boolean>(true);

    const validate = () => {
        const websiteInput = (document.getElementById('social_links.website') as HTMLInputElement).value;
        const instagramInput = (document.getElementById('social_links.instagram') as HTMLInputElement).value;
        const facebookInput = (document.getElementById('social_links.facebook') as HTMLInputElement).value;

        const urlPattern = new RegExp(
            '^(https?:\\/\\/)?(?:www\\.[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\\.[a-zA-Z]{2,}(?:\\/.*)?)$'
        );

        if (websiteInput.length > 0) {
            urlPattern.test(websiteInput) ? setValidWebsite(true) : setValidWebsite(false);
        } else {
            setValidWebsite(true);
        }

        if (instagramInput.length > 0) {
            urlPattern.test(instagramInput) ? setValidInstagram(true) : setValidInstagram(false);
        } else {
            setValidInstagram(true);
        }

        if (facebookInput.length > 0) {
            urlPattern.test(facebookInput) ? setValidFacebook(true) : setValidFacebook(false);
        } else {
            setValidFacebook(true);
        }
    };

    useEffect(() => {
        validate();
    }, [props.storeNewStudioData]);

    return (
        <form action='submit' className='mt-12' id='form'>
            <div className='top'>
                <section className='mb-8'>
                    <span className='input-group'>
                        <label htmlFor='social_links.website'>
                            Website URL {!validWebsite && <span className='text-error-crimson'>*</span>}
                        </label>
                        <input
                            type='text'
                            id='social_links.website'
                            name='social_links.website'
                            onChange={props.storeNewStudioData}
                            value={props.newStudio.social_links?.website}
                        />
                    </span>
                </section>
                <section className='mb-8'>
                    <span className='input-group'>
                        <label htmlFor='social_links.instagram'>
                            Instagram URL {!validInstagram && <span className='text-error-crimson'>*</span>}
                        </label>
                        <input
                            type='text'
                            id='social_links.instagram'
                            name='social_links.instagram'
                            onChange={props.storeNewStudioData}
                            value={props.newStudio.social_links?.instagram}
                        />
                    </span>
                </section>
                <section className='mb-8'>
                    <span className='input-group'>
                        <label htmlFor='social_links.facebook'>
                            Facebook URL {!validFacebook && <span className='text-error-crimson'>*</span>}
                        </label>
                        <input
                            type='text'
                            id='social_links.facebook'
                            name='social_links.facebook'
                            onChange={props.storeNewStudioData}
                            value={props.newStudio.social_links?.facebook}
                        />
                    </span>
                </section>
                <section className='mb-8'>
                    <span className='input-group'>
                        <label htmlFor='logo' className='form-label'>
                            Logo
                        </label>
                        <input
                            className='block w-full text-sm text-black border border-gallery rounded-lg cursor-pointer bg-white dark:text-greyscale-300 focus:outline-none '
                            type='file'
                            id='logoIput'
                            data-testid='logo-upload-input'
                            name='logo'
                            onChange={props.storeNewStudioData}
                        />
                        <p className='mt-1 text-xs' id='file_input_help'>
                            PNG or JPG (MAX. 500x500px)
                        </p>
                    </span>
                </section>
            </div>
            <div className='bottom flex justify-between w-full'>
                <div className='w-2/5'>
                    <CtaButton text='Back' handleClick={() => props.goToFormSection(1)} type='button' />
                </div>
                <div className='w-2/5'>
                    <CtaButton text='Next' handleClick={() => props.goToFormSection(3)} type='button' />
                </div>
            </div>
        </form>
    );
};

export default FormSectionTwo;
