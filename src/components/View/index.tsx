import React, { ComponentProps } from "react";
import { View as DripsyView } from "dripsy";

type Props = ComponentProps<typeof DripsyView>;

const View = ({ sx, ...props }: Props) => {
  return <DripsyView sx={sx} {...props} />;
};

export default View;
