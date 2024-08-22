import { useRef } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/ext-language_tools";
import "./sql_theme.css";

export default function SQLEditor({ setSelectedCode }) {
  // Ref type is adjusted to match the expected type from AceEditor
  const aceEditorRef = useRef(null);

  const executeSelectedCode = () => {
    const editor = aceEditorRef.current?.editor;
    if (editor) {
      const selectedText = editor.session.getTextRange(
        editor.getSelectionRange(),
      );
      console.log("SQL Editor Sends Selected code:", selectedText);
      setSelectedCode(selectedText);
    }
  };

  return (
    <AceEditor
      className="ace-tomorrow -mx-1"
      ref={aceEditorRef}
      name="aceEditor"
      mode="mysql"
      fontSize={14}
      minLines={20}
      width="100%"
      height="100%"
      highlightActiveLine
      defaultValue={exampleCode}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
      commands={[
        {
          name: "excuteSelection",
          bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
          exec: executeSelectedCode,
        },
      ]}
    />
  );
}

const exampleCode = `-- 1. upload description file for RAG
CREATE TABLE ohbrfss22 AS SELECT * FROM 'ohbrfss22.csv';
SELECT * FROM ohbrfss22;

-- 2. ask question and llm will pick related labels (sql, visualization type, ...)
-- llm: How does income relate to health?
-- llm: Can we predict INCOME3 from AGE

-- 3. visualize according to its suggestions
SELECT INCOME3, GENHLTH FROM "ohbrfss22";



-- Example Queries

SELECT 1 a, 2 b UNION BY NAME SELECT 100 a, 101 c;

create TABLE "my_table" (
    my_var VARCHAR(255)
);
DESCRIBE my_table;
SHOW TABLES;
DROP TABLE my_table;

-- Local File Read
SELECT * FROM read_csv_auto('uploaded.csv');

-- Remote Parquet scans:
SELECT * FROM 'https://shell.duckdb.org/data/tpch/0_01/parquet/orders.parquet' LIMIT 1000;
SELECT avg(c_acctbal) FROM 'https://shell.duckdb.org/data/tpch/0_01/parquet/customer.parquet';
SELECT count(*)::int as aws_service_cnt FROM 'https://raw.githubusercontent.com/tobilg/aws-iam-data/main/data/parquet/aws_services.parquet';
SELECT * FROM 'https://raw.githubusercontent.com/tobilg/aws-edge-locations/main/data/aws-edge-locations.parquet';
SELECT cloud_provider, sum(ip_address_cnt)::int as cnt FROM 'https://raw.githubusercontent.com/tobilg/public-cloud-provider-ip-ranges/main/data/providers/all.parquet' GROUP BY cloud_provider;
SELECT * FROM 'https://raw.githubusercontent.com/tripl-ai/tpch/main/parquet/lineitem/part-0.parquet';

-- Remote Parquet/Parquet join:
SELECT n_name, count(*)
FROM
  'https://shell.duckdb.org/data/tpch/0_01/parquet/customer.parquet',
  'https://shell.duckdb.org/data/tpch/0_01/parquet/nation.parquet'
WHERE c_nationkey = n_nationkey GROUP BY n_name;

-- Remote CSV scan
SELECT * FROM read_csv_auto('https://raw.githubusercontent.com/tobilg/public-cloud-provider-ip-ranges/main/data/providers/all.csv');

-- Settings
SELECT * FROM duckdb_settings();





`;
