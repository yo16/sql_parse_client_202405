import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import "./QuerySelector.css";

interface QuerySelectorProps {
    onChangedQuery: (query: string) => void;
}

function QuerySelector({
    onChangedQuery
}: QuerySelectorProps) {

    // onDrop
    const onDrop = useCallback((acceptedFiles: File[]) => {
      // open if type is text/plain
      acceptedFiles.forEach((f) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (typeof reader.result === "string" ) {
                console.log(`DROPPED! ${reader.result}`);
            }
        });
        reader.readAsText(f, "utf-8");
      })
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div
            className="query-selector-container"
        >
            {/* SQLファイルドロップゾーン */}
            <div
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <div
                    className={ "div-drop-zone " + (isDragActive?"div-drag-active":"") }
                >
                    Drop SQL-File
                </div>
            </div>

            <div>
                or
            </div>

            {/* 手入力ボタンゾーン */}
            <div>
                CLICK HERE and Enter SQL Query!
            </div>
        </div>
    );
}

export { QuerySelector };
