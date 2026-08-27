import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, ArrowLeft, Share2, 
  Bookmark, Sparkles, ChevronRight, CheckCircle2, ArrowUpRight 
} from 'lucide-react';
import { blogPostsData } from '../data/blogs';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useToast } from '../components/ui/Toast';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { showToast } = useToast();
  const post = blogPostsData.find((p) => p.id === id) || blogPostsData[0];
  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast({
        type: 'success',
        title: 'Article Link Copied!',
        message: 'Share link has been copied to your clipboard.',
      });
    }
  };

  const handleBookmark = () => {
    showToast({
      type: 'info',
      title: 'Article Bookmarked',
      message: `"${post.title}" saved to your reading list.`,
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between mb-8 text-xs text-content-secondary">
          <Link to="/blogs" className="hover:text-white flex items-center gap-1.5 transition-colors">
            <ArrowLeft size={14} /> Back to All Articles
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-surface-card border border-border text-content-secondary hover:text-white transition-colors"
              aria-label="Share Article"
            >
              <Share2 size={15} />
            </button>
            <button
              onClick={handleBookmark}
              className="p-2 rounded-full bg-surface-card border border-border text-content-secondary hover:text-white transition-colors"
              aria-label="Bookmark"
            >
              <Bookmark size={15} />
            </button>
          </div>
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="teal">{post.category}</Badge>
            <span className="text-xs text-content-muted">•</span>
            <span className="text-xs text-content-secondary flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-content-secondary leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="pt-4 border-t border-border flex items-center gap-3.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-accent-pink/40"
            />
            <div>
              <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
              <p className="text-xs text-content-muted">{post.author.role} • {post.date}</p>
            </div>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-12 shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formatted Article Content */}
        <article className="prose prose-invert max-w-none space-y-6 text-content-secondary leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-surface-card border border-accent-pink/30 my-8 shadow-brand-glow">
            <h4 className="text-white font-bold text-base flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-accent-pink" /> Key Takeaway for Vanlifers
            </h4>
            <p className="text-xs sm:text-sm text-content-secondary m-0">
              When planning off-grid boondocking trips, always map water refill stations and dump points in advance. Self-contained Airome vans can stay out 4+ days autonomously when managed properly.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Preparing Your Itinerary & Route</h2>
          <p>
            The freedom of campervan travel comes from spontaneity, but having your daily navigation checkpoints mapped keeps you relaxed. Ensure your offline maps are pre-downloaded to your onboard navigation interface or smartphone before entering national park areas without cell coverage.
          </p>

          <h3 className="text-xl font-bold text-white pt-2">Campground Etiquette & Power Conservation</h3>
          <p>
            Respect quiet hours in state campgrounds and practice strict <em>Leave No Trace</em> ethics. With Airome’s 400W solar arrays and high-density Lithium battery banks, you can charge your laptops and run internal LED illumination without running engines or noisy generators.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="p-4 rounded-xl bg-surface border border-border">
              <CheckCircle2 className="w-5 h-5 text-accent-teal mb-2" />
              <h5 className="text-sm font-bold text-white">Always Check Water Levels</h5>
              <p className="text-xs text-content-muted mt-1">Keep your fresh water tank filled before embarking on long remote backcountry tracks.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <CheckCircle2 className="w-5 h-5 text-accent-teal mb-2" />
              <h5 className="text-sm font-bold text-white">Secure Interior Latches</h5>
              <p className="text-xs text-content-muted mt-1">Double check refrigerator doors and cabinet locks before driving winding mountain roads.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Final Thoughts</h2>
          <p>
            Whether it's your first weekend campervan rental or a 3-week coastal roadtrip, the rhythm of waking up in nature changes how you perceive travel. Take your time, pull over for spontaneous viewpoints, and embrace the slow journey.
          </p>
        </article>

        {/* Article Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-8 mt-10 border-t border-border">
          <span className="text-xs font-bold text-white mr-2">Tags:</span>
          {post.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-surface-card border border-border text-xs text-content-secondary">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA TO BOOK A VAN */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-accent-pink/15 via-surface-card to-accent-purple/15 border border-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <h4 className="text-xl font-bold text-white">Inspired by this route?</h4>
            <p className="text-xs text-content-secondary mt-1">
              Rent an outfitted campervan and experience this journey yourself.
            </p>
          </div>
          <Link to="/vehicles">
            <Button variant="primary" size="md">
              Find Available Vans
            </Button>
          </Link>
        </div>

        {/* RELATED ARTICLES */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Related Roadtrip Guides</h3>
            <Link to="/blogs" className="text-xs font-semibold text-accent-pink hover:underline flex items-center gap-1">
              All Articles <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((p) => (
              <Card key={p.id} className="p-0 overflow-hidden flex flex-col justify-between group shadow-card hover:border-border-bright transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 left-3"><Badge variant="teal">{p.category}</Badge></div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-accent-pink transition-colors line-clamp-2">
                      <Link to={`/blogs/${p.id}`}>{p.title}</Link>
                    </h4>
                    <p className="text-xs text-content-secondary mt-1.5 line-clamp-2">{p.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-muted">
                    <span>{p.readTime}</span>
                    <Link to={`/blogs/${p.id}`} className="text-accent-pink font-semibold hover:underline flex items-center gap-0.5">
                      Read <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;
