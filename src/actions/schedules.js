import axios from 'axios';
import { API_ROOT } from '../constants';

export const getSchedule = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/schedules`, { withCredentials: true })
        const schedule = response.data
        dispatch({ type: 'SAVE_SCHEDULE', schedule })
        dispatch({ type: 'END_LOAD' })
    }
}