import React from 'react';
import styles from './FormsControls.module.css';
// Важно! Нужно импортировать Field из redux-form здесь
import { Field } from 'redux-form';

const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
  const hasError = touched && error;

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{React.cloneElement(children, { ...input, ...props })}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
  <div>
    <Field
      name={name}
      component={component}
      placeholder={placeholder}
      validate={validators}
      {...props}
    />
    {text}
  </div>
);
