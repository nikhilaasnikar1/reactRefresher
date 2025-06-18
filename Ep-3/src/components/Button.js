import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

function TopButton({
  variant = "contained",
  label = "Search",
  onClick,
  size = "large",
  color = "primary",
  disabled = false,
  testid = "",
  sx = {},
  name = "",
}) {
  return (
    <Button
      color={color}
      onClick={(e) => {
        e.target.name = name;
        onClick(e);
      }}
      variant={variant}
      size={size}
      disabled={disabled}
      data-testid={testid}
      sx={sx}
    >
      {label}
    </Button>
  );
}

TopButton.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
  sx: PropTypes.shape({}),
  name: PropTypes.string,
};

export default TopButton;
