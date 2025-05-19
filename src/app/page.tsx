import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen px-6 py-16">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">Pixel-To-Product</h1>
        <p className="mt-4 text-lg text-gray-600">From Design Ideas to Real-World Applications</p>
      </header>

      <section className="max-w-3xl mx-auto text-center">
        <Image
          src="/hero.png" // Add your hero image in public/hero.png
          alt="Pixel to Product Hero"
          width={800}
          height={400}
          className="rounded-lg shadow-md mx-auto"
        />
        <h2 className="text-3xl font-semibold text-gray-800 mt-12">Start Building With Clarity</h2>
        <p className="mt-4 text-gray-600">
          Discover how pixels become products through design thinking, rapid prototyping,
          and real-world development. Dive into practical tutorials, insightful articles,
          and creative showcases.
        </p>
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Explore the Blog
        </button>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pixel-To-Product. All rights reserved.
      </footer>
    </main>
  );
}
