import axios from 'axios';
import { cleanup } from '@testing-library/react';
import updateStudioApi from '../update-studio';
import { mockStudio } from '../__mocks__/mock-studio';

const mockId = '123';

describe('Update Studio API', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('makes a PUT request', async () => {
        const mockResponse = {
            status: 204
        };

        jest.spyOn(axios, 'put').mockResolvedValueOnce(mockResponse);

        const response = await updateStudioApi(mockStudio, mockId);

        expect(axios.put).toHaveBeenCalledWith(`${process.env.VITE_STUDIOS_API}/${mockId}`, {
            studio: mockStudio
        });

        expect(response).toBe(204);
    });

    it('handles Axios errors', async () => {
        jest.spyOn(axios, 'put').mockRejectedValueOnce(new Error('Axios error'));

        const consoleErrorMock = jest.fn();
        global.console.error = consoleErrorMock;

        try {
            await updateStudioApi(mockStudio, mockId);
        } catch (error: any) {
            expect(error.message).toBe('Axios error');
            expect(consoleErrorMock).toHaveBeenCalled();
        }
    });
});
