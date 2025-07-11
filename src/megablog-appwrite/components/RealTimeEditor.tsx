import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'

function RealTimeEditor({ label, onChange, value }: any) {
    const editorRef = useRef(null);

    return (
        <div>
            {label && <label>{label}</label>}
            <Editor
                apiKey='kyufvra7k4bqi354rfxac7qldmy0s0uppd1kfrugnjckm66x'
                onEditorChange={onChange}
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={value}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </div>
    )
}

export default RealTimeEditor

