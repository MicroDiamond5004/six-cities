import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { setError } from '../store/slices/main-offers-process/main-offers-process.slice';

export const processErrorHandle = (message: string): void => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
};
