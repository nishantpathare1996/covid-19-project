import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
function CountryPicker({handleCountryChange}) {
    const [fetchedCountries,setFetchedCountries]=useState([])
    useEffect(()=>{
        const fetchApi= async ()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchApi();
    },[setFetchedCountries])

    console.log("fetched countires",fetchedCountries)
    
    return (
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
