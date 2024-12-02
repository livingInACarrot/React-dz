import './styles.css';
import React, { useState, useRef, useCallback, useMemo } from 'react';

const useFormValidation = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validateName = useCallback((name: string) => {
    if (name.length < 3) return 'Имя должно содержать хотя бы 3 символа';
    return '';
  }, []);

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Введите правильный email';
    return '';
  }, []);

  const validatePassword = useCallback((password: string) => {
    if (password.length < 6)
      return 'Пароль должен содержать не менее 6 символов';
    return '';
  }, []);

  const validateField = useCallback(
    (field: keyof typeof values, value: string) => {
      switch (field) {
        case 'name':
          return validateName(value);
        case 'email':
          return validateEmail(value);
        case 'password':
          return validatePassword(value);
        default:
          return '';
      }
    },
    [validateName, validateEmail, validatePassword]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name as keyof typeof values, value),
      }));
    },
    [validateField]
  );

  const isFormValid = useMemo(
    () => Object.values(errors).every((error) => error === ''),
    [errors]
  );

  return { values, errors, handleChange, isFormValid };
};

const Input: React.FC = () => {
  const { values, errors, handleChange, isFormValid } = useFormValidation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isFormValid) {
        console.log('Форма успешно отправлена:', values);
        alert('Форма успешно отправлена');
      }
    },
    [values, isFormValid]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Отправить
      </button>
    </form>
  );
};

export default Input;
