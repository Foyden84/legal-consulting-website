import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, Code, Users, Lightbulb, Award, Zap, Shield, Database, Globe, Smartphone, Cloud, Brain, Settings } from "lucide-react"

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and objectives.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      price: "Starting from $25,000",
      duration: "3-6 months"
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Extend your team with our expert developers and accelerate your project timeline.",
      features: ["Dedicated Developers", "Project Managers", "UI/UX Designers", "QA Engineers"],
      price: "Starting from $8,000/month",
      duration: "Ongoing"
    },
    {
      icon: Lightbulb,
      title: "Technology Consulting",
      description: "Strategic guidance to help you make informed technology decisions and stay ahead of the curve.",
      features: ["Technology Strategy", "Architecture Design", "Digital Transformation", "Process Optimization"],
      price: "Starting from $5,000",
      duration: "2-4 weeks"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality assurance to ensure your software performs flawlessly.",
      features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing"],
      price: "Starting from $3,000",
      duration: "Project-based"
    }
  ]

  const specializedServices = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "AWS/Azure/GCP", "Serverless Architecture", "DevOps"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Data Warehousing", "Business Intelligence", "Machine Learning", "Data Visualization"],
      technologies: ["SQL", "NoSQL", "Python", "R", "Tableau", "Power BI"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Monitoring"],
      technologies: ["OWASP", "ISO 27001", "GDPR", "HIPAA"]
    },
    {
      icon: Globe,
      title: "Integration Services",
      description: "Seamlessly connect your systems and applications for optimal workflow efficiency.",
      features: ["API Integration", "Third-party Systems", "Legacy Integration", "Workflow Automation"],
      technologies: ["REST API", "GraphQL", "SOAP", "Webhooks", "ETL"]
    }
  ]

  const emergingTechnologies = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to drive innovation and automation.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"]
    },
    {
      icon: Smartphone,
      title: "IoT Solutions",
      description: "Connect and manage your IoT devices with comprehensive IoT platforms.",
      features: ["Device Management", "Data Collection", "Real-time Monitoring", "Predictive Maintenance"],
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN"]
    },
    {
      icon: Zap,
      title: "Blockchain Development",
      description: "Build secure and transparent blockchain solutions for various industries.",
      features: ["Smart Contracts", "DApps", "Cryptocurrency", "Supply Chain"],
      technologies: ["Ethereum", "Solidity", "Web3.js", "Hyperledger"]
    },
    {
      icon: Settings,
      title: "Automation & RPA",
      description: "Streamline your business processes with robotic process automation.",
      features: ["Process Automation", "Workflow Design", "Task Automation", "Integration"],
      technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Zapier"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business goals, challenges, and requirements through comprehensive analysis."
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Our experts develop a detailed project plan with timelines, milestones, and deliverables."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We create intuitive designs and develop robust solutions using industry best practices."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest quality standards."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle seamless deployment and provide comprehensive training and support."
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to ensure your solution continues to perform optimally."
    }
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
              <span className="block text-yellow-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive software development services designed to transform your business and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our foundation services that form the backbone of our software development expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Price:</span>
                      <div className="text-blue-600 font-semibold">{service.price}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <div className="text-blue-600 font-semibold">{service.duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced solutions for specific business needs and technical challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
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

      {/* Emerging Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emerging Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions leveraging the latest technological innovations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingTechnologies.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
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

      {/* Process Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              A structured approach to ensure successful project delivery and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-opacity-20 transition-all">
                <CardHeader>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{step.step}</div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-100">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}