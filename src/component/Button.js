import React from "react";
import "./Button.css"

export default function SimpleButton({
  type = "submit",
  children,
  color,
  outlined = false,
  flat = false,
  ...buttonProps
}) {
  const isDisabled = (classes) => {
    const getButtonObj = { ...buttonProps };
    
    return getButtonObj.disabled ? classes + " disabled" : classes;
  };

  const getButtonClasses = (color, outlined, flat) => {
    let classes = getColor(color, outlined);
    classes = getFlatClass(classes, flat);
    classes = isDisabled(classes);
    return classes;
  };

  const getFlatClass = (classes, flat) => {
     
    return flat ? classes : classes + " elevate";
  };

  const getColor = (color, outlined) => {
    let buttonColor = "";

    switch (color) {
      case "secondary":
        buttonColor = "secondary";
        break;
      case "success":
        buttonColor = "success";
        break;

      case "warning":
        buttonColor = "warning";
        break;

      case "danger":
        buttonColor = "danger";
        break;

      default:
        buttonColor = "primary";
        break;
    }
    buttonColor = isOutlined(buttonColor, outlined);

    return buttonColor;
  };

  const isOutlined = (buttonColor, outlined) => {
   
    return outlined ? buttonColor + "-outlined" : buttonColor
  };

  return (
    <button
      type={type}
      className={getButtonClasses(color, outlined, flat)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}


