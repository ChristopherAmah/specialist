import React from 'react';
import blog1 from '../assets/blog1.jpg'; 
import blog2 from '../assets/blog2.jpg'; 
import blog3 from '../assets/blog3.jpg'; 

const LatestBlogPosts = () => {
  const posts = [
    {
      image: blog1,
      category: "Design",
      title: "The Importance of Regular Health Checkups",
      author: "Aanya Patel",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "28th Feb, 2025",
      readTime: "4 min read",
      description:
        "Early detection saves lives—learn why routine checkups are essential for long-term wellness.",
    },
    {
      image: blog2,
      category: "Engineering",
      title: "Caring for the Heart: Tips from Our Specialists",
      author: "Rishi Varma",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "25th Feb, 2025",
      readTime: "3 min read",
      description:
        "Simple lifestyle changes and expert guidance to keep your heart strong and healthy.",
    },
    {
      image: blog3,
      category: "Company",
      title: "Technology Transforming Patient Care",
      author: "Zara Mehra",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "23rd Feb, 2025",
      readTime: "8 min read",
      description:
        "From digital records to modern equipment, see how innovation is improving treatment and recovery.",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-16 font-sans">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block px-4 py-1 text-[18.51px] text-[#1B7FF2] border rounded-full mb-4">
              We'd Love To Hear From You
            </span>
            <h2 className="text-4xl md:text-4xl font-medium text-[#000000] leading-tight">
              Latest blog posts
            </h2>
            <p className="text-[18px] text-[#2E2E27] max-w-md mt-3">
              Discover stories, tips, and resources to inspire your next big idea.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 text-md px-6 py-3 bg-[#222222] text-white rounded-[8px] font-medium hover:bg-gray-800 transition-colors"
          >
            View all posts
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover border-[#00000033] rounded-2xl"
              />
              <div className="p-6">
                <span className="inline-block bg-[#EAEAEA] text-[#222222] text-xs px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-[20px] font-medium text-[#000000] mb-3">
                  {post.title}
                </h3>

                {/* Author + Date */}
                <div className="flex items-center text-[#7C7C7C] text-[14px] font-sans mb-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-7 h-7 rounded-full mr-2"
                  />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <p className="text-[#7C7C7C] leading-relaxed text-[16px]">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
