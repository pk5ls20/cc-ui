import type { ButtonHTMLAttributes } from "vue";

export type ButtonSizeType = "default" | "medium" | "small" | "mini" | "large";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "danger"
  | "warning";

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes["type"]>;
