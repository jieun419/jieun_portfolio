import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: { children: ReactNode }) => {
  return (
    <ReactMarkdown className='markdowContainer'>
      {String(children)}
    </ReactMarkdown>
  );
};

export default Markdown;