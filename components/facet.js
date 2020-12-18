import { TextField } from "@material-ui/core";
import { useContext } from "react";
import PropTypes from "prop-types";
import { MainContext } from "../context/mainContext";
import { helper } from "../utils";

export default function Facet({ data, name }) {
  const { state, send } = useContext(MainContext);

  data = [null, ...data];
  const { changeHandler } = helper(state, send);
  const mappedOptions = data.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <TextField
      name={name}
      select
      SelectProps={{ native: true }}
      placeholder={name}
      label={name}
      size="small"
      fullWidth
      value={state.context.filter[name]}
      variant="outlined"
      onChange={(e) => changeHandler(e, name)}
    >
      {mappedOptions}
    </TextField>
  );
}

Facet.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
