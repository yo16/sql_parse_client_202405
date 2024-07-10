// SqlSelect
// Ast type="select"を表示

import { Select as NspSelect, Column as NspColumn, From as NspFrom,  With as NspWith } from "node-sql-parser"

import { SqlColumns } from "./SqlColumns";
import { SqlFroms } from "./SqlFroms";
import { SqlWiths } from "./SqlWiths";

interface SqlSelectProps {
    select: NspSelect;
    x: number;
    y: number;
    width: number;
    height: number;
    setWidth: (w: number) => void;
    setHeight: (h: number) => void;
}
function SqlSelect({
    select,
    x,
    y,
    width,
    height,
    setWidth,
    setHeight,
}: SqlSelectProps) {
    // column
    const columns: any[] | NspColumn[] = select.columns;

    // from
    const fromClauses: NspFrom[] = select.from? select.from: [];

    // with
    const withClauses: NspWith[] = select.with? select.with: [];

    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect x="0" y="0" width={width} height={height} fill="blue" />
            <SqlWiths withs={withClauses} />
            <SqlFroms froms={fromClauses} />
            <SqlColumns columns={columns} />
        </g>
    );
}

export {
    SqlSelect,
};
