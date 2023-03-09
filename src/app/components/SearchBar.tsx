import { UilCloudMoon, UilSearchAlt } from "@iconscout/react-unicons";

export default function SearchBar() {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search for a city..."
				className="border-black border-2 rounded-md md:h-10 md:w-96 md:pl-2 h-9 w-[100%] pl-2"
			/>
			<div className="absolute inset-y-0 md:right-2 pr-0 flex items-center pointer-events-none right-4">
				<UilSearchAlt />
			</div>
		</div>
	);
}
