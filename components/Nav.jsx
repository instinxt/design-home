import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import Button from "@/components/Button";
import SearchInput from "@/components/SearchInput";

const NavLinks = [
	{ href: "/", key: "Find Designer", text: "Find Designer" },
	{ href: "/", key: "Inspiration", text: "Inspiration" },
	{ href: "/", key: "Jobs", text: "Jobs" },
	{ href: "/", key: "Go Pro", text: "Go Pro" },
];

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center mid-xl:grid mid-xl:grid-cols-[1fr_96px_1fr] h-[100px] border-nav-border px-6 lg:px-10">
			<div className="flex-1 flex justify-start items-center gap-1 xl:gap-10">
				<ul className="hidden lg:flex text-sm font-semibold gap-8">
					{NavLinks.map((link) => (
						<li key={link.key}>
							<Link
								href={link.href}
								className="flex items-center hover:opacity-80"
							>
								{link.text}{" "}
								{link.text === "Find Designer" && (
									<ChevronDownIcon className="ml-1" />
								)}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="flex w-1/3 justify-center items-center">
				<Link href="/" className="max-mid-xl:hidden">
					<Image
						src="/assets/logo/bribbble-logo.svg"
						alt="bribbble logo"
						className="w-24 h-[38px]"
						width={96}
						height={38}
					/>
				</Link>
			</div>

			<div className="flex justify-end items-center">
				<div className="flex justify-end items-center gap-6">
					<SearchInput />
					<Link
						href="/"
						className="hidden lg:flex font-semibold text-sm hover:opacity-80"
					>
						Log in
					</Link>
					<Button
						style="text-base p-3 text-white font-montserrat font-semibold"
						text="Sign Up"
						delay={0.5}
						hidden="show"
					/>
				</div>
			</div>
		</nav>
	);
}
