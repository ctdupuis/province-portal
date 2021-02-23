import axios from 'axios';
import { API_ROOT } from '../constants';

export const createCheckEntry = (entryData) => {
    return async (dispatch) => {
        const response = await axios.post(`${API_ROOT}/check_entries`,
        {
            patient_name: entryData.patient_name,
            rx_num: entryData.rx_num,
            adjusted_amt: entryData.adjusted_amt,
            original_amt: entryData.original_amt
        }, { withCredentials: true } )
        const data = response.data
        if (data.created) {
            console.log("Success")
        } else {
            console.log("Failure")
        }
    }
}