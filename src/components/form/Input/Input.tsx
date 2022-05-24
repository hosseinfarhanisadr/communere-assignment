import * as React from "react";
import styles from "./Input.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ name, label, error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={styles.inputContainer}>
          <input
            id={name}
            name={name}
            className={styles.input}
            type="text"
            ref={ref}
            {...props}
          />
          {error && <span className="text-danger">{error}</span>}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
