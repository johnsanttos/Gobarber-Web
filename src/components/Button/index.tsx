import { type } from "@testing-library/user-event/dist/type";
import React, {ButtonHTMLAttributes} from "react";

type ButtonProps = ButtonHTMLAttributes <HTMLButtonElement> 

const Button: React.FC <ButtonProps>= ({children, ...rest}) =>  <button type="button" {...rest}> {children} </button>


export default Button;