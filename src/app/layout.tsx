import "./style/globals.css";
import Main from "./components/Main";

export const metadata = {
	title: "Weather Report",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="font-hanken">
			<body>
				<Main />
				<div>{children}</div>
			</body>
			<footer>
				<div className="flex justify-center items-center h-16 bg-black text-white">
					<p>Created by @guilhermefrag</p>
				</div>
			</footer>
		</html>
	);
}
