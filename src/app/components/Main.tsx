"use client";
import { UilSun, UilMoon } from "@iconscout/react-unicons";
import SearchBar from "./SearchBar";
import Report from "./Report";
import NextDaysReport from "./NextDaysReport";
import { useState } from "react";

export default function Main() {
	const [searchValue, setSearchValue] = useState<[]>([]);

	return (
		<div>
			<div className="p-4 md:flex md:flex-col items-center justify-center bg-blue-900  h-full">
				<div className="flex-shrink-0 mb-4 flex flex-wrap justify-center">
					<UilSun size="60" className="text-yellow-500" />
					<UilMoon size="60" className="text-gray-500" />
				</div>
				<h1 className="text-5xl text-white font-bold mb-4 text-center">
					WEATHER REPORT
				</h1>
				<header>
					<SearchBar setSearchValue={setSearchValue}/>
				</header>
			</div>
			<div className="min-h-screen bg-[url('https://images3.alphacoders.com/743/743994.jpg')] bg-no-repeat bg-cover">
				<div>
					<Report searchValue={searchValue}/>
				</div>
				<div>
					<NextDaysReport searchValue={searchValue}/>
				</div>
			</div>
		</div>
	);
}
