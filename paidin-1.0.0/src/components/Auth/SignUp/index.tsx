"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "@/components/Common/Loader";
const SignUp = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        // API is disabled for static deployment to GitHub Pages
        toast.success("Sign up functionality is disabled in this demo");
        setLoading(false);

        // Uncomment below to enable API calls when backend is available
        // const data = new FormData(e.currentTarget);
        // const value = Object.fromEntries(data.entries());
        // const finalData = { ...value };

        // fetch("/api/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(finalData),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         toast.success("Successfully registered");
        //         setLoading(false);
        //         router.push("/signin");
        //     })
        //     .catch((err) => {
        //         toast.error(err.message);
        //         setLoading(false);
        //     });
    };

    return (
        <>
            <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
                <h2 className="text-3xl font-semibold text-white">Inscription</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="NNI"
                        name="nni"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div>
                 <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="Prenom"
                        name="name"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="Nom"
                        name="name"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div> 
                <div className="mb-[22px]">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-9">
                    <button
                        type="submit"
                        onClick={(e) => e.preventDefault()}
                        className="text-white cursor-pointer flex w-full items-center text-18 font-medium justify-center rounded-md bg-primary px-5 py-3 text-darkmode transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border "
                    >
                        S'inscrire {loading && <Loader />}
                    </button>
                </div>
            </form>
            <p className="text-body-secondary mb-4 text-white text-base">
                En créant un compte, vous acceptez notre{" "}
                <a href="#!" className="text-primary hover:underline">
                    Politique 
                </a>{" "}
                de{" "}
                <a href="#!" className="text-primary hover:underline">
                    confidentialité.
                </a>
            </p>

            <p className="text-body-secondary text-white text-base">
                Vous avez déjà un compte?
                <Link href="/" scroll={false} className="pl-2 text-primary hover:underline">
                   Connectez-vous
                </Link>
            </p>
        </>
    );
};

export default SignUp;
