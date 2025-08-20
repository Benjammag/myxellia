"use client";
import Link from "next/link";
import { Home, Briefcase, User, FileText, CreditCard, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BudgetModal from "../budgeting/page";
import { Dispatch, SetStateAction } from "react";
import CalendarDrawer from "../calender/page";

interface NavbarProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
    const [openBudgetModal, setOpenBudgetModal] = useState(false);
    const [openCalendarDrawer, setOpenCalendarDrawer] = useState(false); // ✅ calendar state

    return (
        <header className="w-full">
            {/* Top black bar */}
            <div className="bg-black text-white">
                <div className="container mx-auto flex justify-between items-center px-6 py-3">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <button className="flex">
                            <Image
                                src="/images/logo.svg"
                                alt="Logo"
                                width={20}
                                height={20}
                            />
                            <span className="text-xl font-bold m-1">myxellia</span>
                        </button>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-6 h-[40px]">
                        <div className="flex space-x-6">
                            <Link href="#">
                                <Image
                                    className="cursor-pointer"
                                    src="/images/bell.svg"
                                    alt="Bell"
                                    width={32}
                                    height={32}
                                />
                            </Link>

                            {/* Budget button → opens modal */}
                            <Link href="#">
                                <button onClick={() => setOpenBudgetModal(true)}>
                                    <Image
                                        className="cursor-pointer"
                                        src="/images/calc.svg"
                                        alt="Budget"
                                        width={32}
                                        height={32}
                                    />
                                </button>
                            </Link>

                            <Link href="#">
                                <button onClick={() => setOpenCalendarDrawer(true)}>
                                    <Image
                                        className="cursor-pointer"
                                        src="/images/calendar.svg"
                                        alt="Calendar"
                                        width={32}
                                        height={32}
                                    />
                                </button>
                            </Link>

                            <Link href="#">
                                <Image
                                    className="cursor-pointer"
                                    src="/images/message.svg"
                                    alt="Messages"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </div>

                        {/* Profile */}
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black font-bold">
                            D
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom white bar */}
            <div className="bg-white border-b">
                <div className="container mx-auto flex justify-between items-center px-6 py-3">
                    {/* Nav Links */}
                    <nav className="flex items-center space-x-6">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100"
                        >
                            <Home className="w-4 h-4" />
                            <span className="font-medium">Dashboard</span>
                        </Link>
                        <Link
                            href="/listings"
                            className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-md"
                        >
                            <Briefcase className="w-4 h-4" />
                            <span>Listings</span>
                        </Link>
                        <Link
                            href="/users"
                            className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-md"
                        >
                            <User className="w-4 h-4" />
                            <span>Users</span>
                        </Link>
                        <Link
                            href="/request"
                            className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-md"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Request</span>
                        </Link>
                        <Link
                            href="/applications"
                            className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-md"
                        >
                            <CreditCard className="w-4 h-4" />
                            <span>Applications</span>
                        </Link>
                    </nav>

                    {/* Search bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search listings, users here..."
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none w-[316px] h-[43px]"
                        />
                    </div>
                </div>
            </div>

            {/* Budget Modal */}
            {openBudgetModal && (
                <BudgetModal isOpen={openBudgetModal} setIsOpen={setOpenBudgetModal} />
            )}

            {/* Calendar Drawer */}
            {openCalendarDrawer && (
                <CalendarDrawer isOpen={openCalendarDrawer} setIsOpen={setOpenCalendarDrawer} />
            )}
        </header>
    );
}
