"use client"

import * as React from "react"
import { CartesianGrid, LineChart, XAxis, Line, YAxis } from "recharts"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Button } from "@heroui/button"
import { useQuery } from "@tanstack/react-query";

import {
    Card,
    CardBody,
    CardHeader,
} from "@heroui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/charts"
import { Spinner } from "@heroui/spinner";

const chartConfig = {
    views: {
        label: "Page Views",
    },
    contributionCount: {
        label: "Desktop",
        color: "hsl(var(--chart-2))",
    },
}

export function Contributions() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["2025"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
        [selectedKeys],
    );

    const { data, isPending, isError } = useQuery({
        queryKey: ["contributions", selectedValue],
        queryFn: async () => {
            const res = await fetch(`/api/github/contributions?year=${selectedValue}`);
            if (!res.ok) {
                throw new Error("Failed to fetch contributions data");
            }
            const data = await res.json();
            console.log("Contributions data:", data);

            return data;
        },
        refetchOnWindowFocus: false,
    })

    return (
        <Card fullWidth className="w-full bg-[#151B23]">
            <CardHeader>
                <div className="w-full flex justify-between items-center">
                    <h3 className="text-md md:text-xl lg:text-2xl font-bold">
                        Contributions
                    </h3>
                    <Dropdown backdrop="opaque">
                        <DropdownTrigger>
                            <Button variant="ghost" color="primary" radius="lg" isLoading={isPending} isDisabled={isError}>
                                <span className="font-semibold">{selectedValue}</span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Select Year"
                            selectedKeys={selectedKeys}
                            selectionMode="single"
                            variant="flat"
                            onSelectionChange={setSelectedKeys}
                        >
                            {["2021", "2022", "2023", "2024", "2025"].reverse().map(e => (
                                <DropdownItem key={e}> {e} </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </CardHeader>
            <CardBody className="px-2 sm:p-6">
                {(isPending || isError) && (
                    <div className="flex items-center justify-center h-[250px]">
                        {isPending && <Spinner size="lg" />}
                        {isError && <p className="text-red-500">Failed to load contributions data</p>}
                    </div>
                )}
                {data && <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <YAxis
                            dataKey="contributionCount"
                            tickLine={false}
                            axisLine={false}
                            allowDecimals={false}
                            tickMargin={8}
                            minTickGap={10}
                            tickFormatter={(value) => {
                                return value.toLocaleString();
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    keyLabel="contribution"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={"contributionCount"}
                            type="monotone"
                            stroke={`blue`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>}
            </CardBody>
        </Card>
    )
}
