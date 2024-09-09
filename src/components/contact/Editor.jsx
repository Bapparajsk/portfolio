import { Editor } from "@monaco-editor/react";
import { editroDefaultValue } from "./data";

export const CodeEditor = () => {
    return (
        <Editor
            theme="vs-dark"
            height="90vh"
            defaultLanguage="javascript"
            defaultValue={editroDefaultValue}
        />
    );
};
