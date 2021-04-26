import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Message = ({ userName, message }) => {
  return (
    <Typography variant="body2">
      {userName}: {message}
    </Typography>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Message;
