import React from 'react';
import { Input, Layout, Text } from '@ui-kitten/components';
import { useFormikContext } from 'formik';

const FormInputComponent = ({ id, ...inputProps }) => {
  const formContext = useFormikContext();

  const { [id]: error } = formContext.errors;

  const fieldProps = {
    status: error && 'danger',
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
    // onChangeText={formContext.handleChange(id)}
    />
  );
}

export default FormInputComponent;