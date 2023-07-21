
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling
import { useState } from 'react';

const RichTextEditor = () => {
    const [text, setText] = useState('');

    // Handle text change
    const handleChange = (value) => {
        setText(value);
    };

    return (
        <div>
            <ReactQuill value={text} onChange={handleChange} />
        </div>
    );
};

export default RichTextEditor;
