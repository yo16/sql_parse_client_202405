// SqlAst
// ASPを表示する

import { AST, Select } from "node-sql-parser"

import { SqlSelect } from "./SqlSelect";

interface SqlAstProps {
    ast: AST;
    x: number;
    y: number;
    width: number;
    height: number;
    setWidth: (w: number) => void;
    setHeight: (h: number) => void;
}
function SqlAst({
    ast,
    x,
    y,
    width,
    height,
    setWidth,
    setHeight,
}: SqlAstProps) {
    let component = (<></>);
    switch (ast.type) {
        case 'select':
            const sel: Select = ast as Select;
            component = (<SqlSelect
                x={x}
                y={y}
                select={sel}
                width={width}
                height={height}
                setWidth={setWidth}
                setHeight={setHeight}
            />);
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
