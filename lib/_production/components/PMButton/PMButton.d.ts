import * as React from "react";
interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color?: "primary" | "secondary";
    variant?: "text" | "flat" | "outlined" | "contained" | "raised" | "fab";
    disabled?: true | false;
}
export declare class PMButton extends React.Component<ButtonProps> {
    static defaultProps: {
        text: string;
        color: string;
        variant: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export {};
