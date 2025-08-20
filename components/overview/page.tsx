// components/Hero.tsx
"use client"; // if using Next.js app router

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { Home, ChevronRight, Users } from "lucide-react";

const data = [
    { name: "Jan", inflow: 35, mrr: 28, gmv: 10 },
    { name: "Feb", inflow: 5, mrr: 28, gmv: 10 },
    { name: "Mar", inflow: 15, mrr: 8, gmv: 3 },
    { name: "Apr", inflow: 15, mrr: 25, gmv: 10 },
    { name: "May", inflow: 10, mrr: 5, gmv: 8 },
    { name: "Jun", inflow: 37, mrr: 50, gmv: 10 },
    { name: "Jul", inflow: 25, mrr: 38, gmv: 19 },
    { name: "Aug", inflow: 25, mrr: 9, gmv: 20 },
    { name: "Sep", inflow: 38, mrr: 36, gmv: 9 },
];

export default function Hero() {
    return (
        <section className="bg-white px-6 py-8">
            <div className="container mx-auto">
                {/* Page heading */}
                <h1 className="text-xl font-bold mb-6">Welcome, Ahmed</h1>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left side */}
                    <div className="col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-xl font-bold">Sales Overview</h2>
                                <p className="text-gray-500 text-sm">
                                    Showing overview Jan 2022 - Sep 2022
                                </p>
                            </div>
                            <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
                                View Transactions
                            </button>
                        </div>

                        {/* Filters aligned right */}
                        <div className="flex justify-end space-x-4 mb-6 text-gray-400">
                            <h1 className="cursor-pointer hover:text-gray-600">1 Week</h1>
                            <h1 className="cursor-pointer hover:text-gray-600">1 Month</h1>
                            <h1 className="cursor-pointer hover:text-gray-600">1 Year</h1>
                        </div>

                        {/* Chart + Stats side by side */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
                            {/* Chart on the left */}
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                                        <XAxis dataKey="name" />
                                        <YAxis domain={[0, 50]} /> {/* Limit max to 50 */}
                                        <Tooltip />
                                        <Bar dataKey="inflow" fill="#5b68dcff" />
                                        <Bar dataKey="mrr" fill="#22c55e" />
                                        <Bar dataKey="gmv" fill="#ef4444" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Stats on the right */}
                            <div className="grid grid-cols-2 gap-4 content-center h-72">
                                <div className="p-4 rounded-xl border bg-white shadow-sm">
                                    <p className="text-indigo-600 font-bold">₦120,000,000.00</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm text-gray-500">Total Inflow</p>
                                        <p className="text-green-500 text-xs font-medium">▲ 2.5%</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border bg-white shadow-sm">
                                    <p className="text-green-600 font-bold">₦50,000,000.00</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm text-gray-500">MRR</p>
                                        <p className="text-green-500 text-xs">▲ 2.5%</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border bg-white shadow-sm">
                                    <p className="text-emerald-600 font-bold">₦200,000,000.00</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm text-gray-500">Commission Revenue</p>
                                        <p className="text-green-500 text-xs">▲ 0.5%</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border bg-white shadow-sm">
                                    <p className="text-red-600 font-bold">₦100,000,000.00</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm text-gray-500">GMV</p>
                                        <p className="text-red-500 text-xs">▼ 0.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col h-full space-y-6">
                        {/* Listings Overview */}
                        <div className="bg-white rounded-2xl shadow p-6 flex-1">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <Home className="w-5 h-5 text-blue-600" />
                                    <h3 className="font-semibold text-gray-800">Listings Overview</h3>
                                </div>
                                <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                    View all
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 text-center">
                                <div>
                                    <p className="text-lg font-bold">1.8k</p>
                                    <p className="text-sm text-gray-500">Total</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">80</p>
                                    <p className="text-sm text-gray-500">Active</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">1k</p>
                                    <p className="text-sm text-gray-500">Archived</p>
                                </div>
                            </div>
                        </div>

                        {/* Users Overview */}
                        <div className="bg-white rounded-2xl shadow p-6 flex-1">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <h3 className="font-semibold">Users Overview</h3>
                                </div>
                                <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                    View all
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="grid grid-cols-3 text-center h-full">
                                <div>
                                    <p className="font-bold">20.7k</p>
                                    <p className="text-xs text-gray-500">Total</p>
                                </div>
                                <div>
                                    <p className="font-bold">8.5k</p>
                                    <p className="text-xs text-gray-500">Riders</p>
                                </div>
                                <div>
                                    <p className="font-bold">7.5k</p>
                                    <p className="text-xs text-gray-500">Subscribers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
