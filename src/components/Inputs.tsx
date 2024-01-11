import React from 'react';

export interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    className?: string;
    textColor?: string;
    backgroundColor?: string;
}

export const TextInput: React.FunctionComponent<TextInputProps> = (props) => {
    const { label, textColor, backgroundColor, style, ...rest } = props;

    let _style: React.CSSProperties = style || {};

    // Override Defaults if textColor or backgroundColor are provided
    if (textColor) _style.color = textColor;
    if (backgroundColor) _style.backgroundColor = backgroundColor;

    return (
        <div>
            {label && <label>{label}</label>}
            <input type="text" style={_style} {...rest} />
        </div>
    );
};

//Password Input
export interface PasswordInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    className?: string;
    textColor?: string;
    backgroundColor?: string;
}

export const PasswordInput: React.FunctionComponent<PasswordInputProps> = (props) => {
    const { label, textColor, backgroundColor, style, ...rest } = props;

    let _style: React.CSSProperties = style || {};

    // Override Defaults if textColor or backgroundColor are provided
    if (textColor) _style.color = textColor;
    if (backgroundColor) _style.backgroundColor = backgroundColor;

    return (
        <div>
            {label && <label>{label}</label>}
            <input type="password" style={_style} {...rest} />
        </div>
    );
};

//Email Input

export interface EmailInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    className?: string;
    textColor?: string;
    backgroundColor?: string;
}

export const EmailInput: React.FunctionComponent<EmailInputProps> = (props) => {
    const { label, textColor, backgroundColor, style, ...rest } = props;

    let _style: React.CSSProperties = style || {};

    // Override Defaults if textColor or backgroundColor are provided
    if (textColor) _style.color = textColor;
    if (backgroundColor) _style.backgroundColor = backgroundColor;

    return (
        <div>
            {label && <label>{label}</label>}
            <input type="email" style={_style} {...rest} />
        </div>
    );
};
