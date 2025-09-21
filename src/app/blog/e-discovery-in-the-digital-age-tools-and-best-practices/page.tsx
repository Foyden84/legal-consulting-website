import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, User, Clock, Share2, Search, Database, Filter, Zap } from "lucide-react"

export default function EDiscoveryPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-6">
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          <div className="mb-6">
            <Badge className="bg-yellow-400 text-gray-900 mb-4">Legal Technology</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              E-Discovery in the Digital Age: Tools and Best Practices
            </h1>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Jennifer Park, Esq.
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                January 3, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                9 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Electronic discovery has evolved from a niche specialty to a critical component of modern litigation. As data volumes continue to grow exponentially, legal professionals must master new tools and strategies to navigate the complexities of digital evidence.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2 text-blue-600" />
              The Modern E-Discovery Landscape
            </h2>
            <p className="mb-6">
              Today's e-discovery challenges are unprecedented in scope and complexity. Organizations generate massive amounts of digital data across multiple platforms, creating both opportunities and challenges for legal teams.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.5 Quintillion</div>
                  <div className="text-sm text-gray-600">Bytes of data created daily</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-600">Of world's data created in last 2 years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">70%</div>
                  <div className="text-sm text-gray-600">Cost reduction with proper e-discovery tools</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Search className="h-6 w-6 mr-2 text-green-600" />
              Essential E-Discovery Technologies
            </h2>
            
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                    AI-Powered Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Machine learning algorithms can analyze vast datasets to identify relevant documents, patterns, and anomalies.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Predictive coding and technology-assisted review (TAR)</li>
                    <li>• Concept clustering and email threading</li>
                    <li>• Sentiment analysis and communication pattern detection</li>
                    <li>• Automated privilege review and redaction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-blue-600" />
                    Advanced Search and Filtering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Sophisticated search capabilities enable precise identification of relevant documents.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Boolean and proximity searching</li>
                    <li>• Metadata filtering and date range analysis</li>
                    <li>• Fuzzy matching and stemming</li>
                    <li>• Cross-language search capabilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Database className="h-5 w-5 mr-2 text-purple-600" />
                    Cloud-Based Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Cloud platforms provide scalable processing power for large-scale e-discovery projects.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Scalable processing for terabytes of data</li>
                    <li>• Real-time collaboration and review</li>
                    <li>• Secure data hosting and transmission</li>
                    <li>• Cost-effective resource allocation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The EDRM Framework</h2>
            <p className="mb-4">
              The Electronic Discovery Reference Model (EDRM) provides a comprehensive framework for managing e-discovery processes:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium">Information Governance</h4>
                  <p className="text-gray-600 text-sm">Establishing policies for data retention, classification, and management</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium">Identification</h4>
                  <p className="text-gray-600 text-sm">Locating and cataloging potentially relevant data sources</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium">Preservation</h4>
                  <p className="text-gray-600 text-sm">Implementing legal holds and preventing data destruction</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-medium">Collection</h4>
                  <p className="text-gray-600 text-sm">Gathering data in a forensically sound manner</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <div>
                  <h4 className="font-medium">Processing</h4>
                  <p className="text-gray-600 text-sm">Converting data into reviewable formats and removing duplicates</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                <div>
                  <h4 className="font-medium">Review</h4>
                  <p className="text-gray-600 text-sm">Analyzing documents for relevance, privilege, and confidentiality</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
                <div>
                  <h4 className="font-medium">Analysis</h4>
                  <p className="text-gray-600 text-sm">Extracting insights and preparing evidence for presentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</div>
                <div>
                  <h4 className="font-medium">Production</h4>
                  <p className="text-gray-600 text-sm">Delivering responsive documents to opposing parties</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">9</div>
                <div>
                  <h4 className="font-medium">Presentation</h4>
                  <p className="text-gray-600 text-sm">Using evidence effectively in depositions, hearings, and trials</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices for E-Discovery Success</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-700 mb-2">Early Case Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Conduct thorough early case assessment to understand data scope, identify key custodians, and develop cost-effective discovery strategies.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-700 mb-2">Defensible Workflows</h3>
                <p className="text-gray-600 text-sm">
                  Establish and document defensible workflows that can withstand judicial scrutiny and opposing party challenges.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-700 mb-2">Quality Control</h3>
                <p className="text-gray-600 text-sm">
                  Implement robust quality control measures including statistical sampling, privilege review protocols, and production validation.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-orange-700 mb-2">Cost Management</h3>
                <p className="text-gray-600 text-sm">
                  Monitor costs throughout the process and use technology to reduce manual review requirements and associated expenses.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Emerging Trends and Challenges</h2>
            <p className="mb-4">
              The e-discovery landscape continues to evolve with new technologies and data sources:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Mobile and IoT Data:</strong> Increasing volume of data from smartphones, tablets, and connected devices</li>
              <li><strong>Cloud Data Sources:</strong> Challenges in collecting data from SaaS applications and cloud storage</li>
              <li><strong>International Data:</strong> Cross-border data transfer restrictions and privacy regulations</li>
              <li><strong>Real-Time Communications:</strong> Ephemeral messaging and collaboration platforms</li>
              <li><strong>AI and Automation:</strong> Continued advancement in machine learning and automated review</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Takeaways</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Invest in proper e-discovery tools and training</li>
                <li>• Develop defensible, repeatable processes</li>
                <li>• Leverage AI and automation to reduce costs</li>
                <li>• Stay current with evolving data sources and regulations</li>
                <li>• Consider early case assessment for all matters</li>
              </ul>
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t pt-8 mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share this article:</span>
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="flex space-x-2">
                <Badge variant="outline">E-Discovery</Badge>
                <Badge variant="outline">Digital Evidence</Badge>
                <Badge variant="outline">Legal Process</Badge>
                <Badge variant="outline">Technology</Badge>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
