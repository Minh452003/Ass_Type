import React from 'react'
import { useForm } from "react-hook-form"
import { signIn } from '../../api/auth';
type Props = {}

const Signin = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onHandleSubmit = async (data: any) => {
        const { data: user } = await signIn(data);
        console.log("user", user);
        localStorage.setItem("user", JSON.stringify(user));

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="email" placeholder='Email'{...register('email')} />
                <input type="password" placeholder='Password'{...register('password')} />
                <button>Login</button>

            </form>

        </div>
    )
}

export default Signin