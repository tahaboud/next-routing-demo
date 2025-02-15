"use client";
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UsersClient = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(()=> {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }else{
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    },[])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <ul className="space-y-4 p-4">
            {users.map(user=>(
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm">
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default UsersClient;