import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchText("");
  };

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.header}>
      <Link href="/">
        <h1>
          <a>
            CARS
          </a>
        </h1>
      </Link>
      <Paper style={{ display: "flex", justifyContent: "stretch" }} component="form">
        <InputBase type="text" value={searchText} onChange={changeHandler} id="searchfield" variant="outlined">
          <Button className="search-button">
            <SearchIcon />
          </Button>
        </InputBase>
        <Button type="submit" onClick={submitHandler}>
          <SearchIcon />
        </Button>
      </Paper>
      <Button variant="outlined">Add a new car</Button>
    </div>
  );
}
