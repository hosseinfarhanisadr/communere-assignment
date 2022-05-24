import * as React from "react";
import styles from "./Select.module.css";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label?: string;
  error?: string | undefined;
};

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ name, label, error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={styles.selectContainer}>
          <select
            id={name}
            name={name}
            className={styles.select}
            ref={ref}
            {...props}
          />
          {error && <span className="text-danger">{error}</span>}
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
