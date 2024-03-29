import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import FormSectionTwo from '../form-section-two';
import Studio from '../../../types/studio';

const mockStoreNewStudioData = jest.fn();
const mockGoToFormSection = jest.fn();

describe('Upload Form Two', () => {
    beforeEach(() => {
        render(
            <Router>
                <FormSectionTwo
                    goToFormSection={mockGoToFormSection}
                    storeNewStudioData={mockStoreNewStudioData}
                    newStudio={new Studio()}
                />
            </Router>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders text input fields', () => {
        const textInputFields = screen.getAllByRole('textbox');
        expect(textInputFields).toHaveLength(3);
    });

    it('renders file upload field', () => {
        const selectInputFields = screen.getByTestId('logo-upload-input');
        expect(selectInputFields).toBeVisible();
    });

    it('renders buttons', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
        expect(buttons[0]).toHaveTextContent('Back');
        expect(buttons[1]).toHaveTextContent('Next');
    });

    it('calls function to go to previous component when back button is clicked', () => {
        const backButton = screen.getByText('Back');
        fireEvent.click(backButton);
        expect(mockGoToFormSection).toHaveBeenCalled();
    });

    it('calls function to go to next component when next button is clicked', () => {
        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);
        expect(mockGoToFormSection).toHaveBeenCalled();
    });
});
