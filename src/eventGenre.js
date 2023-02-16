import React, {useEffect, useState} from "react";
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';


export const EventGenre = ({ events }) => {
const [data, setData] = useState([]);

const colors = ['#695978', '#4B4FDE', '#E2C785', '#AB7829', '#a855f7'];

useEffect(() => {
    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return { name: genre, value}
        })
        return data;
    }
    setData(() => getData());
}, [events]);

return (
    <ResponsiveContainer height={400} >
        <PieChart width={400} height={400}>
            <Pie 
                data={data} 
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#a855f7"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100 ).toFixed(0)}%`}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
)
}