import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, ExternalLink, Calendar, Users, Award, Star, CheckCircle, Clock } from "lucide-react"

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: "HealthPlus EHR System",
      category: "Healthcare",
      description: "Comprehensive electronic health records system for a multi-specialty hospital network.",
      image: "/healthcare.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      duration: "8 months",
      teamSize: "12 members",
      challenge: "The client needed to integrate multiple hospital systems and improve patient data sharing across facilities while maintaining HIPAA compliance.",
      solution: "We developed a scalable EHR system with real-time data synchronization, advanced security features, and intuitive user interfaces for medical staff.",
      results: ["40% reduction in administrative time", "Improved patient care coordination", "Enhanced data security", "100% HIPAA compliance"],
      client: "Regional Hospital Network",
      year: "2023"
    },
    {
      title: "AutoFleet Management",
      category: "Automotive",
      description: "Advanced fleet management platform for a national logistics company.",
      image: "/automotive.jpg",
      technologies: ["Angular", "Python", "MongoDB", "IoT"],
      duration: "6 months",
      teamSize: "8 members",
      challenge: "The client struggled with high fuel costs, inefficient route planning, and poor vehicle utilization across their delivery fleet.",
      solution: "We implemented a comprehensive fleet management system with real-time GPS tracking, route optimization algorithms, and predictive maintenance capabilities.",
      results: ["25% reduction in fuel costs", "30% improvement in delivery times", "Better vehicle utilization", "Reduced maintenance costs"],
      client: "National Logistics Company",
      year: "2023"
    }
  ]

  const industryProjects = [
    {
      title: "LegalCase Pro",
      category: "Legal",
      description: "Case management and document automation system for a mid-sized law firm.",
      image: "/legal.jpg",
      technologies: ["Vue.js", "Django", "MySQL", "Docker"],
      duration: "5 months",
      teamSize: "6 members",
      challenge: "The law firm struggled with inefficient case management and document organization across multiple practice areas.",
      solution: "We developed a comprehensive case management system with integrated document automation and client portal.",
      results: ["50% reduction in administrative time", "Improved document organization", "Enhanced client communication"],
      client: "Mid-Sized Law Firm",
      year: "2022"
    },
    {
      title: "EduLearn Platform",
      category: "Education",
      description: "Online learning management system for a university's distance education program.",
      image: "/education.jpg",
      technologies: ["Next.js", "Express.js", "PostgreSQL", "WebRTC"],
      duration: "7 months",
      teamSize: "10 members",
      challenge: "The university needed to expand their online course offerings and improve student engagement in virtual classrooms.",
      solution: "We implemented a comprehensive LMS with video conferencing integration and interactive learning tools.",
      results: ["45% increase in student enrollment", "Improved course completion rates", "Enhanced student satisfaction"],
      client: "State University",
      year: "2022"
    },
    {
      title: "MediConnect Telemedicine",
      category: "Healthcare",
      description: "Telemedicine platform connecting patients with healthcare providers remotely.",
      image: "/healthcare.jpg",
      technologies: ["React Native", "Node.js", "WebRTC", "HIPAA Compliant"],
      duration: "4 months",
      teamSize: "5 members",
      challenge: "Healthcare providers needed a secure way to conduct virtual consultations and manage remote patient care.",
      solution: "We developed a secure telemedicine platform with video consultations, appointment scheduling, and electronic prescription management.",
      results: ["60% increase in patient reach", "Reduced no-show rates", "Improved patient satisfaction"],
      client: "Multi-Specialty Clinic",
      year: "2022"
    },
    {
      title: "CarConnect IoT",
      category: "Automotive",
      description: "IoT platform for connected vehicle monitoring and predictive maintenance.",
      image: "/automotive.jpg",
      technologies: ["React", "Python", "InfluxDB", "MQTT", "Machine Learning"],
      duration: "9 months",
      teamSize: "15 members",
      challenge: "An automotive manufacturer needed real-time monitoring of vehicle performance and predictive maintenance capabilities.",
      solution: "We built an IoT platform that collects vehicle data, provides real-time analytics, and uses machine learning for predictive maintenance.",
      results: ["35% reduction in breakdowns", "Improved vehicle performance", "Enhanced customer satisfaction"],
      client: "Automotive Manufacturer",
      year: "2021"
    }
  ]

  const technologies = [
    "React", "Angular", "Vue.js", "Next.js", "Node.js", "Python", "Django", "Express.js",
    "PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
    "IoT", "Machine Learning", "WebRTC", "HIPAA", "Mobile Development", "API Development"
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "12", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" }
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
              <span className="block text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our successful projects and discover how we've helped businesses across various industries achieve their digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighted projects that showcase our expertise and innovation
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <CardTitle className="text-3xl mb-4">{project.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600 mb-6">
                      {project.description}
                    </CardDescription>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {project.teamSize}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild>
                      <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our work across different industries and business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {project.teamSize}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Details <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver innovative solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's create something amazing together. Your success story could be next!
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