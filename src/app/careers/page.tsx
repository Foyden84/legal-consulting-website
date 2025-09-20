import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, MapPin, Clock, DollarSign, Users, Award, Briefcase, Heart, Target, Lightbulb, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Silicon Valley, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $160,000",
      description: "We're looking for an experienced Full Stack Developer to join our team and help build cutting-edge software solutions for our clients.",
      requirements: [
        "5+ years of experience with React, Node.js, and modern web technologies",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication and teamwork abilities",
        "Bachelor's degree in Computer Science or related field"
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams",
        "Mentor junior developers",
        "Participate in code reviews and architectural decisions",
        "Stay up-to-date with emerging technologies"
      ],
      benefits: ["Health insurance", "401(k) matching", "Flexible work hours", "Professional development", "Stock options"],
      posted: "2 weeks ago"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $120,000",
      description: "Join our design team to create intuitive and visually appealing user experiences for our software products.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking process",
        "Experience with user research and usability testing",
        "Bachelor's degree in Design or related field"
      ],
      responsibilities: [
        "Create user-centered designs for web and mobile applications",
        "Conduct user research and usability testing",
        "Collaborate with product managers and developers",
        "Develop and maintain design systems",
        "Create wireframes, prototypes, and high-fidelity designs"
      ],
      benefits: ["Health insurance", "401(k) matching", "Remote work options", "Design tools budget", "Conference opportunities"],
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $140,000",
      description: "Help us build and maintain robust CI/CD pipelines and cloud infrastructure for our growing client base.",
      requirements: [
        "4+ years of DevOps or Site Reliability Engineering experience",
        "Experience with containerization (Docker, Kubernetes)",
        "Knowledge of Infrastructure as Code (Terraform, CloudFormation)",
        "Familiarity with monitoring and logging tools",
        "Experience with AWS, Azure, or GCP"
      ],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure and deployments",
        "Monitor system performance and reliability",
        "Automate infrastructure provisioning",
        "Collaborate with development teams on deployment strategies"
      ],
      benefits: ["Health insurance", "401(k) matching", "Flexible schedule", "Certification reimbursement", "Home office setup"],
      posted: "3 days ago"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Silicon Valley, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$100,000 - $130,000",
      description: "Lead complex software development projects and ensure successful delivery for our clients.",
      requirements: [
        "5+ years of project management experience in software development",
        "PMP or Agile certification preferred",
        "Experience with project management tools (JIRA, Asana, etc.)",
        "Strong leadership and communication skills",
        "Bachelor's degree in Business or related field"
      ],
      responsibilities: [
        "Plan and execute software development projects",
        "Manage project timelines, budgets, and resources",
        "Communicate with clients and stakeholders",
        "Lead project teams and mentor team members",
        "Identify and mitigate project risks"
      ],
      benefits: ["Health insurance", "401(k) matching", "Performance bonuses", "Professional development", "Leadership training"],
      posted: "1 week ago"
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive salaries, 401(k) matching, and stock options for long-term growth."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible work hours, remote work options, and generous PTO policy."
    },
    {
      icon: Target,
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement paths."
    }
  ]

  const culture = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with talented professionals who support and inspire each other."
    },
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "Encourage creativity and out-of-the-box thinking to solve complex problems."
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Committed to delivering high-quality solutions that exceed client expectations."
    },
    {
      icon: Briefcase,
      title: "Impactful Work",
      description: "Work on projects that make a real difference in various industries."
    }
  ]

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Open Positions" },
    { number: "4.8", label: "Employee Rating" },
    { number: "95%", label: "Retention Rate" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our
              <span className="block text-yellow-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Be part of a dynamic team that's transforming businesses through innovative software solutions. Grow your career with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link href="#open-positions">View Open Positions</Link>
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

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join TechSolutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us a great place to build your career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Employee Benefits</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Culture</h3>
              <div className="space-y-6">
                {culture.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {position.experience}
                        </div>
                        <Badge variant="outline">{position.posted}</Badge>
                      </div>
                      <CardDescription className="text-lg text-gray-600 mb-4">
                        {position.description}
                      </CardDescription>
                      <div className="text-lg font-semibold text-blue-600 mb-4">
                        {position.salary}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Additional Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="secondary">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button asChild>
                      <Link href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Our streamlined hiring process ensures we find the best talent while providing a great candidate experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-lg">Application</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Submit your application and resume through our career portal
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle className="text-lg">Initial Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  HR team reviews your application and qualifications
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle className="text-lg">Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Technical and cultural fit interviews with team members
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <CardTitle className="text-lg">Offer & Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Receive offer and join our amazing team!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us in building innovative software solutions that transform businesses
          </p>
          <Button size="lg" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="#open-positions">Apply Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}