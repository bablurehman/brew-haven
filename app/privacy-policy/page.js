export const metadata = {
  title: "Privacy Policy | Brew Haven",
  description:
    "Learn how Brew Haven collects, uses, and protects your personal information when you visit our website or contact us.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#faf8f5] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
          Legal
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-neutral-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-neutral-600">
          Last updated: June 2026
        </p>

        <div className="mt-12 space-y-10 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Information We Collect
            </h2>

            <p className="mt-3">
              We may collect information you voluntarily provide when
              contacting us, making inquiries, or using forms on our
              website, including your name, email address, phone number,
              and message details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              How We Use Information
            </h2>

            <p className="mt-3">
              Information is used to respond to inquiries, improve our
              services, provide customer support, and maintain the
              functionality and security of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Cookies & Analytics
            </h2>

            <p className="mt-3">
              Our website may use cookies and analytics tools to improve
              user experience and understand website performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Data Protection
            </h2>

            <p className="mt-3">
              We take reasonable measures to protect personal information
              from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Contact Us
            </h2>

            <p className="mt-3">
              If you have any questions regarding this Privacy Policy,
              please contact us through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}