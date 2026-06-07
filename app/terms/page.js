export const metadata = {
  title: "Terms of Service | Brew Haven",
  description:
    "Read the terms and conditions governing the use of Brew Haven's website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#faf8f5] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
          Legal
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-neutral-900">
          Terms of Service
        </h1>

        <p className="mt-4 text-neutral-600">
          Last updated: June 2026
        </p>

        <div className="mt-12 space-y-10 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Acceptance of Terms
            </h2>

            <p className="mt-3">
              By accessing or using this website, you agree to comply
              with these Terms of Service and all applicable laws and
              regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Website Usage
            </h2>

            <p className="mt-3">
              You agree to use this website only for lawful purposes and
              in a manner that does not interfere with the operation or
              security of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Intellectual Property
            </h2>

            <p className="mt-3">
              All content, branding, logos, images, and materials on this
              website are the property of Brew Haven unless otherwise
              stated and may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Limitation of Liability
            </h2>

            <p className="mt-3">
              Brew Haven shall not be liable for any damages arising from
              the use or inability to use this website or its content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Changes to Terms
            </h2>

            <p className="mt-3">
              We reserve the right to update these Terms of Service at
              any time. Continued use of the website constitutes
              acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}