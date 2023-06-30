import React from "react";
import { useNavigate } from "react-router";



export const Navigate = (param) => {
    let instance = useNavigate()
    instance(param)
}
