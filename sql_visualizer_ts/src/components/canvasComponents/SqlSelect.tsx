// SqlSelect
// Ast type="select"を表示

import { Select as NspSelect, Column as NspColumn, From as NspFrom,  With as NspWith } from "node-sql-parser"

import { SqlColumns } from "./SqlColumns";
import { SqlFroms } from "./SqlFroms";
import { SqlWiths } from "./SqlWiths";

interface SqlSelectProps {
    select: NspSelect;
}
function SqlSelect({ select }: SqlSelectProps) {
    // column
    const columns: any[] | NspColumn[] = select.columns;

    // from
    const fromClauses: NspFrom[] = select.from? select.from: [];

    // with
    const withClauses: NspWith[] = select.with? select.with: [];

    return (
        <g>
            <rect x="0" y="0" width="100" height="100" fill="blue" />
            <SqlWiths withs={withClauses} />
            <SqlFroms froms={fromClauses} />
            <SqlColumns columns={columns} />
        </g>
    );
}

export {
    SqlSelect,
};
