
import { QuerySelector } from "./QuerySelector";
import { LineageCanvas } from "./LineageCanvas";
import { DisplayCtrlPanel } from "./DisplayCtrlPanel";

import "./Contents.css";

function Contents() {
    return (
        <div
            className="contents-container"
        >
            <QuerySelector />
            <LineageCanvas />
            <DisplayCtrlPanel />
        </div>
    );
}

export { Contents };
