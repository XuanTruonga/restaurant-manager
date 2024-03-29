import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import { Controller } from 'react-hook-form';

const ControllerCkeditor = (props) => {
  const { control, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(e_, editor) => {
              onChange(editor.getData());
            }}
          />
        );
      }}
    />
  );
};

export default ControllerCkeditor;
