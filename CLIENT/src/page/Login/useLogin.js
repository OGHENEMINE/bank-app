import {useContext} from 'React';
import { AuthContext } from '../../context/AuthContext';
import {useForm} from 'react-hook-form';
import axios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function useLogin(){
    const [user, setUser] = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const form = {
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
      axios
        .post("/auth/login", data)
        .then((res) => {console.log(res)
                        setUser(res.config.data)
                        return toast('Logged In!')})
        .catch((err) => toast(err.response.data));
    };
  
    return { onSubmit, form, handleSubmit, errors };
  }
  
  export default useLogin;