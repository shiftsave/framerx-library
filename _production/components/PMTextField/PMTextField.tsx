import * as React from "react";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

interface TextFieldProps {}

export class PMTextField extends React.Component<TextFieldProps> {
  static defaultProps = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TextField {...this.props} />
      </MuiThemeProvider>
    );
  }
}
