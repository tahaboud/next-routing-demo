"use client";

import { useFormStatus } from "react-dom";

export const Submit = () => {
    const {pending} = useFormStatus();
    return (
        <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
                disabled={pending}
            >
                Create Product
            </button>
    )
}