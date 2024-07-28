"use client";

import { Search } from "lucide-react";

const SearchInput = () => {
	return (
		<>
			<div className="hidden xl:flex justify-between items-center h-12 rounded-full focus-within:outline-none focus-within:ring-0 bg-slate-200">
				<Search className="h-5 w-5 ms-5 me-2 text-muted-foreground" />
				<input
					placeholder="Search..."
					className="h-8 border-none shadow-none pl-0 focus-visible:ring-0 bg-slate-200 mr-2"
				/>
			</div>
		</>
	);
};

export default SearchInput;
