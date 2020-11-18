import styles from '../styles/header.module.scss'
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import {useState} from "react";

export  default  function Header (){
const [searchText,setSearchText] = useState('')
    console.log(searchText)
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('submitted')
       setSearchText('')
    }

    const changeHandler = (e)=>{
setSearchText(e.target.value)
    }

    return <div className={styles.header}>
        <h1>CARS</h1>
        <Paper component={'form'}>
        <InputBase value={searchText} onChange={changeHandler} type={'text'} id='searchfield' variant={"outlined"}>
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
