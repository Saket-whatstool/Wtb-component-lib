import React from "react";

export interface TableProps {
    headers: string[];
    data: any[][];
    className?: string;
}

export const Table: React.FunctionComponent<TableProps> = (props) => {

    const {className, headers, data, ...rest} = props;

    return(
        <table className={className}>
            <thead>
                <tr>
                    
                </tr>
            </thead>
        </table>
    )
}