
type ColumnInfo = {
    tableName: string;
    columnName: string;
    fromColumns?: ColumnInfo[];
};
type TableInfo = {
    tableName: string;
    columns: ColumnInfo[];
    depth: number;
    isTopQuery: boolean;
};

// 型ガード
function isColumnInfo(value: unknown): value is ColumnInfo {
    if (!value) { return false; }
    if (typeof value !== "object") { return false; }

    return (
        ("tableName" in value) &&
        ( typeof (value as any).tableName === "string" ) &&
        ( "columnName" in value ) &&
        ( typeof (value as any).columnName === "string" ) &&
        ( ( "fromColumns" in value )?
            ( isColumnInfoArray((value as any).fromColumns) ): true )
    );
}
function isColumnInfoArray(value: unknown):value is ColumnInfo[] {
    if (!Array.isArray(value)) { return false; }

    let retValue: boolean = true;
    value.forEach(v => {
        if (!isColumnInfo(v)) {
            retValue = false;
            return;
        }
    });

    return retValue;
}

function isTableInfo(value: unknown): value is TableInfo {
    if (!value) { return false; }
    if (typeof value !== "object") { return false; }

    return (
        ( "tableName" in value ) && 
        ( typeof (value as any).tableName === "string" ) &&
        ( "columns" in value ) &&
        ( isColumnInfoArray((value as any).columns) ) &&
        ( "depth" in value ) &&
        ( typeof (value as any).depth === "number" ) &&
        ( "isTopQuery" in value ) &&
        ( typeof (value as any).isTopQuery === "boolean" )
    );
}
function isTableInfoArray(value: unknown): value is TableInfo[] {
    if (!Array.isArray(value)) { return false; }

    let retValue: boolean = true;
    value.forEach(v => {
        if (!isTableInfo(v)) {
            retValue = false;
            return;
        }
    });

    return retValue;
}


type TableColumnConnection = {
    fromTableName: string;
    fromColumnName?: string;
    toTableName: string;
    toColumnName?: string;
};
function isTableColumnConnection(value: unknown): value is TableColumnConnection {
    if (!value) { return false; }
    if (typeof value !== "object") { return false; }

    return (
        ( "fromTableName" in value ) &&
        ( typeof (value as any).fromTableName === "string" ) &&
        ( ("fromColumnName" in value)?
            (typeof (value as any).fromColumnName === "string"): true ) &&
        ( "toTableName" in value ) &&
        ( typeof (value as any).toTableName === "string" ) &&
        ( ("toColumnName" in value)?
            (typeof (value as any).toColumnName === "string"): true ) &&
        // fromColumnNameがあるなら、toColumnNameもなくてはならない
        ( ("fromColumnName" in value)? ("toColumnName" in value): true )
    );
}
function isTableColumnConnectionArray(value: unknown): value is TableColumnConnection[] {
    if (!Array.isArray(value)) { return false; }

    let retValue: boolean = true;
    value.forEach(v => {
        if (!isTableColumnConnection(v)) {
            retValue = false;
            return;
        }
    });

    return retValue;
}



export type {
    ColumnInfo,
    TableInfo,
    TableColumnConnection,
}
export {
    isTableInfoArray,
    isTableColumnConnectionArray,
};
