import Image from "next/image";
import andrew_logo from "@/assets/images/drew_logo.svg";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import Button from "../ui/Button";

export default function Navbar() {
	return (
		<header className="py-[0.125rem] w-full fixed top-0 z-[999] bg-[#080808]/20 backdrop-blur-sm">
			<nav className="container px-[1.25rem] md:px-[4.5rem] flex justify-between items-center">
				<Link href="#home">
					<div className="w-[3.75rem] h-[3.75rem] md:w-[4rem] md:h-[4rem] relative">
						<Image
							src={andrew_logo}
							alt="andrew logo"
							fill
							priority={true}
							className="object-contain"
						/>
					</div>
				</Link>
				<ul className="md:flex flex-1 justify-center hidden ">
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
				<Button className="shadow-[0px_4px_0px_rgba(188,66,0,1)]">
					<a
						href="/documents/Andrew_Monthero_UI-UX_Designer_Resume.pdf"
						download>
						Resume
					</a>
				</Button>
			</nav>
		</header>
	);
}
