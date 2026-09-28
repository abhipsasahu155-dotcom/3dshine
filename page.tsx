export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="border-b bg-blue">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold">
   <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
  3DShine
</span>
          </div>

          <div className="hidden gap-8 md:flex">
            <a href="#" className="hover:text-teal-500">Home</a>
            <a href="#" className="hover:text-teal-500">Shop</a>
            <a href="#" className="hover:text-teal-500">Categories</a>
            <a href="#" className="hover:text-teal-500">Custom Print</a>
            <a href="#" className="hover:text-teal-500">About</a>
          </div>

          <div className="flex gap-4">
            <button>🔍</button>
            <button>♡</button>
            <button>🛒</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-widest text-teal-500">
              Welcome to 3DShine
            </p>

            <h1 className="text-5xl font-bold leading-tight text-blue-600 md:text-6xl">
              Bring Your Ideas
              <br />
              <span className="text-teal-500">To Life.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Discover unique 3D printed products, personalised creations,
              and custom designs made by 3DShine.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-black px-7 py-3 font-semibold text-white hover:bg-blue-500">
                Shop Collection
              </button>

              <button className="rounded-full bg-black px-7 py-3 font-semibold hover:bg-blue-500 hover:text-white">
                Custom Print
              </button>
            </div>
          </div>

          <div className="flex h-96 items-center justify-center rounded-3xl bg-gray-200">
            <p className="text-gray-500">
              3D Product Image
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="font-semibold text-teal-500">EXPLORE</p>
          <h2 className="mt-2 text-4xl font-bold">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Home Decor",
            "Desk Accessories",
            "Keychains",
            "Personalised Gifts",
          ].map((category) => (
            <div
              key={category}
              className="flex h-48 items-end rounded-2xl bg-gray-100 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="mb-10 flex items-end justify-between">
    <div>
      <p className="font-semibold text-teal-500">OUR COLLECTION</p>

      <h2 className="mt-2 text-4xl font-bold">
        Featured Products
      </h2>

      <p className="mt-3 text-gray-600">
        Discover some of our most popular 3D printed creations.
      </p>
    </div>

    <button className="hidden rounded-full border border-black px-6 py-2 font-medium hover:bg-blue-500 hover:text-white md:block">
      View All
    </button>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        name: "Modern Desk Organizer",
        price: "₹499",
        category: "Desk Accessories",
      },
      {
        name: "Geometric Planter",
        price: "₹599",
        category: "Home Decor",
      },
      {
        name: "Custom Name Keychain",
        price: "₹199",
        category: "Personalised",
      },
      {
        name: "3D Printed Dragon",
        price: "₹799",
        category: "Collectibles",
      },
    ].map((product) => (
      <div
        key={product.name}
        className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Product Image */}
        <div className="flex h-64 items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-400">
            Product Image
          </span>
        </div>

        {/* Product Information */}
        <div className="p-5">
          <p className="text-sm text-gray-500">
            {product.category}
          </p>

          <h3 className="mt-1 text-lg font-bold">
            {product.name}
          </h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold">
              {product.price}
            </span>

            <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
              Add
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Custom Printing */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-widest text-teal-500">
            Custom 3D Printing
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Have your own idea?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Send us your 3D model and let 3DShine turn your digital design
            into a real physical product.
          </p>

          <button className="mt-8 rounded-full bg-teal-500 px-8 py-3 font-semibold text-white hover:bg-blue-600">
            Start Custom Print
          </button>
        </div>
      </section>

      {/* Contact Us */}
<section className="bg-gray-100 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="font-semibold uppercase tracking-widest text-teal-500">
        Get in Touch
      </p>

      <h2 className="mt-2 text-4xl font-bold text-gray-900">
        Contact Us
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-700">
        Have a question about our products or want a custom 3D print?
        We would love to hear from you.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-2">
      {/* Contact Information */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900">
          Let's Talk
        </h3>

        <p className="mt-3 text-gray-600">
          Reach out to us and our team will get back to you as soon as
          possible.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p className="mt-1 text-gray-600">
              hello@3dshine.com
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <p className="mt-1 text-gray-600">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Location</p>
            <p className="mt-1 text-gray-600">
              India
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="How can we help?"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-gray-950 px-6 py-12 text-gray-400">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 md:grid-cols-3">

      {/* Brand */}
      <div>
        <div className="text-2xl font-bold text-white">
         <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
  3DShine
</span>
        </div>

        <p className="mt-3 max-w-sm">
          3D printed. Made to shine.
          Unique products and custom creations made for you.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-white">
          Quick Links
        </h3>

        <div className="mt-4 space-y-3">
          <a href="#" className="block hover:text-teal-400">
            Home
          </a>

          <a href="#" className="block hover:text-teal-400">
            Shop
          </a>

          <a href="#" className="block hover:text-teal-400">
            Custom Print
          </a>

          <a href="#" className="block hover:text-teal-400">
            Contact Us
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="font-semibold text-white">
          Follow Us
        </h3>

        <p className="mt-3">
          Follow 3DShine on social media.
        </p>

        <div className="mt-5 flex gap-3">

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white transition hover:bg-teal-500"
            aria-label="Instagram"
          >
            IG
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white transition hover:bg-teal-500"
            aria-label="Facebook"
          >
            f
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white transition hover:bg-teal-500"
            aria-label="YouTube"
          >
            YT
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white transition hover:bg-teal-500"
            aria-label="X"
          >
            X
          </a>

        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-10 border-t border-gray-800 pt-6 text-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <p>
          © 2026 3DShine. All rights reserved.
        </p>

        <p>
          Operated by SigmaShine.
        </p>
      </div>
    </div>

  </div>
</footer>
    </main>
  );
}