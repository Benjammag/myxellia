"use client";

import { Dialog } from "@headlessui/react";
import { ChevronLeft, X, ChevronRight } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function CalendarDrawer({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) {
    const [value, setValue] = useState<Date>(new Date());

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

            {/* Right-side drawer */}
            <div className="fixed inset-y-0 right-0 flex">
                <Dialog.Panel className="h-full w-96 bg-black text-white shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#0C2841]">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-800"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <h2 className="text-lg font-semibold">Calendar</h2>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-800"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    {/* Calendar - fills remaining space */}
                    <div className="flex-1 p-4 flex">
                        <Calendar
                            onChange={(val) => setValue(val as Date)}
                            value={value}
                            prevLabel={<ChevronLeft className="w-4 h-4" />}
                            nextLabel={<ChevronRight className="w-4 h-4" />}
                            className="custom-calendar w-full h-full"
                        />
                    </div>
                </Dialog.Panel>
            </div>

            {/* Custom styles */}
            <style jsx global>{`
        .custom-calendar {
          background-color: black;
          border: none;
          color: white;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Reset unwanted defaults from react-calendar */
        .custom-calendar * {
          box-sizing: border-box;
        }
        .custom-calendar .react-calendar__month-view__days {
          display: grid !important;
          grid-template-columns: repeat(7, 1fr);
          grid-template-rows: repeat(6, 1fr);
          flex: 1;
          height: 100% !important;
        }

        /* Weekdays row */
        .custom-calendar .react-calendar__month-view__weekdays {
          display: grid !important;
          grid-template-columns: repeat(7, 1fr);
          border-bottom: 1px solid #1f2937;
          text-transform: uppercase;
          font-size: 0.75rem;
          color: #9ca3af;
        }

        /* Each day cell */
        .custom-calendar .react-calendar__tile {
          border: 1px solid #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: unset !important;
          height: 100% !important;
        }

        /* Outside month days */
        .custom-calendar .react-calendar__month-view__days__day--neighboringMonth {
          opacity: 0.5;
          color: #9ca3af;
        }

        /* Active + today styles */
        .custom-calendar .react-calendar__tile--active {
          background: #2563eb !important;
          color: white !important;
        }

        .custom-calendar .react-calendar__tile--now {
          border: 2px solid #2563eb;
        }
      `}</style>
        </Dialog>
    );
}