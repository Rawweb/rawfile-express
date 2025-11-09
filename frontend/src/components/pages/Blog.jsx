import BlogHero from '@components/sections/blog/BlogHero';
import OurBlogSection from '@components/sections/home/OurBlogSection';


const Blog = () => {
  return <div className="min-h-screen">
    <BlogHero/>
    <OurBlogSection/>
  </div>;
};

export default Blog;
