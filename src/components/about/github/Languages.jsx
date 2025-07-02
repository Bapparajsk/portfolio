"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/charts"
import { Card, CardBody, CardHeader } from '@heroui/card';
import { useQuery } from '@tanstack/react-query';

const chartData = [
    { name: "TypeScript", value: 70,  fill: "pink" },
    { name: "JavaScript", value: 10,  fill: "blue" },
    { name: "CSS", value: 5,  fill: "green" },
    { name: "HTML", value: 3,  fill: "yellow" },
    { name: "Java", value: 2,  fill: "orange" },
    // { name: "Java", value: 214,  fill: "purple" },
]

const chartConfig = {
    value: {
        label: "value",
        color: "hsl(var(--chart-1))",
    },
    label: {
        color: "hsl(var(--background))",
    },
}

export const Languages = () => {

    const { data, isPending, isError } = useQuery({
        queryKey: ['github-languages'],
        queryFn: async () => {
            const res = await fetch("/api/github/toplanguages");
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            console.log("GitHub Languages Data:", data);
            
            return data.map(item => ({
                name: item.language,
                value: parseFloat(item.percent),
                fill: item.color || "#8884d8", // Fallback color if not provided
            }));
        },
        gcTime: 1000 * 60 * 60 * 24, // 1 day
        refetchOnWindowFocus: false,
    })

    return (
        <Card fullWidth className=' bg-[#f1efe7] dark:bg-[#151B23] border border-[#173043] overflow-hidden'>
            <CardHeader>
                <h3 className='text-md md:text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-200 text-heading-3'>GitHub Languages</h3>
            </CardHeader>
            <CardBody >
                {data && <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={data}
                        layout="vertical"
                        margin={{
                            left: 20,
                        }}
                    >
                        <YAxis
                            dataKey="name"
                            type="category"
                            className='!text-white font-semibold'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <XAxis dataKey="value" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Bar
                            dataKey="value"
                            layout="vertical"
                            radius={4}
                        >
                            <LabelList
                                dataKey="value"
                                position="insideLeft"
                                offset={8}
                                style={{
                                    fill: '#fff',
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                }}
                                className="fill-foreground"
                                fontSize={12}
                                formatter={(value) => `${value}%`}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>}
                {(isPending || isError) && (
                    <div className="w-full h-[300px] flex items-center justify-center">
                        <p>
                            {isError ? <span className="text-danger-500">Failed to load languages. Please try again later.</span> : "Loading languages..."}
                        </p>
                    </div>
                )}
            </CardBody>
        </Card>
    );
}