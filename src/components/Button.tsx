import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    color?: string;
    backgroundColor?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { children, color, backgroundColor, style } = props;

    let _style: React.CSSProperties = style || {};

    // Override Defaults

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};
