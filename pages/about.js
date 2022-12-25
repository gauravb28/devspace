import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout title="About eCell NSUT Blogs">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">eCell NSUT Blogs</h3>
        <p className="mb-3">
          This is a blog platform built by eCell NSUT to impart some insights
          into the crucial aspects regarding entrepreneurship, product
          management, finance, economics as well as self growth.
        </p>

        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
