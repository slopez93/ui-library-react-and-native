import React, { ComponentProps } from "react";
import { Text as DripsyText } from "dripsy";

type TextProps = ComponentProps<typeof DripsyText>;

const Text = ({ sx, ...props }: TextProps) => {
  return <DripsyText sx={{ ...sx }} {...props} />;
};

export default Text;
