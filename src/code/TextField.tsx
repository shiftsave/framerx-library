import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { PMTextField as _PMTextField } from "../lib";

interface Props {
  variant?: "text" | "flat" | "outlined" | "contained" | "raised" | "fab";
  margin?: "none" | "dense" | "normal";
  label?: string;
  helperText?: string;
  placeholder?: string;
  disabled?: true | false;

  // Width and height of the component when loaded in the canvas
  width: number;
  height: number;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    label: "label",
    helperText: "",
    placeholder: "placeholder",
    disabled: false,
    margin: "none"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    label: { type: ControlType.String, title: "label" },
    helperText: { type: ControlType.String, title: "helper text" },
    placeholder: { type: ControlType.String, title: "placeholder" },
    margin: {
      type: ControlType.Enum,
      options: ["none", "dense", "normal"],
      title: "margin"
    },
    variant: {
      type: ControlType.Enum,
      options: ["standard", "outlined", "filled"],
      title: "Variant"
    },
    disabled: {
      type: ControlType.Boolean,
      title: "Disabled"
    }
  };

  render() {
    return <_PMTextField {...this.props} />;
  }
}
