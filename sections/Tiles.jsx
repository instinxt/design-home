import React from "react";
import { WorkGrid } from "./WorkGrid";
import { workCard as dataPoints } from "../data/workCard";

const Tiles = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="font-poppins w-2/3 max-lg:text-3xl leading-normal max-sm:text-4xl text-main text-5xl font-normal text-center">
				Explore inspiring designs
			</div>
			<div className="flex flex-1 max-lg:flex-col flex-row gap-4 justify-between text-center pt-[40px]">
				<div className="flex flex-wrap gap-8">
					{dataPoints.map((data, id) => (
						<div key={id}>
							<WorkGrid data={data} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tiles;
