import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, Users, Shield, GraduationCap, BookOpen, Monitor, Smartphone, BarChart } from "lucide-react"

export default function EducationPage() {
  const solutions = [
    {
      icon: BookOpen,
      title: "Learning Management Systems (LMS)",
      description: "Comprehensive LMS platforms that facilitate online learning, course management, and student engagement.",
      features: ["Course Creation", "Student Progress Tracking", "Interactive Content", "Assessment Tools"]
    },
    {
      icon: Monitor,
      title: "Student Information Systems",
      description: "Complete student management solutions for schools, colleges, and universities.",
      features: ["Enrollment Management", "Grade Tracking", "Attendance Monitoring", "Report Generation"]
    },
    {
      icon: Smartphone,
      title: "Mobile Learning Apps",
      description: "Custom mobile applications that enable learning anytime, anywhere on any device.",
      features: ["Offline Access", "Push Notifications", "Interactive Quizzes", "Progress Syncing"]
    },
    {
      icon: BarChart,
      title: "Online Assessment Tools",
      description: "Advanced assessment and evaluation platforms for creating, administering, and grading tests.",
      features: ["Test Creation", "Automated Grading", "Performance Analytics", "Plagiarism Detection"]
    }
  ]

  const benefits = [
    {
      title: "Enhanced Learning Experience",
      description: "Improve student engagement and learning outcomes with interactive digital tools.",
      icon: GraduationCap
    },
    {
      title: "Administrative Efficiency",
      description: "Streamline administrative tasks and reduce paperwork for educators and staff.",
      icon: Users
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed educational decisions with comprehensive analytics and reporting.",
      icon: BarChart
    },
    {
      title: "Scalable Solutions",
      description: "Flexible platforms that grow with your institution and adapt to changing needs.",
      icon: Shield
    }
  ]

  const caseStudies = [
    {
      title: "University Distance Learning Program",
      challenge: "Needed to expand their online course offerings and improve student engagement in virtual classrooms.",
      solution: "Implemented a comprehensive LMS with video conferencing integration and interactive learning tools.",
      results: ["45% increase in student enrollment", "Improved course completion rates", "Enhanced student satisfaction"]
    },
    {
      title: "K-12 School District",
      challenge: "Struggled with inefficient student data management and communication between teachers and parents.",
      solution: "Deployed an integrated student information system with parent portal and mobile app.",
      results: ["60% improvement in administrative efficiency", "Better parent-teacher communication", "Reduced paperwork"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0">
          <img 
            src="/education.jpg" 
            alt="Education Technology" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Education Software
              <span className="block text-yellow-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforming education with innovative technology solutions for schools, universities, and online learning platforms.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Education Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed to address the unique challenges of the education industry
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Education Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with education technology experts
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
              Real-world examples of how our education solutions have transformed institutions
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Educational Institution?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our education software solutions can help you enhance learning experiences and improve operational efficiency
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