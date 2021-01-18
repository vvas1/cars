import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";

const ImageUploadContainer = ({ handler, multiple, buttonLabel }) => (
  <div>
    <label htmlFor="upload">
      <Button variant="outlined" color="primary" component="label">
        <AttachFile />
        {buttonLabel}
        <input
          style={{ display: "none" }}
          id="upload"
          name="upload"
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={handler}
        />
      </Button>
    </label>
  </div>
);

ImageUploadContainer.propTypes = {
  handler: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  buttonLabel: PropTypes.string,
};

ImageUploadContainer.defaultProps = {
  multiple: false,
  buttonLabel: "Upload",
};

export default ImageUploadContainer;
