"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Utensils, Wine, Music, Leaf } from "lucide-react"

export default function RestaurantLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (!target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const menuItems = {
    appetizers: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with truffle oil and parmesan", price: "$14.99" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil", price: "$16.99" },
      { name: "Seared Scallops", description: "Pan-seared scallops with cauliflower puree", price: "$18.99" },
    ],
    mains: [
      { name: "Grilled Ribeye", description: "28-day aged ribeye with roasted vegetables", price: "$42.99" },
      { name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon herb butter", price: "$28.99" },
      { name: "Lobster Ravioli", description: "House-made pasta with lobster in cream sauce", price: "$32.99" },
    ],
    desserts: [
      { name: "Chocolate Lava Cake", description: "Warm chocolate cake with vanilla ice cream", price: "$9.99" },
      { name: "Tiramisu", description: "Classic Italian dessert with espresso", price: "$8.99" },
      { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$8.99" },
    ],
    beverages: [
      { name: "House Wine Selection", description: "Curated selection of red and white wines", price: "$8-15" },
      { name: "Craft Cocktails", description: "Signature cocktails made with premium spirits", price: "$12-16" },
      { name: "Artisan Coffee", description: "Locally roasted coffee beans", price: "$4.99" },
    ],
  }

  const highlights = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Farm-to-Table Freshness",
      description: "We source our ingredients from local farms to ensure the freshest flavors in every dish.",
    },
    {
      icon: <Wine className="w-8 h-8 text-purple-600" />,
      title: "Artisan Cocktails",
      description: "Our skilled bartenders craft unique cocktails using premium spirits and fresh ingredients.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      title: "Cozy Ambiance",
      description: "Enjoy intimate dining in our warm, welcoming atmosphere perfect for any occasion.",
    },
    {
      icon: <Music className="w-8 h-8 text-blue-600" />,
      title: "Live Music Evenings",
      description: "Experience live acoustic performances every Friday and Saturday evening.",
    },
  ]

  const testimonials = [
    {
      heading: "The pizza was next-level delicious.",
      name: "Amanda J., Event Attendee",
      text: "The crust, the sauce, the toppings—it hit every note. I’d come back just for that.",
    },
    {
      heading: "Perfect atmosphere after a long day.",
      name: "Josh K., Conference Guest",
      text: " I loved the cozy vibe and the cocktails were fantastic. Great place to decompress.",
    },
    {
      heading: "They really thought of everything.",
      name: "Priya S., Retreat Guest",
      text: "Vegetarian options, fun drinks, and kind service. It felt like a neighborhood spot.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSection("home")}
              >
                <img src="\LogoText1.png" alt="Savoria Logo" className="h-16 rounded-md" />
              </button>
              {/* <h1 className="text-2xl font-bold text-gray-900">Savoria</h1> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Menu", "Highlights", "Testimonials", "Bar", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "Menu", "Highlights", "Testimonials", "Bar", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">A Taste of Local Chicago</h1>
          <p className="font-[Corsiva] text-xl md:text-2xl mb-4 max-w-2xl mx-auto">Brick oven pizza and Midwest hospitality</p>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Enjoy handcrafted pizzas, classic burgers, and drinks in a relaxed, friendly setting.</p>
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 transform hover:scale-105"
          >
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative h-full py-10 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('\AboutSection.png')`,
          }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <img src="\LogoText1.png" alt="Savoria Logo" className="h-32 rounded-md mx-auto" />
          <p className="font-[Corsiva] text-xl md:text-2xl mt-8 mb-8 max-w-2xl mx-auto"> We bring together fresh-made food, laid-back vibes, and the warmth of good company. Nestled inside Q Center, it’s where comfort meets craft—whether you're winding down after a meeting or sharing a meal with friends.</p>
          <div className="flex mx-auto  justify-center">
            <div className=""><Utensils className="w-8 h-8 text-orange-600" /></div>
            <h3 className="text-xl md:text-2xl mb-8 max-w-2xl ">&nbsp;&nbsp;&nbsp;Handcrafted pizzas from our brick oven</h3>
          </div>
          <div className="flex mx-auto  justify-center">
            <div className=""><Wine className="w-8 h-8 text-purple-600" /></div>
            <h3 className="text-xl md:text-2xl mb-8 max-w-2xl ">&nbsp;&nbsp;&nbsp;Locally inspired cocktails & craft beer</h3>
          </div>
          <div className="flex mx-auto  justify-center">
            <div className=""><Leaf className="w-8 h-8 text-green-600" /></div>
            <h3 className="text-xl md:text-2xl mb-8 max-w-2xl ">&nbsp;&nbsp;&nbsp;Indoor and outdoor seating options</h3>
          </div>
          {/* <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"></p> */}
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 transform hover:scale-105"
          >
            Explore Our Menu
          </button>
        </div>

      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize border-b-2 border-orange-600 pb-2">
                  {category}
                </h3>
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="text-orange-600 font-bold text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Private Dining & Group Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Planning a gathering? We’ve got the space, the service, and the flavor. Whether it’s a team dinner, celebration, or casual group meetup, our team makes it easy to host comfortably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 transform hover:scale-105"
            >
              Plan Your Event With Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read what our valued customers have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-black mb-3 font-bold italic">"{testimonial.heading || "default"}"</p>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section id="bar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Bar Experience</h2>
              <p className="text-lg text-gray-600 mb-6">
                Step into our bar for a mix of familiar and bold. Whether you're after a local craft beer or a signature cocktail, we pour with care and creativity.
              </p>
              {/* <p className="text-lg text-gray-600 mb-6">
                Step into our sophisticated bar area where expert mixologists craft exceptional cocktails using premium
                spirits and fresh, locally-sourced ingredients. Whether you're looking for a classic cocktail or
                something uniquely Savoria, our bar offers the perfect atmosphere for any occasion.
              </p> */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-700"><b>Guest favorites include:</b></span>
                </div>
                <div className="flex items-center">
                  <Wine className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Good Vibrations – CBD-infused gin cocktail</span>
                </div>
                <div className="flex items-center">
                  <Wine className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">PB&B – Peanut butter bourbon with a sweet twist</span>
                </div>
                <div className="flex items-center">
                  <Wine className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Local draft beers including Q Brew Pale Ale</span>
                </div>
                {/* <div className="flex items-center">
                  <Wine className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Signature craft cocktails</span>
                </div>
                <div className="flex items-center">
                  <Wine className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Extensive wine selection</span>
                </div>
                <div className="flex items-center">
                  <Wine className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Premium spirits collection</span>
                </div> */}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Bar Area"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for reservations or any inquiries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Dine-in & bar seating available</h3>
                <p className="text-gray-600">Walk-ins welcome | Group reservations encouraged</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Inside Q Center
                    <br />
                    St. Charles, IL
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(630) 377‑3100</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@thebrickovenbistro.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p>Sunday: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around">
            <div>
              <img src="\LogoText1.png" alt="Savoria Logo" className="h-20 rounded-md mb-4 mx-auto" />
              <p className="text-gray-400">
                Where Culinary Art Meets Comfort. Experience exceptional dining in the heart of the city.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "Menu", "Highlights", "Testimonials", "Bar", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>


          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 The Brick Oven Bistro Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
