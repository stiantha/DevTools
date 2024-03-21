declare module 'react-markdown-it' {
    import { Component } from 'react';
    import MarkdownIt from 'markdown-it';
  
    interface MarkdownProps {
      markdownit: MarkdownIt;
      source: string;
    }
  
    class Markdown extends Component<MarkdownProps> {}
  
    export default Markdown;
  }