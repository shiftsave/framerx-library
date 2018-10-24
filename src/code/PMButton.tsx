import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { PMButton as _PMButton } from "../lib";

interface Props {
  text: string;
  color?: "primary" | "secondary";
  variant?: "text" | "flat" | "outlined" | "contained" | "raised" | "fab";
  disabled?: true | false;

  // Width and height of the component when loaded in the canvas
  width: number;
  height: number;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "dummy text",
    size: "md",
    color: "primary",
    disabled: false
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "text" },
    color: {
      type: ControlType.SegmentedEnum,
      options: ["primary", "secondary"],
      title: "hi roque"
    },
    variant: {
      type: ControlType.Enum,
      options: ["text", "flat", "outlined", "contained", "raised", "fab"],
      title: "Variant"
    },
    disabled: {
      type: ControlType.Boolean,
      title: "Disabled?"
    }
  };

  render() {
    return <_PMButton {...this.props}>{this.props.text}</_PMButton>;
  }
}
