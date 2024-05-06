import ReactMarkdown from 'react-markdown';

export interface MarkdownProps {
    content: string
};

function Markdown({ content }: MarkdownProps) {
    return(
        <ReactMarkdown
            className="markdown"
            children={content}
        />
    );
};

export default Markdown;