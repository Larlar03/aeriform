import { ArrowLeftOnRectangleIcon, PencilIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';
import Studio from '../../types/studio';

interface Props {
    setView: React.Dispatch<React.SetStateAction<string>>;
    handleLogout: () => void;
    showForm: (
        event: React.MouseEvent<HTMLButtonElement>,
        formType: string,
        studioId: string | undefined,
        studio: Studio | undefined
    ) => void;
}

const AdminNavbar = (props: Props) => {
    return (
        <div className='w-4/5 md:w-[550px] my-3 px-3.5  flex flex-nowrap justify-between md:px-12'>
            <div>
                <button
                    data-testid='navbar-logout-icon'
                    type='button'
                    className='text-right'
                    onClick={props.handleLogout}
                >
                    <ArrowLeftOnRectangleIcon className='h-6 w-6 text-greyscale-100 hover:text-iris' />
                </button>
            </div>

            <div>
                <button
                    data-testid='navbar-edit-icon'
                    type='button'
                    className='text-right'
                    onClick={() => props.setView('edit')}
                >
                    <PencilIcon className='h-6 w-6 text-greyscale-100 hover:text-iris' />
                </button>
                <button
                    data-testid='navbar-upload-icon'
                    type='button'
                    className='text-right'
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                        props.showForm(event, 'Upload', undefined, undefined)
                    }
                >
                    <ArrowUpOnSquareIcon className='h-6 w-6 text-greyscale-100 hover:text-iris' />
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar;
