import * as React from "react";

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
}

const Button: React.FC<IButton> = ({children, onClick}) => {
    return <button onClick={onClick}>{children}</button>
}

export default Button;