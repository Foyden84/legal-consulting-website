import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, Users, Shield, Car, Settings, Smartphone, BarChart, Zap } from "lucide-react"

export default function AutomotivePage() {
  const solutions = [
    {
      icon: Car,
      title: "Fleet Management Systems",
      description: "Comprehensive fleet management solutions that optimize vehicle operations and reduce costs.",
      features: ["GPS Tracking", "Route Optimization", "Maintenance Scheduling", "Fuel Management"]
    },
    {
      icon: Settings,
      title: "Dealer Management Systems (DMS)",
      description: "Complete dealership management software that streamlines sales, service, and inventory operations.",
      features: ["Inventory Management", "Sales Pipeline", "Service Scheduling", "Customer Relationship Management"]
    },
    {
      icon: Smartphone,
      title: "Connected Vehicle Solutions",
      description: "IoT-enabled vehicle connectivity solutions for real-time monitoring and predictive maintenance.",
      features: ["Real-time Diagnostics", "Remote Monitoring", "Predictive Maintenance", "Driver Behavior Analysis"]
    },
    {
      icon: BarChart,
      title: "Automotive Analytics",
      description: "Data analytics platforms that provide actionable insights for automotive business decisions.",
      features: ["Sales Analytics", "Service Metrics", "Customer Insights", "Performance Dashboards"]
    }
  ]

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Streamline operations and reduce costs with integrated automotive software solutions.",
      icon: Zap
    },
    {
      title: "Enhanced Customer Experience",
      description: "Improve customer satisfaction with better service and communication tools.",
      icon: Users
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed business decisions with comprehensive analytics and reporting.",
      icon: BarChart
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge automotive technology solutions.",
      icon: Shield
    }
  ]

  const caseStudies = [
    {
      title: "National Auto Dealership Group",
      challenge: "Needed to integrate multiple dealership locations and standardize operations across the network.",
      solution: "Implemented a comprehensive DMS with centralized inventory management and unified customer database.",
      results: ["35% increase in operational efficiency", "Improved inventory turnover", "Enhanced customer satisfaction"]
    },
    {
      title: "Logistics Company",
      challenge: "Struggled with high fuel costs and inefficient route planning for their delivery fleet.",
      solution: "Deployed a fleet management system with real-time tracking and route optimization capabilities.",
      results: ["25% reduction in fuel costs", "30% improvement in delivery times", "Better vehicle utilization"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0">
          <img 
            src="/automotive.jpg" 
            alt="Automotive Technology" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automotive Software
              <span className="block text-yellow-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Driving innovation in the automotive industry with cutting-edge software solutions for dealerships, fleet management, and connected vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link href="/contact">Request a Demo</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Automotive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed to address the unique challenges of the automotive industry
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Automotive Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with automotive technology experts
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
              Real-world examples of how our automotive solutions have transformed businesses
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Drive Your Automotive Business Forward?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our automotive software solutions can help you optimize operations and increase profitability
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