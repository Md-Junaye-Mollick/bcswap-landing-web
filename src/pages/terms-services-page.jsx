import React from "react";
import ScrollToTop from "../components/scroll-to-top";

// NOTE: It is recommended to remove the ScrollToTop component from individual pages
// and place it once in your main App.js file. This prevents code duplication
// and ensures it works for all route changes in your application.

const TermsOfServicePage = () => {
  const getFormattedToday = () => {
    const date = new Date();
    const day = date.getDate();
    const suffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day}${suffix(day)} ${month} ${year}`;
  };

  return (
    <>
      <ScrollToTop />
      <div className="font-sans mt-16 sm:mt-12">
        <div className="max-w-4xl mx-auto p-0 sm:p-6 lg:p-12">
          {/* Main Content */}
          <div>
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">BC Swap</h1>
              <h2 className="mb-2 font-bold text-xl">Terms of Service</h2>
              <p className="text-sm">Effective Date: {getFormattedToday()}</p>
            </div>

            <div className="space-y-10">
              <Section
                title="1. Acceptance of Terms"
                content={
                  <>
                    By accessing or using the <strong>BC Swap</strong> platform,
                    you agree to comply with and be bound by these Terms of
                    Service. If you do not agree to these terms, do not use the
                    platform.
                  </>
                }
              />

              <Section
                title="2. Description of Services"
                content={
                  <>
                    BC Swap provides a decentralized platform for cryptocurrency
                    swapping, bridging, staking, and wallet management. The
                    platform supports multiple blockchain networks and allows
                    users to connect their EVM-compatible wallets (such as
                    MetaMask) for transactions.
                  </>
                }
              />

              <Section
                title="3. User Eligibility"
                content={
                  <>
                    You must be at least 18 years old and have the legal
                    capacity to enter into binding agreements in your
                    jurisdiction to use <strong>BC Swap</strong>. You also agree
                    to comply with all applicable laws and regulations regarding
                    cryptocurrency transactions.
                  </>
                }
              />

              <Section
                title="4. Account Security"
                content={
                  <>
                    While <strong>BC Swap</strong> does not store your wallet
                    private keys or passwords, you are responsible for
                    maintaining the security of your wallet credentials. We are
                    not responsible for any unauthorized access to your wallet
                    or losses resulting from the compromise of your credentials.
                  </>
                }
              />

              <Section title="5. Use of Services">
                <p className="mb-3  text-justify">
                  You agree to use BC Swap only for lawful purposes and in
                  compliance with all applicable regulations. You shall not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4  text-justify">
                  <li>Use the platform for any illegal activity or fraud.</li>
                  <li>
                    Attempt to reverse engineer, alter, or manipulate the
                    platform’s code or blockchain protocols.
                  </li>
                  <li>
                    Engage in activities that interfere with or disrupt the
                    functionality of BC Swap.
                  </li>
                </ul>
              </Section>

              <Section title="6. Transaction Risks">
                <p className="mb-3">
                  Cryptocurrency transactions are subject to market volatility
                  and inherent risks. You acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-justify">
                  <li>
                    Prices of cryptocurrencies may fluctuate rapidly, and you
                    are solely responsible for your investment decisions.
                  </li>
                  <li>
                    Transactions are irreversible, and once confirmed, they
                    cannot be undone.
                  </li>
                  <li>
                    You should conduct thorough research and consider risks
                    before using BC Swap for any financial activities.
                  </li>
                </ul>
              </Section>

              <Section
                title="7. Fees"
                content={
                  <>
                    <strong>BC Swap</strong> may charge transaction fees for
                    swaps, staking, or bridging services. These fees will be
                    disclosed to you at the time of the transaction. You are
                    responsible for any applicable fees charged by third-party
                    services or blockchain networks.
                  </>
                }
              />

              <Section
                title="8. Limitation of Liability"
                content={
                  <>
                    To the fullest extent permitted by law, BC Swap, PN Explore
                    Pvt. Ltd., and its affiliates shall not be liable for any
                    direct, indirect, incidental, special, or consequential
                    damages arising from the use of the platform, including loss
                    of funds, loss of data, or loss of access.
                  </>
                }
              />

              <Section
                title="9. Indemnification"
                content={
                  <>
                    You agree to indemnify and hold harmless{" "}
                    BC Swap, PN Explore Pvt. Ltd., PN Software
                    Tech Pvt. Ltd., and their affiliates from any claims,
                    damages, losses, or liabilities arising from your use of the
                    platform or breach of these Terms.
                  </>
                }
              />

              <Section
                title="10. Changes to the Terms"
                content="We reserve the right to modify these Terms of Service at any time. You will be notified of changes, and continued use of the platform after changes are made constitutes your acceptance of the new terms."
              />

              <Section
                title="11. Governing Law"
                content="These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles."
              />

              <Section title="12. Contact Information">
                <p>
                  For questions about these Terms of Service, please contact us
                  at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@bcswap.org"
                    className="text-blue-500 hover:text-blue-400 hover:underline"
                  >
                    contact@bcswap.org
                  </a>
                </p>
              </Section>

              <hr className="my-8" />

              <Section
                title="Security and Compliance Roadmap"
                content="As we grow, security and regulatory compliance will remain at the forefront of our development. We will work closely with regulatory bodies to ensure compliance with global financial regulations while offering decentralized privacy. Our security measures will be regularly audited by industry-leading firms to safeguard user assets."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper component for consistent section styling
const Section = ({ title, content, children }) => (
  <section>
    <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
    {content && <p className="leading-relaxed text-justify">{content}</p>}
    {children}
  </section>
);

export default TermsOfServicePage;
