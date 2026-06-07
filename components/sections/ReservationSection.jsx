import { CalendarDays, Clock3, Users } from "lucide-react";

export default function ReservationSection() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-neutral-900">
          {/* Background Pattern */}

          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 py-10 sm:p-10 md:p-16">
            {/* Left Side */}

            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-amber-300 text-sm font-medium">
                Reserve Your Experience
              </span>

              <h2 className="mt-6 text-[20px] sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Book A Table For
                <br />
                Memorable Moments
              </h2>

              <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
                Whether it's a morning coffee meeting, a casual brunch, or a
                special celebration, we'll make your visit unforgettable.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <CalendarDays className="text-amber-400 mb-3" />
                  <p className="text-sm text-neutral-300">Easy Booking</p>
                </div>

                <div>
                  <Clock3 className="text-amber-400 mb-3" />
                  <p className="text-sm text-neutral-300">Flexible Hours</p>
                </div>

                <div>
                  <Users className="text-amber-400 mb-3" />
                  <p className="text-sm text-neutral-300">Group Seating</p>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="bg-white rounded-[20px] px-4 py-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
                Make A Reservation
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-amber-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-amber-500"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-amber-500"
                  />

                  <input
                    type="time"
                    className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-amber-500"
                  />
                </div>

                <select className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-amber-500">
                  <option>Number of Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8+ Guests</option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-amber-600 py-4 font-medium text-white transition hover:bg-amber-700"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
