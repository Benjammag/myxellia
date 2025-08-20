"use client";

import { useState } from "react";
import Image from "next/image";

const listings = [
    {
        title: "MOST CLICKED",
        subtitle: "Urban Prime Plaza Premiere",
        images: ["/images/first.jpg", "/images/building2.jpg"],
    },
    {
        title: "MOST WATCHLISTED",
        subtitle: "Urban Prime Plaza Premiere",
        images: [
            "/images/second.svg",
            "/images/first.jpg",
            "/images/building1.jpg",
            "/images/building3.jpg",
            "/images/building2.jpg",
        ],
    },
    {
        title: "HOTTEST LISTING",
        subtitle: "Urban Prime Plaza Premiere",
        images: [
            "/images/last.svg",
            "/images/building1.jpg",
            "/images/building2.jpg",
            "/images/building1.jpg",
            "/images/building3.jpg",
        ],
    },
];

export default function FeaturedListings() {
    return (
        <section className="px-6 py-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {listings.map((listing, i) => (
                    <Card
                        key={i}
                        listing={listing}
                        isLast={i === listings.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}

function Card({
    listing,
    isLast,
}: {
    listing: (typeof listings)[0];
    isLast: boolean;
}) {
    const [current, setCurrent] = useState(0);

    return (
        <div className="relative w-full max-w-[500px] h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg bg-black">
            {/* Chat icon */}
            {isLast && (
                <button className="absolute top-4 right-0 bg-gray-900/80 p-2 rounded-full shadow-md hover:bg-gray-800 z-10">
                    <Image
                        src="/images/footer.svg"
                        alt="Chat"
                        width={30}
                        height={30}
                    />
                </button>
            )}

            {/* Active image */}
            <Image
                src={listing.images[current]}
                alt={listing.subtitle}
                fill
                className="object-cover transition-all duration-500"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-14 left-4 text-white">
                <p className="text-xs uppercase tracking-wide">{listing.title}</p>
                <p className="font-semibold">{listing.subtitle}</p>
            </div>

            {/* Dots (center bottom) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {listing.images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full ${
                            current === index ? "bg-white" : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
