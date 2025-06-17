import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  required = false,
  className = '',
  disabled = false,
  accept = '',
  onFileChange,
  ...props
}) => {
  // Handle file input separately
  if (type === 'file') {
    return (
      <div className={`${styles.inputGroup} ${className}`}>
        {label && (
          <label className={styles.fileInputLabel} htmlFor={name}>
            {label} {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.fileInputContainer}>
          <label className={styles.fileInputButton} htmlFor={name}>
            Choose File
          </label>
          <input
            type="file"
            id={name}
            name={name}
            onChange={onFileChange || onChange}
            className={styles.fileInput}
            accept={accept}
            disabled={disabled}
            {...props}
          />
          {value && <span className={styles.fileName}>{value.name}</span>}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }

  // Regular input fields
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.hasError : ''}`}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
