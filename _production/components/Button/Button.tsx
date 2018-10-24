import * as React from "react";
import classNames from "classnames";
import { SIZE_OPTIONS } from "../../constants/ui-constants";
import Button from "@material-ui/core/Button";

import "./button.less";

interface ButtonProps {
  /** Size (according to our standard "t-shirt" sizes) */
  size: SIZE_OPTIONS;

  /** Click callback  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  buttonType?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "toggle";

  /** Remove border and background. On hover, `knockout` buttons have a colored background with light text. `naked` buttons don't have a background color. */
  borderless?: "knockout" | "naked";

  /** Fill 100% of container width */
  fullWidth?: boolean;

  /** Apply disabled styling and remove pointer events */
  disabled?: boolean;

  /* Show loading spinner */
  loading?: boolean;

  /** Make the left edge square */
  isLeftLockup?: boolean;

  /** Make the right edge square */
  isRightLockup?: boolean;

  /* Optional classes for eventual customization */
  className?: string;

  /**
   * The type of button - defaults to "button" to avoid submitting forms
   * upon click which is the default behavior for a button.
   */
  type?: string;

  color: "peachpuff" | "cadetblue";

  headingText?: string;
}

export class PMButton extends React.Component<ButtonProps> {
  static defaultProps = {
    size: SIZE_OPTIONS.MEDIUM,
    buttonType: "default",
    borderless: null,
    fullWidth: false,
    isLeftLockup: false,
    isRightLockup: false,
    disabled: false,
    loading: false,
    type: "button",
    color: "peachpuff",
    headingText: "default heading"
  };
  render() {
    const {
      className,
      children,
      size,
      buttonType,
      borderless,
      fullWidth,
      isLeftLockup,
      isRightLockup,
      disabled,
      loading,
      type,
      ...other
    } = this.props;

    return <Button>dude wtf</Button>;
  }
}
