export const metadata = {
  title: "Contact Us | Brew Haven Café",
  description:
    "Get in touch with Brew Haven Café for reservations, inquiries, opening hours, location details, and customer support.",
};

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-20">
          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Contact Us
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Let's Brew Something <span className="text-amber-600">Special</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-neutral-600">
            Whether you're planning a visit, reserving a table,
            or simply have a question, we'd love to hear from you.
          </p>
        </div>

        {/* Content */}

       <div className="grid md:grid-cols-2 gap-8 items-start">

  {/* Contact Info */}

  <div
    className="
      bg-white
      rounded-[32px]
      p-8
      lg:p-10
      border
      border-neutral-100
    "
  >
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8">
      Visit Our Café
    </h2>

    <div className="space-y-8">

      <div className="flex gap-5">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center">
          <MapPin size={20} className="text-amber-600" />
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            Address
          </h3>

          <p className="mt-1 text-neutral-600 leading-relaxed">
            Hill Cart Road, Kurseong
            <br />
            734203, West Bengal
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center">
          <Phone size={20} className="text-amber-600" />
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            Phone
          </h3>

          <p className="mt-1 text-neutral-600">
            +91 8372992290
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center">
          <Mail size={20} className="text-amber-600" />
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            Email
          </h3>

          <p className="mt-1 text-neutral-600">
            hello@brewhaven.com
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center">
          <Clock size={20} className="text-amber-600" />
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            Opening Hours
          </h3>

          <p className="mt-1 text-neutral-600">
            Monday – Friday: 7:00 AM – 9:00 PM
          </p>

          <p className="text-neutral-600">
            Saturday – Sunday: 8:00 AM – 10:00 PM
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* Contact Form */}

  <div
    className="
      bg-white
      rounded-[32px]
      p-8
      lg:p-10
      border
      border-neutral-100
    "
  >
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8">
      Send Us A Message
    </h2>

   <form className="space-y-5">

  <div className="grid md:grid-cols-2 gap-5">

    <div>
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>

      <input
        id="name"
        type="text"
        required
        autoComplete="name"
        placeholder="Your Name"
        className="
          w-full
          h-14
          rounded-2xl
          border
          border-neutral-200
          px-5
          text-neutral-900
          outline-none
          transition-[border-color,box-shadow]
          duration-300
          focus:border-amber-500
          focus:ring-4
          focus:ring-amber-100
        "
      />
    </div>

    <div>
      <label htmlFor="email" className="sr-only">
        Email Address
      </label>

      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email Address"
        className="
          w-full
          h-14
          rounded-2xl
          border
          border-neutral-200
          px-5
          text-neutral-900
          outline-none
          transition-[border-color,box-shadow]
          duration-300
          focus:border-amber-500
          focus:ring-4
          focus:ring-amber-100
        "
      />
    </div>

  </div>

  <div>
    <label htmlFor="subject" className="sr-only">
      Subject
    </label>

    <input
      id="subject"
      type="text"
      required
      placeholder="Subject"
      className="
        w-full
        h-14
        rounded-2xl
        border
        border-neutral-200
        px-5
        text-neutral-900
        outline-none
        transition-[border-color,box-shadow]
        duration-300
        focus:border-amber-500
        focus:ring-4
        focus:ring-amber-100
      "
    />
  </div>

  <div>
    <label htmlFor="message" className="sr-only">
      Message
    </label>

    <textarea
      id="message"
      rows={6}
      required
      placeholder="Write your message..."
      className="
        w-full
        rounded-2xl
        border
        border-neutral-200
        px-5
        py-4
        text-neutral-900
        outline-none
        resize-none
        transition-[border-color,box-shadow]
        duration-300
        focus:border-amber-500
        focus:ring-4
        focus:ring-amber-100
      "
    />
  </div>

  <button
    type="submit"
    aria-label="Send message"
    className="
      w-full
      h-14
      rounded-2xl
      bg-amber-600
      text-white
      font-medium
      transition-colors
      duration-300
      hover:bg-amber-700
    "
  >
    Send Message
  </button>

</form>
  </div>

</div>

      </div>
    </section>
  );
}