"use client";

import { Dialog } from "@headlessui/react";
import { Settings, BarChart2, Layers } from "lucide-react";

export default function BudgetModal({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 rounded-md">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

            {/* Centered modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="mx-auto w-full max-w-md overflow-hidden shadow-lg bg-white rounded-b-2xl p-0">

                    {/* Top full-width background image (touches edges + top) */}
                    <div
                        className="w-full h-[213px] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/bg.svg')",
                        }}
                    />

                    {/* Modal Content */}
                    <div className="p-6 space-y-7">
                        <div className="flex gap-3 w-[344px] h-[74px]">
                            <Settings className="text-gray-600 w-6 h-6" />
                            <div>
                                <p className="font-semibold">Set up annual budgets by account category</p>
                                <p className="text-sm text-gray-500">
                                    Allocate funds across income and expense lines with full visibility.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 w-[344px] h-[54px]">
                            <BarChart2 className="text-gray-600 w-6 h-6" />
                            <div>
                                <p className="font-semibold">Track actuals vs budget in real time</p>
                                <p className="text-sm text-gray-500">
                                    See how your community is performing against plan, month by month.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 w-[344px] h-[54px]">
                            <Layers className="text-gray-600 w-6 h-6" />
                            <div>
                                <p className="font-semibold">Adjust figures and forecast with ease</p>
                                <p className="text-sm text-gray-500">
                                    Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
                        >
                            Create Budget
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
