import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
// import Blog from '../components/Blog';
import Header from '../components/Header';
import Socials from '../components/Socials';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.subtitle} />
      <Header name={globalData.name} subtitle={globalData.subtitle} />
      <main className="w-full font-thin p-8 space-y-8">
        <p>
          I am a front-end developer with more than 7 years of experience
          working for startup and enterprise level apps. I primarily work with
          React and both TypeScript and JavaScript. I also like{' '}
          <a href="https://snip.works">taking pictures and making music.</a> And
          working on cars.
        </p>
        <Socials />
        <hr />
        <Skills />
        <hr />
        <Projects />
        {/* <hr />
        <Blog posts={posts} /> */}
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
