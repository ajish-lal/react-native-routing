import React, { Fragment } from 'react';
import { Button, Input } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '../assets/icons';
import { Pressable } from 'react-native';

const FormComponent = ({ formData, buttonLabel, onFormSubmit, children }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderIcon = (props) => (
    <Pressable onPress={onPasswordIconPress}>
      {passwordVisible ? <EyeOffIcon {...props} /> : <EyeIcon {...props} />}
    </Pressable>
  );

  const onSubmit = (data) => onFormSubmit(data);

  return (
    <Fragment>
      {formData.map((input) => (
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={input.placeholder}
              keyboardType={input.keyboardType}
              status={errors[input.name] && 'danger'}
              caption={errors[input.name] && input.error}
              secureTextEntry={input.isPassword ? !passwordVisible : false}
              accessoryRight={input.isPassword && renderIcon}
              style={{ marginVertical: 4 }}
            />
          )}
          name={input.name}
          rules={input.rules}
          defaultValue={input.defaultValue}
          key={input.name}
        />
      ))}
      {children}
      <Button style={{ marginVertical: 24 }} onPress={handleSubmit(onSubmit)}>
        {buttonLabel}
      </Button>
    </Fragment>
  );
};

export default FormComponent;
