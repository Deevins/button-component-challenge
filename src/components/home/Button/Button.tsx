import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type Props = {
  variant?: string;
  color?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  text?: string;
  startIcon?: string;
  endIcon?: string;
  size?: string;
};

const Button: React.FC<Props> = (props) => {
  const {
    variant,
    disableShadow,
    disabled,
    text = "Default",
    startIcon,
    endIcon,
    size,
    color,
  } = props;
  return (
    <button
      className={clsx(styles.main, {
        [styles.outline]: variant === "outline",
        [styles.text]: variant === "text" && !disabled,
        [styles.classic]:
          variant !== "text" && variant !== "outline" && variant,
        [styles.disabledShadow]: disableShadow,
        [styles.disabled]: disabled,
        [styles.disabledText]: disabled && variant === "text",
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.withStartIcon]: startIcon,
        [styles.withEndIcon]: endIcon,
        [styles.default]: color === "default",
        [styles.primary]: color === "primary",
        [styles.secondary]: color === "secondary",
        [styles.danger]: color === "danger",
      })}
    >
      <div className={styles.buttonWithIcons}>
        {startIcon ? (
          <span className={`material-icons ${styles.icon}`}>{startIcon}</span>
        ) : (
          ""
        )}
        <p>{text}</p>
        {endIcon ? (
          <span className={`material-icons ${styles.icon}`}>{endIcon}</span>
        ) : (
          ""
        )}
      </div>
    </button>
  );
};

export default Button;
