export interface InputInterface {
  type?: "text" | "email" | "number";
  optional?: "" | "optional" | "required";
  quiet?: boolean;
  disabled?: boolean;
  label?: string;
  infoIconText?: string;
  placeholder?: string;
  helperText?: string;
  size?: "extra_small" | "medium" | "large" | "extra_large";
  isInvalid?: boolean;
  positionLeft?: boolean;
}
