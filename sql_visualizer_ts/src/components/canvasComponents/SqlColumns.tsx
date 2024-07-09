import { Column as NspColumn } from "node-sql-parser"

interface SqlColumnsProp {
    columns: any[] | NspColumn[];
}
function SqlColumns({ columns }: SqlColumnsProp) {
    return (
        <></>
    );
}

export {
    SqlColumns,
};
