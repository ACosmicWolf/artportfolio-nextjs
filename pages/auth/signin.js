import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false
        })

        if (res.url !== null) {
            router.push("/addartwork")
        }
    }

    return (
        <div className="flex justify-center content-center h-screen">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <h1 className="m-1 text-center text-lg">Sign In</h1>
                <span htmlFor="email" className="m-1">
                    Email:
                </span>
                <input
                    value={userInfo.email}
                    type="email"
                    name="email"
                    placeholder="name@email.com"
                    className="m-1 p-1"
                    onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                />
                <span htmlFor="password" className="m-1">
                    Password:
                </span>
                <input
                    value={userInfo.password}
                    type="password"
                    name="password"
                    placeholder="********"
                    className="m-1 p-1"
                    onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                />
                <input
                    type="submit"
                    value="Login"
                    className="m-1 p-2 bg-gradient-to-r from-ctp-sapphire to-ctp-sky text-ctp-base"
                />
            </form>
        </div>
    );
}
