"use client";

import { useEffect } from "react";

const ErrorPage = ({error}: {error: Error}) => {
    useEffect(()=>{
        console.error(error)
    },[error])
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">Error fletching users data</div>
        </div>
    );
}

export default ErrorPage;