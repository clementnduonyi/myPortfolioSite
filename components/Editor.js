import React from 'react';
import SunEditor,{buttonList} from "suneditor-react";
//import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { useController } from 'react-hook-form';

   
const Editor = ({ control, title, name, defaultValue, ...props }) => {
    const {
    field: {
        value,
        ...inputProps
    },
    fieldState: {
        invalid,
        isTouched,
        isDirty
    },
    formState: {
        touchedFields,
        dirtyFields
    }
    } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: defaultValue || ''
    });

    // console.log('inputProps:', inputProps);
    // console.log('invalid:', invalid);
    // console.log('isTouched:', isTouched);
    // console.log('isDirty:', isDirty);
    // console.log('touchedFields:', touchedFields);
    // console.log('dirtyFields:', dirtyFields);

    return (
        <SunEditor
            {...props}
            {...inputProps}
            defaultValue={value}
            className=""
            setOptions={{
            height: 200,
            buttonList: buttonList.complex,
            //mode: 'balloon'
            }} 
        />
    );
};

export default Editor;
