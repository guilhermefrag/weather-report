import { UilCloudMoon, UilSearchAlt } from "@iconscout/react-unicons";

export default function SearchBar() {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search for a city..."
				className="border-black border-2 rounded-md h-10 w-96 pl-2"
			/>
			<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<UilSearchAlt />
			</div>
		</div>
	);
}
