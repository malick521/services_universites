"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/Common/Loader";

const Signin = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        checkboxToggle: false,
    });
    const [loading, setLoading] = useState(false);

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        // Auth is disabled for static deployment to GitHub Pages
        toast.success("Sign in functionality is disabled in this demo");
        setLoading(false);

        // Uncomment below to enable authentication when backend is available
        // signIn("credentials", { ...loginData, redirect: false })
        //     .then((callback) => {
        //         if (callback?.error) {
        //             toast.error(callback?.error);
        //             console.log(callback?.error);
        //             setLoading(false);
        //             return;
        //         }

        //         if (callback?.ok && !callback?.error) {
        //             toast.success("Login successful");
        //             setLoading(false);
        //             router.push("/");
        //         }
        //     })
        //     .catch((err) => {
        //         setLoading(false);
        //         console.log(err.message);
        //         toast.error(err.message);
        //     });
    };

    return (
        <>
            <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
                <h2 className="text-3xl font-semibold text-white">Connexion</h2>
            </div>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-[22px]">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) =>
                            setLoginData({ ...loginData, email: e.target.value })
                        }
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        onChange={(e) =>
                            setLoginData({ ...loginData, password: e.target.value })
                        }
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-9">
                    <button
                        onClick={(e) => e.preventDefault()}
                        type="submit"
                        className="bg-primary text-white w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-white hover:bg-transparent cursor-pointer"
                    >
                        Connexion {loading && <Loader />}
                    </button>
                </div>
            </form>

            <Link
                href= '/'
                scroll={false}
                className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
            >
                Mot de passe oublié ?
            </Link>
            <p className="text-body-secondary text-white text-base">
                Pas de compte?{" "}
                <Link href="/" className="text-primary hover:underline">
                    Inscription
                </Link>
            </p>
        </>
    );
};

export default Signin;