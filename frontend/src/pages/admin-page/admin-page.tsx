import { useState } from 'react';
import userLoginApi from '../../api/user-login';
import Header from '../../components/header/header';
import AdminNavbar from '../../components/navbar/admin-navbar';
import Login from '../../components/login/login';
import Edit from '../../components/edit/edit';
import Form from '../../components/form/form';
import Studio from '../../types/studio';
import Service from '../../types/service';

interface Props {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    services: Service[] | undefined;
}

const AdminPage = (props: Props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>();
    const [view, setView] = useState<string>('');
    const [formType, setFormType] = useState<string>('');
    const [studioToEditId, setStudioToEditId] = useState<string | undefined>();
    const [studioToEdit, setStudioToEdit] = useState<Studio | undefined>();

    const handleLogin = async () => {
        const response = await userLoginApi(email, password);

        if (response === 200) {
            props.setIsAdmin(true);
        } else {
            handleLoginError();
        }
    };

    const handleLoginError = () => {
        setEmail('');
        setPassword('');
        setErrorMessage('Access denied');
    };

    const handleLogout = () => {
        setEmail('');
        setPassword('');
        setErrorMessage('');
        props.setIsAdmin(false);
    };

    const showForm = (
        event: React.MouseEvent<HTMLButtonElement>,
        formType: string,
        studioId: string | undefined,
        studio: Studio | undefined
    ) => {
        event.preventDefault();

        setFormType(formType);
        setStudioToEditId(studioId);
        setStudioToEdit(studio);

        setView('form');
    };

    return (
        <>
            <div id='admin-page' className='h-auto min-h-screen mt-6 flex flex-col items-center'>
                {props.isAdmin && <AdminNavbar handleLogout={handleLogout} showForm={showForm} setView={setView} />}

                <div
                    id='admin-page__card'
                    className='w-full max-w-md h-auto bg-alabaster p-6 md:max-w-[476px] md:h-[650px] md:rounded-lg md:border-[1px] md:border-cosmic-cobalt md:shadow-cosmic-cobalt'
                >
                    {!props.isAdmin ? (
                        <>
                            <Header subheading='Login' />

                            <Login
                                handleLogin={handleLogin}
                                user={{ email: email, password: password }}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                error={errorMessage}
                            />
                        </>
                    ) : (
                        (() => {
                            switch (view) {
                                case 'edit':
                                    return (
                                        <>
                                            <Header subheading='Edit a Studio' />
                                            <Edit showForm={showForm} />
                                        </>
                                    );
                                case 'form':
                                    return (
                                        <>
                                            <Header
                                                subheading={
                                                    formType === 'Update'
                                                        ? `${formType} ${studioToEdit?.name}`
                                                        : `${formType} a Studio`
                                                }
                                            />
                                            <Form
                                                formType={formType}
                                                studioToEdit={studioToEdit}
                                                studioToEditId={studioToEditId}
                                                services={props.services}
                                            />
                                        </>
                                    );

                                default:
                                    return (
                                        <>
                                            <Header subheading='Edit a Studio' />
                                            <Edit showForm={showForm} />
                                        </>
                                    );
                            }
                        })()
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminPage;
