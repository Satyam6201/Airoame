import { BlogPost } from '../types';

export interface BlogItem extends BlogPost {
  views: number;
  formattedDate: string;
}

export const blogPostsData: (BlogPost & { views: number; formattedDate: string })[] = [
  {
    id: 'given-void-great-youre-good-appear-1',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-1',
    category: 'Road Trips',
    excerpt: 'Explore boundless open roads and scenic coastal drives with our self-contained campervans and overland rigs.',
    coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Head of Adventure Content'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '5 min read',
    tags: ['Road Trips', 'Vanlife', 'Routes', 'Adventure'],
    content: 'Full story on open road adventures and scenic routes across western national parks.'
  },
  {
    id: 'given-void-great-youre-good-appear-2',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-2',
    category: 'Vanlife Tips',
    excerpt: 'Smart driving tips and GPS navigation setups for seamless highway roadtripping across states.',
    coverImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Fleet Logistics'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '6 min read',
    tags: ['Navigation', 'Highway', 'Cockpit'],
    content: 'In-depth review of offline maps and dashboard layouts.'
  },
  {
    id: 'given-void-great-youre-good-appear-3',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-3',
    category: 'Overland',
    excerpt: 'Palm-lined coastal boulevards and high-tech cabin displays for modern road travelers.',
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sasha Kovacs',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      role: 'Overland Specialist'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '4 min read',
    tags: ['Coastal', 'Smart Drive', 'California'],
    content: 'Cruising through palm tree highways in self-sufficient camper rigs.'
  },
  {
    id: 'given-void-great-youre-good-appear-4',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-4',
    category: 'Road Trips',
    excerpt: 'Scenic valley drives and discovering hidden lakeside boondocking spots.',
    coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Adventure Team'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '5 min read',
    tags: ['Roadtrips', 'Wilderness'],
    content: 'Experience breathtaking vistas and off-grid camps.'
  },
  {
    id: 'given-void-great-youre-good-appear-5',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-5',
    category: 'Vanlife Tips',
    excerpt: 'Navigating busy highways and metropolitan bridges before hitting backcountry serenity.',
    coverImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Logistics Lead'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '6 min read',
    tags: ['Highway', 'Bridges', 'Navigation'],
    content: 'Tips for smooth depot departure and urban road navigation.'
  },
  {
    id: 'given-void-great-youre-good-appear-6',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-6',
    category: 'Overland',
    excerpt: 'Cruising through coastal highways in fully connected smart cabins with digital mapping.',
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Liam Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Expedition Guide'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '7 min read',
    tags: ['Overland', 'Cruising'],
    content: 'High-speed internet and digital cluster navigation on the go.'
  },
  {
    id: 'given-void-great-youre-good-appear-7',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-7',
    category: 'Road Trips',
    excerpt: 'Mountain highway passes and morning road trips across national forests.',
    coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Content Lead'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '5 min read',
    tags: ['Passes', 'Mountains'],
    content: 'Driving through lush green alpine corridors in comfort.'
  },
  {
    id: 'given-void-great-youre-good-appear-8',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-8',
    category: 'Vanlife Tips',
    excerpt: 'Traffic-aware navigation and route planning for long-distance multi-day expeditions.',
    coverImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Logistics'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '4 min read',
    tags: ['Planning', 'Logistics'],
    content: 'Smart trip checkpoints and fueling intervals.'
  },
  {
    id: 'given-void-great-youre-good-appear-9',
    title: "Given void great you're good appear have i also fifth",
    slug: 'given-void-great-youre-good-appear-9',
    category: 'Overland',
    excerpt: 'Sunset drives with full digital connectivity and star-gazing rooftop setups.',
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sasha Kovacs',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      role: 'Specialist'
    },
    date: '2021-08-09 04:19 AM',
    formattedDate: '2021-08-09 04:19 AM',
    views: 51,
    readTime: '5 min read',
    tags: ['Sunsets', 'Overland'],
    content: 'Wrapping up the journey at scenic viewpoints.'
  },
];