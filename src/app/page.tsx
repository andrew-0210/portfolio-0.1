import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Experience />
		</main>
	);
}
