// SqlAst
// ASPを表示する

import { AST, Select } from "node-sql-parser"

import { SqlSelect } from "./SqlSelect";

interface SqlAstProps {
    ast: AST;
}
function SqlAst({ ast }: SqlAstProps) {
    let component = (<></>);
    switch (ast.type) {
        case 'select':
            const sel: Select = ast as Select;
            component = (<SqlSelect select={sel} />);
            break;
        // 他も順次追加(insertとか)
    }

    return (
        component
    );
}

export {
    SqlAst,
};
