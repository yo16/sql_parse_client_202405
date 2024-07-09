import { AST } from "node-sql-parser";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import { SqlAst } from "./canvasComponents/SqlAst";

import "./LineageCanvas.css";

interface LineageCanvasProps {
    astList: AST[];
}
function LineageCanvas({ astList }: LineageCanvasProps) {


    return (
        <div
            className="lineage-canvas-container"
        >
            <TransformWrapper
                minScale={0.1}
            >
                <TransformComponent>
                    <svg width={550} height={400} style={{backgroundColor: "#dde"}} >
                    {astList.map((ast) => (
                        <SqlAst ast={ast} />
                    ))}
                    </svg>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}

export { LineageCanvas };
