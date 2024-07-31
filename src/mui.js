import React, { forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import { StepConnector } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${StepConnector.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${StepConnector.active}`]: {
    [`& .${StepConnector.line}`]: {
      backgroundImage: `linear-gradient( 95deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
    },
  },
  [`&.${StepConnector.completed}`]: {
    [`& .${StepConnector.line}`]: {
      backgroundImage: `linear-gradient( 95deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
    },
  },
  [`& .${StepConnector.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
  }),
}));

export const PageBackground = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3, 0),
  }));

export function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
