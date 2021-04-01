import React,{useState,useEffect} from 'react'
 import {fetchDailyData } from '../../api'
 import { Line,Bar } from "react-chartjs-2";
import { StylesProvider } from '@material-ui/styles';
import styles from './Chart.module.css';
function Chart({data:{confirmed,deaths,recovered},country}) {
    const [dailyData,setDailyData]=useState([]);
    if(confirmed) console.log(confirmed.value)
    useEffect(() => {
        const fetchAPI= async ()=>{
            const fetchDailyData1= await fetchDailyData();
            console.log("dauly",fetchDailyData1);
            setDailyData(fetchDailyData1);
        }

        console.log(dailyData)
        fetchAPI();
    },[])

    const lineChart =(
        dailyData.length!=0  ? (<Line data={{
            labels: dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
            }]
        }}/>) : null
        
    );

    const barChart=(
        confirmed? (<Bar
        data={{
            labels:['infected','recovered','deaths'] ,
            datasets:[{
                label:'People',
                backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                data:[confirmed.value,recovered.value, deaths.value]
            }]  ,
            
        }}
        options={{
            legend:{display:false},
            title:{display:true, text:`Current state in ${country}`}
        }}
        
        />):null
    )


    return (
        <div className={styles.container}>
            {country? barChart:lineChart}
        </div>
    )
}

export default Chart
