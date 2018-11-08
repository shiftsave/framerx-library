import * as React from "react";
import Button from "@material-ui/core/Button";
import theme from "../../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

interface ButtonProps {
  text: string;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  color?: "primary" | "secondary";

  variant?: "text" | "outlined" | "contained" | "fab";

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
      <MuiThemeProvider theme={theme}>
        <Button disabled={disabled} color={color} variant={variant}>
          {text}
        </Button>
      </MuiThemeProvider>
    );
  }
}
