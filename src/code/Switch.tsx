import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { PMSwitch as _PMSwitch } from "../lib";

interface Props {
  color: "primary" | "secondary" | "default";
  disabled: boolean;
  checked: boolean;

  // Width and height of the component when loaded in the canvas
  width: number;
  height: number;
}

export class Switch extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    color: "secondary",
    disabled: false,
    checked: false
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    color: {
      type: ControlType.Enum,
      options: ["primary", "secondary", "default"],
      title: "Color"
    },
    disabled: {
      type: ControlType.Boolean,
      title: "Disabled"
    },
    checked: {
      type: ControlType.Boolean,
      title: "checked"
    }
  };

  render() {
    return <_PMSwitch {...this.props} />;
  }
}
