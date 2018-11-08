import * as React from "react";
import Radio from "@material-ui/core/Radio";
import theme from "../../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

interface RadioProps {}

export class PMRadio extends React.Component<RadioProps> {
  static defaultProps = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Radio {...this.props} />
      </MuiThemeProvider>
    );
  }
}
