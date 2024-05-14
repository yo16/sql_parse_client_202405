
import { useState } from "react";

import { QuerySelector } from "./QuerySelector";
import { LineageCanvas } from "./LineageCanvas";
import { DisplayCtrlPanel } from "./DisplayCtrlPanel";
import { isTableInfoArray, TableInfo, isTableColumnConnectionArray, TableColumnConnection } from "./TypeDeffinition";


import "./Contents.css";

// パースサーバー
const SERVER_URL = (process.env.NODE_ENV==="development") ?
    "http://localhost:3001/sql"
    : "https://express-sql-parser-202403.onrender.com/sql"
;

// サーバーへのリクエスト形式
type RequestOption = {
    method: "POST";
    headers: {
        "Content-Type": "application/json";
    };
    body: string;   /* json形式 */
};

function Contents() {
    // サーバーでパースした結果
    const [stmts, setStmts] = useState<TableInfo[]>([]);
    const [tableConns, setTableConnsStmts] = useState<TableColumnConnection[]>([]);
    const [colConns, setColConns] = useState<TableColumnConnection[]>([]);

    // クエリ変更時
    function handleOnChangeQuery(query: string) {
        //console.log(query);

        // 空の場合は何もしない
        if (query.length===0) {
            return;
        }

        // パースサーバーへ投げる
        const reqOpt: RequestOption = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query,}),
        };
        fetch(SERVER_URL, reqOpt)
            .then((res) => res.json())
            .then((json) => {
                if (Object.keys(json).length===0) {
                    return;
                }
                if(isTableInfoArray(json.statements)){
                    setStmts(json.statements);
                }
                if(isTableColumnConnectionArray(json.tableConns)){
                    setTableConnsStmts(json.tableConns);
                }
                if(isTableColumnConnectionArray(json.colConns)){
                    setColConns(json.colConns);
                }
            })
        ;

    }

    return (
        <div
            className="contents-container"
        >
            <QuerySelector
                onChangedQuery={ handleOnChangeQuery }
            />
            <LineageCanvas />
            <DisplayCtrlPanel />
        </div>
    );
}

export { Contents };
