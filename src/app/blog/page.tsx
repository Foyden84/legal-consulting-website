import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, Calendar, User, Clock, Eye, Star, TrendingUp } from "lucide-react"

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "The Future of AI in Healthcare: Transforming Patient Care",
      excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans.",
      category: "Healthcare",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2023",
      readTime: "8 min read",
      image: "/healthcare.jpg",
      tags: ["AI", "Healthcare", "Innovation", "Technology"],
      featured: true
    },
    {
      title: "Top 10 Software Development Trends for 2024",
      excerpt: "Stay ahead of the curve with our comprehensive guide to the most important software development trends shaping the industry.",
      category: "Technology",
      author: "Michael Chen",
      date: "December 10, 2023",
      readTime: "12 min read",
      image: "/hero-bg.jpg",
      tags: ["Development", "Trends", "2024", "Innovation"],
      featured: true
    }
  ]

  const recentPosts = [
    {
      title: "Implementing IoT Solutions in the Automotive Industry",
      excerpt: "Learn how IoT technology is transforming vehicle manufacturing, fleet management, and driver experience.",
      category: "Automotive",
      author: "David Kim",
      date: "December 8, 2023",
      readTime: "6 min read",
      image: "/automotive.jpg",
      tags: ["IoT", "Automotive", "Connected Vehicles", "Innovation"]
    },
    {
      title: "Legal Tech: How Automation is Changing Law Firms",
      excerpt: "Discover how legal technology is streamlining case management, document automation, and client communication.",
      category: "Legal",
      author: "Emily Rodriguez",
      date: "December 5, 2023",
      readTime: "7 min read",
      image: "/legal.jpg",
      tags: ["Legal Tech", "Automation", "Law Firms", "Efficiency"]
    },
    {
      title: "Building Scalable E-Learning Platforms for Modern Education",
      excerpt: "Key considerations and best practices for developing robust educational platforms that can scale with growing user bases.",
      category: "Education",
      author: "Jennifer Park",
      date: "December 3, 2023",
      readTime: "9 min read",
      image: "/education.jpg",
      tags: ["E-Learning", "Education", "Scalability", "Platform Development"]
    },
    {
      title: "Cloud Migration Strategies for Healthcare Organizations",
      excerpt: "A comprehensive guide to planning and executing successful cloud migrations while maintaining HIPAA compliance.",
      category: "Healthcare",
      author: "Robert Martinez",
      date: "December 1, 2023",
      readTime: "10 min read",
      image: "/healthcare.jpg",
      tags: ["Cloud", "Healthcare", "Migration", "HIPAA", "Compliance"]
    },
    {
      title: "The Rise of Electric Vehicle Software Development",
      excerpt: "Exploring the software challenges and opportunities in the rapidly growing electric vehicle market.",
      category: "Automotive",
      author: "Lisa Wang",
      date: "November 28, 2023",
      readTime: "8 min read",
      image: "/automotive.jpg",
      tags: ["Electric Vehicles", "Software Development", "Automotive", "Innovation"]
    },
    {
      title: "Blockchain Applications in Legal Document Management",
      excerpt: "How blockchain technology is enhancing security, transparency, and efficiency in legal document handling.",
      category: "Legal",
      author: "James Thompson",
      date: "November 25, 2023",
      readTime: "6 min read",
      image: "/legal.jpg",
      tags: ["Blockchain", "Legal", "Document Management", "Security"]
    }
  ]

  const categories = [
    { name: "Healthcare", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Automotive", count: 8, color: "bg-green-100 text-green-800" },
    { name: "Legal", count: 6, color: "bg-purple-100 text-purple-800" },
    { name: "Education", count: 9, color: "bg-yellow-100 text-yellow-800" },
    { name: "Technology", count: 15, color: "bg-red-100 text-red-800" },
    { name: "Business", count: 7, color: "bg-indigo-100 text-indigo-800" }
  ]

  const popularTags = [
    "AI & Machine Learning", "Cloud Computing", "Cybersecurity", "Mobile Development",
    "Web Development", "Data Analytics", "IoT", "Blockchain", "DevOps", "UX/UI Design"
  ]

  const newsletterStats = [
    { number: "5,000+", label: "Subscribers" },
    { number: "2", label: "Posts/Week" },
    { number: "98%", label: "Open Rate" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="block text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on software development, technology, and digital transformation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link href="/contact">Subscribe to Newsletter</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Posts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and insightful articles selected by our editorial team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Posts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest insights and industry analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')}`}>
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors">
                        <Badge className={category.color}>
                          {category.name}
                        </Badge>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Popular Tags */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <Card className="bg-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Subscribe to Our Newsletter</CardTitle>
                  <CardDescription className="text-blue-100">
                    Get the latest insights and updates delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {newsletterStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                        <div className="text-sm text-blue-100">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" asChild className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                    <Link href="/contact">Subscribe Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Contribute?</h2>
          <p className="text-xl mb-8 text-gray-300">
            We're always looking for industry experts and thought leaders to share their insights
          </p>
          <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/contact">Become a Contributor</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}