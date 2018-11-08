import * as React from "react";
import Switch from "@material-ui/core/Switch";
import theme from "../../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

interface RadioProps {}

export class PMSwitch extends React.Component<RadioProps> {
  static defaultProps = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch {...this.props} />
      </MuiThemeProvider>
    );
  }
}
