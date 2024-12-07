"use client"; // Error components must be Client Components

import { useEffect } from "react";
import MyButton from "@/components/UI/buttons/myButton";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Что-то пошло не так.</h2>
            <p>{error.message}</p>
            <MyButton
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Попробовать снова
            </MyButton>
        </div>
    );
}
