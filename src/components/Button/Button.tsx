import clsx from "clsx";
import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  color?: "primary" | "info" | "default" | "warning";
};

const Button = ({ color = "default", className, ...props }: Props) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn, styles[`btn-${color}`], className)}
      {...props}
    />
  );
};

export default Button;
