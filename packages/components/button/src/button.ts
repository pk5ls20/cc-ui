import { ExtractPropTypes, PropType } from "vue"
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface';

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(
        value
      );
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'default',
    validator(value: ButtonSizeType) {
      return (['default', 'medium', 'small', 'mini', 'tiny'] as const).includes(value);
    }
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
    validator(value: ButtonNativeType) {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};

export type ButtonProps = ExtractPropTypes<typeof Props>;