import * as duckdb from '@duckdb/duckdb-wasm';
import duckdb_wasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import mvp_worker from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url';
import duckdb_wasm_eh from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import eh_worker from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';
import { Type } from '@apache-arrow/ts'

type FileFormData = any;
type SetFileListFunction = (fileList: any) => void;
type SetTableArrowFunction = (blobResponse: Blob) => void;
type SetTableListFunction = (tableList: any[]) => void;
type SelectedCodeType = string;
type DBEndpointType = string;

export async function execute_query(
    db: duckdb.AsyncDuckDB | undefined, 
    query: string,
    setTableArrow: SetTableArrowFunction,
    setLlmResult: SetTableArrowFunction,
    DB_ENDPOINT: DBEndpointType,) 
    
    {

        const conn = await db.connect();
        const arrowResult = await conn.query<{ v: Type.Int }>(query);

        // Convert arrow table to json
        const result = arrowResult.toArray();
        console.log(result);
        await conn.close();
        return result;
    }

export async function updateTableList(
    setTableList: SetTableListFunction,
    DB_ENDPOINT: DBEndpointType,) 
    {
        

    }

