import ReactMarkdown from 'react-markdown';
import { ReactNode } from "react";

const MarkdownBox = ({ children }: { children: ReactNode }) => {
  return (
    <section className='markdownWrap'>
      <ReactMarkdown>
        {String(children)}
      </ReactMarkdown>
    </section>
  );
};

export default MarkdownBox;