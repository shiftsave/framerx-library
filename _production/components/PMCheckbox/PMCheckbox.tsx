import * as React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import theme from "../../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

interface CheckboxProps {}

export class PMCheckbox extends React.Component<CheckboxProps> {
  static defaultProps = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Checkbox {...this.props} />
      </MuiThemeProvider>
    );
  }
}
