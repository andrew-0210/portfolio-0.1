import Image from "next/image";
import andrew_logo from "@/app/assets/images/drew_logo.svg";
import Link from "next/link";
import { navLinks } from "@/constants/navlinks";

export default function Navbar() {
	return (
		<header className="container py-[0.5rem] w-full fixed top-0 z-[999]">
			<nav className="px-[1.25rem] md:px-[4.5rem] flex justify-between items-center">
				<Link href="/#home">
					<div className="w-[3.75rem] h-[3.75rem] md:w-[5rem] md:h-[5rem] relative">
						<Image
							src={andrew_logo}
							alt="andrew logo"
							fill
							priority={true}
							className="object-contain"
						/>
					</div>
				</Link>
				<ul className="flex flex-1 justify-center">
					{navLinks.map((link, i) => {
						return (
							<li
								key={i}
								className="px-[1rem] py-[0.5rem]">
								<Link href={link.href}>{link.title}</Link>
							</li>
						);
					})}
				</ul>
				<button>Resume</button>
			</nav>
		</header>
	);
}
