import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, Users, Shield, Scale, FileText, Search, Clock, Database } from "lucide-react"

export default function LegalPage() {
  const solutions = [
    {
      icon: Scale,
      title: "Case Management Systems",
      description: "Comprehensive case management software that streamlines legal workflows and improves productivity.",
      features: ["Case Tracking", "Document Management", "Calendar Integration", "Time Tracking"]
    },
    {
      icon: FileText,
      title: "Document Automation",
      description: "Automated document generation and management solutions for legal professionals.",
      features: ["Template Library", "Document Assembly", "Version Control", "Electronic Signatures"]
    },
    {
      icon: Search,
      title: "Legal Research Tools",
      description: "Advanced legal research platforms with AI-powered search and analysis capabilities.",
      features: ["Case Law Search", "Statute Analysis", "Citation Tracking", "Research Management"]
    },
    {
      icon: Database,
      title: "Client Management",
      description: "Complete client relationship management systems designed for law firms and legal departments.",
      features: ["Client Intake", "Communication Tracking", "Billing Integration", "Reporting Analytics"]
    }
  ]

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Streamline legal workflows and reduce time spent on administrative tasks.",
      icon: Clock
    },
    {
      title: "Enhanced Accuracy",
      description: "Reduce errors and improve document quality with automated processes.",
      icon: CheckCircle
    },
    {
      title: "Better Client Service",
      description: "Improve client satisfaction with better communication and faster response times.",
      icon: Users
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with legal industry regulations and data protection requirements.",
      icon: Shield
    }
  ]

  const caseStudies = [
    {
      title: "Mid-Sized Law Firm",
      challenge: "Struggled with inefficient case management and document organization across multiple practice areas.",
      solution: "Implemented a comprehensive case management system with integrated document automation and client portal.",
      results: ["50% reduction in administrative time", "Improved document organization", "Enhanced client communication"]
    },
    {
      title: "Corporate Legal Department",
      challenge: "Needed to streamline contract management and improve legal research capabilities for in-house counsel.",
      solution: "Deployed a legal tech platform with contract lifecycle management and AI-powered research tools.",
      results: ["40% faster contract review", "Improved research efficiency", "Better risk management"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0">
          <img 
            src="/legal.jpg" 
            alt="Legal Technology" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Legal Software
              <span className="block text-yellow-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering legal professionals with innovative software solutions for law firms, corporate legal departments, and court systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legal Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed to address the unique challenges of the legal industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Legal Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with legal technology experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our legal solutions have transformed practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Legal Practice?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our legal software solutions can help you improve efficiency and better serve your clients
          </p>
          <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}