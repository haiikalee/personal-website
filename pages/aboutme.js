import { ImagePageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const BlogPost = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Ahmad Haikal</a> / About me</span>",
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={"About me"}
        typingData={typingAnimation}
        bannerImg="images/blog/about-me.jpg"
      />

      <div className="section blog">
        <div className="content">

          <div className="post">
            <div className="content-box">

              <div className="single-post-text">
                <p>I was born in the serene town of Kuala Pilah, where I spent my early years surrounded by the rich culture and traditions of Malaysia. 
                  At 23, I have already embarked on a diverse journey of self-discovery and learning, particularly in the realms of technology and design.</p>
                <p>My passion for graphic design ignited during my high school years, where I began experimenting with various design tools as a hobby. 
                  This interest quickly grew, and I became a self-taught graphic designer, constantly honing my skills and exploring new techniques. Over 
                  time, my love for technology expanded, leading me to become a self-taught developer as well.</p>
                <p>Beyond the technical world, I am deeply passionate about politics and international relations. I am fascinated by how countries interact 
                  on the global stage and how political strategies shape the world we live in. This interest is complemented by my love for science fiction 
                  and fantasy, especially the Marvel Universe and the epic tales of Star Wars, which have always inspired me with their complex characters 
                  and intricate storylines.</p>
                <p>As I continue to grow and develop my skills, I aim to merge my technical expertise with my passions, contributing meaningfully to the 
                  fields that intrigue me the most.</p>
              </div>

              <div className="post-text-bottom">
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href="/aboutme">About me</a>
                  <span className="byline"> / by <span className="author">Ahmad Haikal</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <a href="/tags/code" rel="tag">aboutme</a>
                </div>
              </div>

            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>

    </Layout>
  );
};
export default BlogPost;
