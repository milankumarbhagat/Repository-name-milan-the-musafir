import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header currentCategory="" searchQuery="" />

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: October 2026</p>

          <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
            <p>
              Welcome to Milan The Musafir. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Personal Data</h3>
            <p>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you choose to participate in various activities related to the Site, such as chat, comment sections, or contact forms.</p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Derivative Data</h3>
            <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Affiliate Disclaimer &amp; Third-Party Links</h2>
            <p><strong>Milan The Musafir is a participant in various affiliate programs.</strong> Our website contains product affiliate links to third-party stores (including but not limited to Amazon and Flipkart). If you click on one of these links and make a purchase, we may earn a small commission at no extra cost to you.</p>
            <p>When you click on these third-party links, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services (including Amazon and Flipkart).</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Improve our website&apos;s user interface and product recommendations.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Tracking Technologies</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Cookies and Web Beacons</h3>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            {/* <p className="font-medium">Milan The Musafir<br />Email: collab@milanthemusafir.com</p> */}
            <p className="font-medium">Milan The Musafir<br />Email: collab.milanthemusafir@gmail.com</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
