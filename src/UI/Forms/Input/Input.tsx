import { InputInterface } from "../../../interfaces/Input.interface";
import styles from "./Input.module.css";

export const Input = ({
  type = "text",
  optional = "",
  quiet = false,
  disabled = false,
  label = "",
  infoIconText = "",
  placeholder = "Input...",
  helperText = "",
  size = "medium",
  isInvalid = false,
  positionLeft = false,
}: InputInterface) => (
  <div
    className={`${styles[size]} ${styles.form} ${disabled ? styles.disabled : ""} ${positionLeft ? styles.position_left : ""}`}
  >
    <div className={styles.label_wrapper}>
      {label && (
        <label className={styles.label}>
          {`${label} ${optional === "optional" ? "(optional)" : ""} ${optional === "required" ? "(required)" : ""}`}
        </label>
      )}

      {infoIconText && (
        <div className={styles.tooltipContainer}>
          <button
            className={styles.iconButton}
            aria-describedby="tooltip-text"
            aria-label="Інформаційна підказка"
          ></button>
          <span id="tooltip-text" role="tooltip" className={styles.tooltipText}>
            {infoIconText}
          </span>
        </div>
      )}
    </div>

    <div className={`${positionLeft && styles.input_position_left_wrapper}`}>
      <div className={quiet ? styles.quiet : ""}>
        <input
          className={`${styles.input} ${isInvalid ? styles.invalid : ""}`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>

      <div className={styles.helper_wrapper}>
        {helperText && (
          <span
            className={`${styles.helper} ${isInvalid ? styles.invalidText : ""}`}
          >
            {`${helperText}  ${optional === "optional" ? "(optional)" : ""} ${optional === "required" ? "(required)" : ""}`}
          </span>
        )}
      </div>
    </div>
  </div>
);
