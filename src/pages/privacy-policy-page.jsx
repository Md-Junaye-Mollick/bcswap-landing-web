import React from "react";
import ScrollToTop from "../components/scroll-to-top";

const PrivacyPolicyPage = () => {
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
              <h2 className="mb-2 font-bold text-xl">Privacy Policy</h2>
              <p className="text-sm">Effective Date: {getFormattedToday()}</p>
            </div>

            <div className="space-y-10">
              <Section title="1. Introduction">
                <p className="leading-relaxed text-justify">
                  BC Swap, a decentralized cryptocurrency swap with bridging,
                  stacking, and wallet balance storage functionality, is managed
                  by <strong>PN Explore Pvt. Ltd.</strong>, developed by{" "}
                  <strong>PN Software Tech Pvt. Ltd.</strong>, and marketed by{" "}
                  <strong>PN Explore B2B</strong> and{" "}
                  <strong>B2C Marketing Companies</strong>. This Privacy Policy
                  outlines how we collect, use, and safeguard your data when you
                  interact with the <strong>BC Swap</strong> platform. By using
                  our services, you agree to the terms of this Privacy Policy.
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <p className="mb-3">
                  We collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 ">
                  <li>
                    <strong className="font-semibold">
                      Personal Information:
                    </strong>{" "}
                    <span className="text-justify">
                      This includes your email address, phone number, and any
                      other data you provide to us when creating an account.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">
                      Cryptocurrency Wallet Data:
                    </strong>{" "}
                    <span className="text-justify">
                      Your EVM-compatible wallet addresses (e.g., MetaMask) are
                      stored for transaction purposes.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Transaction Data:</strong>{" "}
                    <span className="text-justify">
                      Information on the cryptocurrencies you exchange, send,
                      receive, and store through the platform.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Usage Data:</strong>{" "}
                    <span className="text-justify">
                      This includes technical data such as IP addresses, browser
                      types, operating system, and activity on the platform
                      (e.g., swap events, stacking behaviour).
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Third-Party Data:</strong>{" "}
                    <span className="text-justify">
                      If you connect your wallet or use external services
                      integrated with <strong>BC Swap</strong>, we may collect
                      relevant data.
                    </span>
                  </li>
                </ul>
              </Section>

              <Section title="3. How We Use Your Information">
                <ul className="list-disc list-inside space-y-2 ml-4 ">
                  <li>
                    <strong className="font-semibold">Service Delivery:</strong>{" "}
                    <span className="text-justify">
                      To process cryptocurrency transactions, swaps, staking,
                      and wallet balance management.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">
                      Account Management:
                    </strong>{" "}
                    <span className="text-justify">
                      To provide you with access to your wallet, transaction
                      history, and other functionalities.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">
                      Improvement of Services:
                    </strong>{" "}
                    <span className="text-justify">
                      {" "}
                      To analyze usage patterns and improve the platform’s
                      security, functionality, and performance.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Marketing:</strong>
                    <span className="text-justify">
                      {" "}
                      To send you updates about BC Swap services, promotions,
                      and new features. You can opt out of marketing
                      communications at any time.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Compliance:</strong>
                    <span className="text-justify">
                      {" "}
                      To comply with legal obligations, resolve disputes, and
                      enforce agreements.
                    </span>
                  </li>
                </ul>
              </Section>

              <Section title="4. How We Protect Your Information">
                <p className="leading-relaxed text-justify">
                  We use industry-standard encryption methods and secure servers
                  to protect your personal and transactional data. However,
                  please note that, as a decentralized platform, BC Swap does
                  not store sensitive data such as private keys or passwords. It
                  is your responsibility to maintain the confidentiality of your
                  wallet credentials and other security measures.
                </p>
              </Section>

              <Section title="5. Third-Party Disclosures">
                <p className="mb-3">
                  We may share your information with trusted third parties for
                  the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 ">
                  <li>
                    <strong className="font-semibold">
                      Blockchain Networks:
                    </strong>{" "}
                    <span className="text-justify">
                      To facilitate transactions across various blockchain
                      networks.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">
                      Regulatory Compliance:
                    </strong>{" "}
                    <span className="text-justify">
                      If required by law or to comply with legal processes, we
                      may disclose your information to government authorities.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">
                      Service Providers:
                    </strong>{" "}
                    <span className="text-justify">
                      We may use third-party services to perform functions such
                      as payment processing or analytics, who are required to
                      maintain the confidentiality of your data.
                    </span>
                  </li>
                </ul>
              </Section>

              <Section title="6. Your Rights and Choices">
                <ul className="list-disc list-inside space-y-2 ml-4 ">
                  <li>
                    <strong className="font-semibold">Access:</strong>
                    <span className="text-justify">
                      {" "}
                      You have the right to access and view the data we hold
                      about you.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Correction:</strong>
                    <span className="text-justify">
                      {" "}
                      You can request updates to your personal information.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Deletion:</strong>
                    <span className="text-justify">
                      {" "}
                      You can request the deletion of your personal data, though
                      this may limit your ability to use certain services.
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Opt-Out:</strong>
                    <span className="text-justify">
                      {" "}
                      You can opt-out of receiving marketing communications.
                    </span>
                  </li>
                </ul>
              </Section>

              <Section title="7. Data Retention">
                <p className="leading-relaxed text-justify">
                  We will retain your personal and transaction data for as long
                  as necessary to provide you with our services or as required
                  by law.
                </p>
              </Section>

              <Section title="8. International Transfers">
                <p className="leading-relaxed text-justify">
                  As <strong>BC Swap</strong> operates globally, your
                  information may be transferred to, stored, or processed in
                  countries outside your own. By using our services, you consent
                  to this transfer.
                </p>
              </Section>

              <Section title="9. Updates to This Privacy Policy">
                <p className="leading-relaxed text-justify">
                  We may update this Privacy Policy from time to time. You will
                  be notified of significant changes via email or through
                  notifications on our platform.
                </p>
              </Section>

              <Section title="10. Contact Us">
                <p className="text-justify">
                  If you have any questions about this Privacy Policy or wish to
                  exercise your rights, please contact us at:
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

              <Section title="The Future of Decentralized Finance (DeFi)">
                <p className="leading-relaxed text-justify">
                  As <strong>BC Swap</strong> evolves, we envision a future
                  where users have seamless access to a broad array of
                  decentralized financial services, including automated trading,
                  cross-chain asset management, and decentralized lending. Our
                  platform will continuously evolve with the latest DeFi
                  protocols, ensuring that users have access to cutting-edge
                  features while maintaining security and transparency.
                </p>
              </Section>

              <Section title="Blockchain Interoperability">
                <p className="leading-relaxed text-justify">
                  We believe that the future of cryptocurrency relies on the
                  ability of different blockchain networks to communicate and
                  transact seamlessly with each other. BC Swap{" "}
                  will focus on enhancing interoperability across blockchain
                  ecosystems, enabling users to effortlessly swap tokens across
                  diverse networks.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper component for consistent section styling
// Now it only accepts 'title' and 'children' for more flexibility
const Section = ({ title, children }) => (
  <section>
    <h2 className="text-xl sm:text-2xl font-semibold mb-3 ">{title}</h2>
    {children}
  </section>
);

export default PrivacyPolicyPage;
