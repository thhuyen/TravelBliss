import React, { ReactNode } from "react";
import { FlexContainer, GlobalMessage } from "../StyleComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

type props = {
  children: string;
};

const NotificationMessage: React.FC<props> = ({ children }) => {
  return (
    <GlobalMessage>
      <FontAwesomeIcon icon={faCircleInfo} />
      &nbsp; &nbsp;
      <b>{children}</b>
    </GlobalMessage>
  );
};

export default NotificationMessage;
