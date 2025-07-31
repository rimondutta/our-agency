import { Link } from "react-router-dom";
import team1Thumb from "/assets/img/team/9.jpg"
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from './BlogCommentForm';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import SocialShareV3 from '../social/SocialShareV3';
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json";
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';


interface DataType {
    id?: number;
    date?: string;
    dateIcon?: string;
    thumbFull?: string;
    author?: string;
}

interface BlogSingleProps {
    blogInfo?: DataType;
    totalBlogs?: number;
    sectionClass?: string;
}

const BlogSingleWithSidebarContent = ({ blogInfo, totalBlogs, sectionClass }: BlogSingleProps) => {
    const { id, date, dateIcon, thumbFull, author } = blogInfo || {};

    // Blogs Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalBlogs : currentId - 1;
    const nextId = currentId === totalBlogs ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousBlog = BlogV3Data.find((blog) => blog.id === previousId);
    const nextBlog = BlogV3Data.find((blog) => blog.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "No Title";

    return (
        <>
            <div className={`blog-area single full-blog right-sidebar full-blog ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">

                                {/* blog Single Post */}
                                <div className="blog-style-one item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <img src={`/assets/img/blog/${thumbFull}`} width={1075} height={546} alt="Thumb" />
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-user-circle" /> {author}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className={dateIcon}></i> {date}</Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h1>How to Work with SQL Databases: A Beginner-Friendly Guide</h1>
                                            <p>
                                                AI is evolving fast, and at the center of this change are Large Language Models (LLMs)—tools that can understand and generate human-like language. You may have already seen them in action through tools like ChatGPT or AI chatbots on websites.

                                                At [Market Growth Experts], we help businesses use LLMs to save time, improve customer service, and create content faster.
                                            </p>
                                            <h2>What Is an LLM?</h2>
                                            <p>
                                                An LLM is an AI system trained on a huge amount of text data. It can write blog posts, answer questions, summarize documents, generate code, and even hold real-time conversations.

                                                These models don’t just copy text—they understand tone, intent, and context. That’s what makes them so powerful.
                                            </p>
                                            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="LLM" />
                                            <h3>Why Use LLMs for Your Business?</h3>
                                            <h5>Smarter Customer Support</h5>
                                            <p>
                                                TLLM-powered chatbots can handle FAQs, bookings, and support 24/7, freeing up your team for complex tasks.
                                            </p>
                                            <h5>Faster Content Creation</h5>
                                            <p>From blog articles to product descriptions, LLMs can create content that fits your brand’s voice—quickly and at scale.</p>
                                            <h5>Improved Productivity</h5>
                                            <p>
                                                They can summarize long documents, assist in research, or help developers write clean, efficient code.
                                            </p>
                                            <h4>We don’t just add AI—we build solutions that work for you:</h4>
                                            <ul>
                                                <li>We find real opportunities where AI can help.</li>
                                                <li>We fine-tune models to match your tone and goals.</li>
                                                <li>We handle integration, privacy, and testing—so it just works.</li>
                                            </ul>
                                            <h4>Ready to buil Ai</h4>
                                            <p>LLMs are already reshaping how teams work, communicate, and grow. Want to see what they can do for your business?</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Post Author */}
                                <div className="post-author">
                                    <div className="thumb">
                                        <img src={team1Thumb} alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="https://www.facebook.com/dutta.rimon/" onClick={handleSmoothScroll}>Rimon Dutta</Link></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                                        </p>
                                    </div>
                                </div>

                                {/* Post Tags Share */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <Link to="#" onClick={handleSmoothScroll}>Algorithm</Link>
                                        <Link to="#" onClick={handleSmoothScroll}>Data science</Link>
                                    </div>
                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShareV3 />
                                        </ul>
                                    </div>
                                </div>

                                {/* Post Pagination */}
                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to={`/blog-single-with-sidebar/${previousId}`}>
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousBlog?.title)}</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to={`/blog-single-with-sidebar/${nextId}`}>
                                            <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextBlog?.title)}</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Start Blog Comment */}
                                <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;