import moment from 'moment';
import { useState } from "react";

const useDate = () => {

    const [today, setToday] = useState(new Date());

    const getYear = () => moment(today).format('YYYY').toString();
    const getMonth = () => moment(today).format('MM').toString();
    const getDate = () => moment(today).format('DD').toString();
    const getHour = () => moment(today).format('HH').toString();
    const getMinute = () => moment(today).format('mm').toString();
    

    return {
        today, 
        setToday,
        getYear,
        getMonth,
        getDate, 
        getHour,
        getMinute
    }
}


export default useDate; 