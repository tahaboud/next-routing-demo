"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try{
            const response = await fetch("/react-form/api", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title, price, description}),
            })
            if(response.ok){
                router.push("/products-db");
            }
        }catch(error){
            console.error("Error creating product:", error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
            <label className="text-white">
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full p-2 text-black border rounded"
                />
            </label>
            <label className="text-white">
                Price
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="block w-full p-2 text-black border rounded"
                />
            </label>
            <label className="text-white">
                Description
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full p-2 text-black border rounded"
                />
            </label>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
            >
                {loading ? "Loading..." : "Create Product"}
            </button>
        </form>
    );
}

export default CreateProduct;