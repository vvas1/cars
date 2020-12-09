import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import { FormControlLabel } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import { useCallback, useContext } from "react";
import { useRouter } from "next/router";
import classes from "../styles/filter.module.css";
import { colors, brands, years } from "../configs";
import { MainContext } from "../context/mainContext";

export default function Filters() {
  const {
    state,
    send,
  } = useContext(MainContext);
  const router = useRouter();

  const fetchData = useCallback(() => {
    router.push({
      pathname: "/search",
      query: state.context.filter,
    });
  }, [state.context.filter]);

  const changeHandler = (e, item) => {
    if (e.target.checked) {
      send({
        type: `ADD_${item.toUpperCase()}`,
        [item]: [...state.context.filter[item], e.target.value],
      });
      fetchData();
      return;
    }

    send({
      type: `ADD_${item.toUpperCase()}`,
      [item]: state.context.filter[item].filter(
        (value) => value !== e.target.value,
      ),
    });
    fetchData();
  };

  const mappedBrands = brands.map((value) => (
    <FormGroup className={state.context.filter.brand.includes(value) ? classes.filter_list_item_checked : classes.filter_list_item} key={value} aria-label={value}>
      <FormControlLabel
        onChange={(e) => changeHandler(e, "brand")}
        value={value}
        checked={state.context.filter.brand.includes(value)}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));
  const mappedColors = colors.map((value) => (
    <FormGroup key={value} aria-label={value} className={state.context.filter.color.includes(value) ? classes.filter_list_item_checked : classes.filter_list_item}>
      <FormControlLabel
        onChange={(e) => changeHandler(e, "color")}
        value={value}
        checked={state.context.filter.color.includes(value)}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));

  const mappedYears = years.map((value) => (
    <FormGroup key={value} aria-label={value} className={state.context.filter.year.includes(`${value}`) ? classes.filter_list_item_checked : classes.filter_list_item}>
      <FormControlLabel
        onChange={(e) => changeHandler(e, "year")}
        value={value}
        checked={state.context.filter.year.includes(`${value}`)}
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
      <List style={{ display: "flex", flexWrap: "wrap", width: "450px" }}>
        {mappedYears}
      </List>
    </div>
  );
}
