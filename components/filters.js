import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import { FormControlLabel } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import "../styles/filter.module.scss";
import { useState } from "react";
import { colors, brands } from "../configs";

export default function Filters() {
  const [brandFilters, setBrandFilters] = useState([]);
  const brandChangeHandler = (e) => {
    if (e.target.checked) {
      setBrandFilters([...brandFilters, e.target.value]);
      return;
    }
    setBrandFilters(brandFilters.filter((value) => value !== e.target.value));
  };

  const mappedBrands = brands.map((value) => (
    <FormGroup className="filter-list-item" key={value} aria-label={value}>
      <FormControlLabel
        onChange={brandChangeHandler}
        value={value}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));
  const mappedColors = colors.map((value) => (
    <FormGroup className="filter-list-item" key={value} aria-label={value}>
      <FormControlLabel
        value={value}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));

  return (
    <div style={{ display: "flex" }}>
      <List>
        {mappedBrands}
      </List>
      <List>
        {mappedColors}
      </List>
    </div>
  );
}
