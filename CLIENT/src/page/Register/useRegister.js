import {useForm} from 'react-hook-form'
import axios from '../../services/axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function useRegister(){
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const form = {
        firstname: register('firstname', {
            required: 'Firstname is required'
        }),
        lastname: register('lastname', {
            required: 'Lastname is required'
        }),
        email: register('email', {
            required: 'Email is required',
            pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Email is invalid'
            }
        }),
        password: register('password', {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must be 8 characters long'
            }
        }),
    };

    const navigate = useNavigate();

    const onSubmit = (data) => {
    //   console.log(data)
      axios
        .post("/auth/register", data)
        .then(() => toast('Registered'))
        .catch((err) => toast(err.response.data));
    };
  
    return { onSubmit, form, handleSubmit, errors };
  }
  
  export default useRegister;