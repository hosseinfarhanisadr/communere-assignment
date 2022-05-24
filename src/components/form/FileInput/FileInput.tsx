import * as React from "react";
import UploadIcon from "./upload.svg";
import styles from "./FileInput.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
};

const FileInput = React.forwardRef<HTMLInputElement, Props>(
  ({ name, label, error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}

        <div className={styles.uploadContainer}>
          <label htmlFor={name}>
            <div className={styles.uploadBox}>
              <div className={styles.uploadTitle}>Upload</div>
              <div className={styles.uploadContent}>
                <UploadIcon className={styles.uploadIcon} />
              </div>
            </div>

            <input
              {...props}
              id={name}
              name={name}
              type="file"
              ref={ref}
              className={styles.input}
            />
          </label>
          {error && <span className="text-danger">{error}</span>}
        </div>
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
