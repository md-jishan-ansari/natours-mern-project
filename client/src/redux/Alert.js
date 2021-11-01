import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SUCCESS, WARNING, ERROR, INFO } from './constants/authanticationConstant';


export const Alert = (type, message) => {
    if (type === SUCCESS)
        toast.success(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })

    else if (type === WARNING)
        toast.warn(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    else if (type === ERROR)
        toast.error(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    else if (type === INFO)
        toast.info(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

};