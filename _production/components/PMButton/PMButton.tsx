import * as React from "react";
import Button from "@material-ui/core/Button";

interface ButtonProps {
  text: string;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  color?: "primary" | "secondary";

  variant?: "text" | "flat" | "outlined" | "contained" | "raised" | "fab";

  disabled?: true | false;
}

export class PMButton extends React.Component<ButtonProps> {
  static defaultProps = {
    text: "Text",
    color: "primary",
    variant: "text",
    disabled: false
  };

  render() {
    const { disabled, color, text, variant } = this.props;

    return (
      <Button disabled={disabled} color={color} variant={variant}>
        {text}
      </Button>
    );
  }
}
