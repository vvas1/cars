import styles from '../styles/header.module.scss'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {Divider} from "@material-ui/core";
import {useState} from "react";

export  default  function Header (){

    const submitHandler=(e)=>{
        e.preventDefault()


        console.log('submitted')
    }
    return <div className={styles.header}>
        <h1>CARS</h1>
        <Paper component={'form'}>
        <InputBase id='searchfield' variant={"outlined"}>
            <Button className={'search-button'}>
                <SearchIcon />
            </Button>
        </InputBase>
            <Button type={'submit'} onClick={submitHandler}>
                <SearchIcon />
            </Button>

            </Paper>

        <Button variant="outlined">Add a new car</Button>
    </div>
}
