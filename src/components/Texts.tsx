import React from 'react';

export interface PTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    textColor: string;
}

export const PText: React.FunctionComponent<PTextProps> = (props) => {
    const { style, textColor, ...rest } = props;

    let _style: React.CSSProperties = style || {};

    if (textColor) _style.color = textColor;

    return <p style={_style} {...rest} />;
};

//For Span tag

export interface SpanTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    textColor: string;
}

export const SpanText: React.FunctionComponent<SmallTextProps> = (props) => {
    const { style, textColor, ...rest } = props;

    let _style: React.CSSProperties = style || {};

    if (textColor) _style.color = textColor;

    return <span style={_style} {...rest} />;
};

//For Small tag

export interface SmallTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    textColor: string;
}

export const SmallText: React.FunctionComponent<SmallTextProps> = (props) => {
    const { style, textColor, ...rest } = props;

    let _style: React.CSSProperties = style || {};

    if (textColor) _style.color = textColor;

    return <small style={_style} {...rest} />;
};
