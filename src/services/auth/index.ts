"use server"
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const loginUser = async(userData: FieldValues) =>{
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        })

        const result = await res.json();
        console.log('printing result in login service : ', result);
        const storeCookie = await cookies();
        if(result.success) {
            storeCookie.set("token", result?.data?.token);
        }
        return result;
    }
    catch(error){
        console.log(error)
    }
}