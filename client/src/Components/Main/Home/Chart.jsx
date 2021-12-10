import {useState, useEffect} from 'react'
import { parseISO } from 'date-fns'
// import { Line } from 'react-chartjs-2';

const Chart = ({chartData}) => {

    const [dateFilter, setDateFilter] = useState('')

    useEffect(() => {
        const sortDates = chartData.filter(data => {
            const dates = parseISO(data.created_at).toLocaleDateString()
            return dates
        })
        setDateFilter(sortDates)
        
    }, [chartData])
    
    console.log(dateFilter)
    return (
        <div>
            
        </div>
    )
}

export default Chart
