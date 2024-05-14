
import { useState } from "react";

import { QuerySelector } from "./QuerySelector";
import { LineageCanvas } from "./LineageCanvas";
import { DisplayCtrlPanel } from "./DisplayCtrlPanel";

import "./Contents.css";

function Contents() {
    const [stmts, setStmts] = useState([]);

    function handleOnChangeQuery(query: string) {
        console.log(query);
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
