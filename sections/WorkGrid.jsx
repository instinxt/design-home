import { BookmarkIcon, HeartIcon } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import Image from "next/image";

export const WorkGrid = ({ data }) => {
	return (
		<div className="flex flex-col gap-2 text-center">
			<Image
				src={data.image}
				alt={data.imageText}
				width={316}
				height={237}
				className="object-contain rounded-lg contrast-[0.95]"
			/>

			<div className="flex justify-between items-center text-left">
				<Image
					src={data.avatar}
					alt={data.profileName}
					width={6}
					height={6}
					className="object-cover rounded-lg contrast-[0.95] h-6 w-6 text-left"
				/>
				<p className="text-sm font-medium w-1/2 truncate">{data.profileName}</p>
				<div className="flex items-center gap-2">
					<div className="flex items-center space-x-[2px]">
						<FaHeart className="w-4 h-4 fill-current text-[#9e9ea7]" />
						<p className="text-xs font-medium text-[#3d3d4e]">{data.likes}</p>
					</div>
					<div className="flex items-center space-x-[2px]">
						<IoEye className="w-4 h-4 fill-current text-[#9e9ea7]" />
						<p className="text-xs font-medium text-[#3d3d4e]">{data.views}k</p>
					</div>
				</div>
			</div>
		</div>
	);
};
