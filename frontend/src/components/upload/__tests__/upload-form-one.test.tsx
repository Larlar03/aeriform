import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import UploadFormOne from '../upload-form-one';

const mockStoreNewStudioData = jest.fn();
const mockGoToFormPage = jest.fn();

describe('Upload Form One', () => {
    beforeEach(() => {
        render(
            <Router>
                <UploadFormOne goToFormPage={mockGoToFormPage} storeNewStudioData={mockStoreNewStudioData} />
            </Router>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders text input fields', () => {
        const textInputFields = screen.getAllByRole('textbox');
        expect(textInputFields).toHaveLength(5);
    });

    it('renders select input fields', () => {
        const selectInputFields = screen.getAllByRole('combobox');
        expect(selectInputFields).toHaveLength(3);
    });

    it('renders button', () => {
        const nextButton = screen.getByRole('button');
        expect(nextButton).toBeVisible();
    });

    it('calls function to go to next component when button is clicked', () => {
        const nextButton = screen.getByRole('button');
        fireEvent.click(nextButton);
        expect(mockGoToFormPage).toHaveBeenCalled();
    });
});