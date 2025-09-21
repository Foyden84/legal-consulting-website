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
      title: "Transforming Healthcare Delivery with Innovative Software Solutions",
      excerpt: "Discover how healthcare software solutions are revolutionizing patient care, improving operational efficiency, and enabling digital transformation in medical practices and hospitals.",
      category: "Healthcare Technology",
      author: "Dr. Emily Rodriguez, MD",
      date: "January 20, 2024",
      readTime: "12 min read",
      image: "/healthcare.jpg",
      tags: ["Healthcare", "EHR", "Telemedicine", "Digital Health"],
      featured: true,
      url: "/blog/transforming-healthcare-delivery-with-innovative-software-solutions"
    },
    {
      title: "Driving Innovation: Automotive Software Solutions for the Digital Age",
      excerpt: "Explore how automotive software is transforming fleet management, dealer operations, and connected vehicle experiences in the modern automotive industry.",
      category: "Automotive Technology",
      author: "Michael Chen, Automotive Tech Specialist",
      date: "January 18, 2024",
      readTime: "10 min read",
      image: "/automotive.jpg",
      tags: ["Automotive", "Fleet Management", "Connected Vehicles", "Digital Transformation"],
      featured: true,
      url: "/blog/driving-innovation-automotive-software-solutions-for-the-digital-age"
    }
  ]

  const recentPosts = [
    {
      title: "Revolutionizing Education: Technology Solutions for Modern Learning",
      excerpt: "Explore how education technology is transforming learning experiences, from K-12 schools to universities, with innovative LMS and assessment tools.",
      category: "Education Technology",
      author: "Dr. Sarah Johnson, Ed.D.",
      date: "January 22, 2024",
      readTime: "11 min read",
      image: "/education.jpg",
      tags: ["Education", "LMS", "EdTech", "Digital Learning"],
      url: "/blog/revolutionizing-education-technology-solutions-for-modern-learning"
    },
    {
      title: "AI-Powered Legal Research: Transforming How Lawyers Find Case Law",
      excerpt: "Discover how artificial intelligence is revolutionizing legal research, making it faster, more accurate, and more comprehensive than ever before.",
      category: "Legal Technology",
      author: "Sarah Mitchell, Esq.",
      date: "January 15, 2024",
      readTime: "8 min read",
      image: "/legal.jpg",
      tags: ["AI", "Legal Research", "Case Law", "Technology"],
      url: "/blog/ai-powered-legal-research-transforming-how-lawyers-find-case-law"
    },
    {
      title: "The Complete Guide to Legal Document Automation in 2024",
      excerpt: "Learn how document automation is streamlining legal workflows, reducing errors, and improving client service in modern law firms.",
      category: "Legal Technology",
      author: "David Rodriguez, J.D.",
      date: "January 12, 2024",
      readTime: "12 min read",
      image: "/legal.jpg",
      tags: ["Document Automation", "Legal Tech", "Efficiency", "Workflows"],
      url: "/blog/the-complete-guide-to-legal-document-automation-in-2024"
    },
    {
      title: "Cloud Security for Law Firms: Best Practices and Compliance",
      excerpt: "Essential security measures and compliance requirements for law firms migrating to cloud-based practice management systems.",
      category: "Legal Technology",
      author: "Michael Chen, CISSP",
      date: "January 8, 2024",
      readTime: "6 min read",
      image: "/legal.jpg",
      tags: ["Cloud Security", "Compliance", "Data Protection", "Legal Tech"],
      url: "/blog/cloud-security-for-law-firms-best-practices-and-compliance"
    },
    {
      title: "Case Management Software: ROI Analysis for Small Law Firms",
      excerpt: "A detailed analysis of how case management software can improve efficiency and profitability for small to medium-sized law firms.",
      category: "Legal Technology",
      author: "Emily Rodriguez, J.D.",
      date: "January 5, 2024",
      readTime: "7 min read",
      image: "/legal.jpg",
      tags: ["Case Management", "ROI", "Small Law Firms", "Efficiency"],
      url: "/blog/case-management-software-roi-analysis-for-small-law-firms"
    },
    {
      title: "E-Discovery in the Digital Age: Tools and Best Practices",
      excerpt: "Navigate the complexities of electronic discovery with modern tools and proven strategies for legal professionals.",
      category: "Legal Technology",
      author: "Jennifer Park, Esq.",
      date: "January 3, 2024",
      readTime: "9 min read",
      image: "/legal.jpg",
      tags: ["E-Discovery", "Digital Evidence", "Legal Process", "Technology"],
      url: "/blog/e-discovery-in-the-digital-age-tools-and-best-practices"
    }
  ]

  const categories = [
    { name: "Legal Technology", count: 18, color: "bg-blue-100 text-blue-800" },
    { name: "Healthcare Technology", count: 8, color: "bg-teal-100 text-teal-800" },
    { name: "Automotive Technology", count: 6, color: "bg-indigo-100 text-indigo-800" },
    { name: "Education Technology", count: 5, color: "bg-green-100 text-green-800" },
    { name: "Case Management", count: 12, color: "bg-purple-100 text-purple-800" },
    { name: "Compliance & Security", count: 15, color: "bg-red-100 text-red-800" }
  ]

  const popularTags = [
    "Legal AI", "Healthcare", "Automotive", "Education", "Case Management",
    "Document Automation", "E-Discovery", "EHR", "Fleet Management", "LMS",
    "Digital Transformation", "Compliance", "Legal Tech", "EdTech"
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
              Expert insights on legal technology, case management, document automation, and digital transformation for law firms and legal departments.
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
              Essential reading for legal professionals looking to leverage technology for better outcomes
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
                    <Link href={post.url || `/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')}`}>
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
              Latest developments in legal technology and practical implementation guides
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
                    <Link href={post.url || `/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')}`}>
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
            We're always looking for legal technology experts and thought leaders to share their insights
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