import React, { ComponentProps } from "react";
import { Text as DripsyText } from "dripsy";

type Props = ComponentProps<typeof DripsyText>;

const Text = ({ sx, ...props }: Props) => {
  return <DripsyText sx={{ ...sx }} {...props} />;
};

export default Text;
