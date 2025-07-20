import React, { useRef, useState, useEffect } from 'react';
import { GetUsersData } from '../../../Provider/Context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const photoRef = useRef('');
    const [userVal, setUserVal] = useState({
        name: '',
        email: '',
        password: '',
    });
    const Navigate = useNavigate();
    const { user, toke } = GetUsersData();

    // Utilisation de useEffect pour initialiser les champs avec les données de l'utilisateur
    useEffect(() => {
        if (user) {
            setUserVal({
                name: user.name,
                email: user.email,
                password: '', // On ne met jamais le mot de passe actuel par sécurité
            });
        }
    }, [user]);

    const UpdateProfil = async (e) => {
        e.preventDefault();

        const data_Profil = new FormData();
        data_Profil.append('name', userVal.name);
        data_Profil.append('email', userVal.email);
        if (userVal.password) { // Ajoute le mot de passe seulement s'il a été modifié
            data_Profil.append('password', userVal.password);
        }
        if (photoRef.current.files[0]) {
            data_Profil.append('photo', photoRef.current.files[0]);
        }

        try {
            const res = await axios.put(`api/user/${user.id}/update`, data_Profil, {
                headers: {
                    Authorization: `Bearer ${toke}`,
            
                },
            });
            console.log(res.data);
            Navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (!user) {
        return <div>Chargement....</div>;
    }

    return (
        <div className="min-h-[100vh]">
            <section className="py-10 my-auto dark:bg-gray-900">
                <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                            Profile
                        </h1>
                        <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Update your Profile</h2>
                        <form onSubmit={UpdateProfil}>
                            <div className="w-full rounded-sm py-4 bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                                {user ? (
                                    <img
                                    
                                        className="mx-auto w-28 object-cover"
                                        src={`http://localhost:8000/storage/${user.photo}`}
                                        alt="Profile"
                                    />
                                ) : (
                                    <p>No photo available</p>
                                )}
                            </div>
                            <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image</h2>
                            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div className="w-full mb-4 mt-6">
                                    <label htmlFor="name" className="mb-2 dark:text-gray-300">Name</label>
                                    <input
                                        value={userVal.name}
                                        onChange={(e) => setUserVal({ ...userVal, name: e.target.value })}
                                        type="text"
                                        name="name"
                                        className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="w-full mb-4 lg:mt-6">
                                    <label htmlFor="email" className=" dark:text-gray-300">Email</label>
                                    <input
                                        value={userVal.email}
                                        onChange={(e) => setUserVal({ ...userVal, email: e.target.value })}
                                        type="email"
                                        name="email"
                                        className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div className="w-full">
                                    <h3 className="dark:text-gray-300 mb-2">Password</h3>
                                    <input
                                        value={userVal.password}
                                        onChange={(e) => setUserVal({ ...userVal, password: e.target.value })}
                                        type="password"
                                        name="password"
                                        className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="New password"
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-4 mt-6">
                                <label htmlFor="photo" className="mb-2 dark:text-gray-300">Profile Image</label>
                                <input
                                    ref={photoRef}
                                    type="file"
                                    name="photo"
                                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                />
                            </div>

                            <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                                <button type="submit" className="w-full p-4">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
