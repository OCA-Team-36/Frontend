import { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Quill's snow theme
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import './customQuill.css';

const QuillEditor = () => {
    const [editorContent, setEditorContent] = useState('');

    // Handle change in the editor
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    return (
        <div >
            <ReactQuill
                value={editorContent}
                onChange={handleEditorChange}
                modules={QuillEditor.modules}
                formats={QuillEditor.formats}
                theme="snow"
            />
        </div>
    );
};

// Quill modules for the toolbar
QuillEditor.modules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        [{ align: [] }],
        [{ list: 'bullet' }, { list: 'ordered' }],
        [{ color: [] }, { background: [] }],
        [{ header: '1' }, { header: '2' }, { font: [] }],
        ['clean'],
    ],
};

// Quill formats to support
QuillEditor.formats = [
    'header',
    'font',
    'list',
    'bullet',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'align',
    'link',
    'image',
];

export default QuillEditor;