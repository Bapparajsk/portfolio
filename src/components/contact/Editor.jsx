import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { editroDefaultValue } from './data';

export const CodeEditor = () => {

    return (
        <SyntaxHighlighter 
            language="javascript"
            style={atomOneDark}
            customStyle={{
                BackgroundColor: "transparent",
                paddingBottom: "100px",
            }}
        >
            {editroDefaultValue}
        </SyntaxHighlighter>
      );
};
