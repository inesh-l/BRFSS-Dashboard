import * as duckdb from "@duckdb/duckdb-wasm";
import * as arrow from "apache-arrow";
import { getDuckDB } from "./dbinit";
import { runLlmQuery } from "../llm";
import { useAsync } from "react-async-hook";
type FileFormData = any;
type SetFileListFunction = (fileList: any) => void;
type SetTableArrowFunction = (data: any[]) => void;
type SetLlmResultFunction = (string: string) => void;
type SetTableListFunction = (tableList: any[]) => void;
type SelectedCodeType = string;
type DBEndpointType = string;

export function useDuckDb() {
  // Custom react hook for duckdb initialization
  const {
    result: db,
    loading,
    error,
  } = useAsync(async () => {
    const db = await getDuckDB();
    return db;
  }, []);
  return { db, loading, error };
}

export async function execute_query(
  db: duckdb.AsyncDuckDB | undefined,
  query: string,
  setTableArrow: SetTableArrowFunction,
  setLlmResult: SetLlmResultFunction,
) {
  if (query.startsWith("-- llm: ")) {
    const result = await runLlmQuery(query);
    setLlmResult(result);
  } else {
    const conn = await db.connect();
    const arrowResult = await conn.query<{ v: arrow.Int }>(query);
    // Convert arrow table to json
    const result = arrowResult.toArray().map((row) => row.toJSON());
    console.log(result);
    await conn.close();
    setTableArrow(result);
  }
}

export async function updateTableList(
  db: duckdb.AsyncDuckDB | undefined,
  setTableList: SetTableListFunction,
) {
  const conn = await db.connect();
  console.log("Tables being updated");
  const arrowResult = await conn.query<{ v: arrow.Int }>("SHOW TABLES;");
  const result = arrowResult.toArray().map((row) => row.name);
  console.log(result);
  console.log(arrowResult);
  setTableList(result);
}
