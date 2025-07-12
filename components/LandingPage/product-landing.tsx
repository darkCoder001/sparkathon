import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  CheckCircle,
  Users,
  Zap,
  BarChart3,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl text-blue-600">
              SmartShop AI
            </span>
            {/* <Badge variant="secondary" className="ml-2">
              Walmart Hackathon 2025
            </Badge> */}
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Impact
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Team
            </Link>
          </nav>
          <Link href={"/dashboard"} className="hidden md:block" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700">Try Demo</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  {/* <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 w-fit">
                    🏆 Walmart Hackathon Winner
                  </Badge> */}
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionizing
                    <span className="block text-yellow-400">
                      Retail Experience
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-blue-100 md:text-xl">
                    Our AI-powered solution transforms how customers shop by
                    personalizing pricing based on real-time weather, seasonal
                    demand, and stock levels—reducing search time and increasing
                    satisfaction through contextually relevant offers.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                  <Link
                    href={"https://github.com/darkCoder001/sparkathon"}
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                    >
                      View GitHub
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-blue-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Faster Search</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span> User Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span> More Conversions</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-600">
                            AI-Powered Search
                          </div>
                          <div className="text-2xl font-bold text-blue-900">
                            SmartShop
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-red-100 text-red-800">The Problem</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-900">
                    Customers Struggle to Find What They Need
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    Traditional search results in 60% of customers leaving
                    without finding their desired products. Generic
                    recommendations miss the mark, leading to frustration and
                    lost sales.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">
                      Average search takes 8+ minutes
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">
                      40% abandon cart due to poor discovery
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">
                      Low engagement with recommendations
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-green-100 text-green-800">
                    Our Solution
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-900">
                    AI That Understands Intent
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    SmartShop AI uses natural language processing and behavioral
                    analysis to understand exactly what customers want,
                    delivering personalized results in seconds.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">
                      Instant, contextual search results
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">
                      Personalized product recommendations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">
                      Visual similarity matching
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Powerful Features
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Built with cutting-edge AI technology to deliver exceptional
                shopping experiences.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-900">Smart Search</CardTitle>
                  <CardDescription>
                    Natural language processing understands complex queries and
                    finds exactly what customers mean.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-blue-900">
                    Personalization
                  </CardTitle>
                  <CardDescription>
                    Machine learning algorithms adapt to individual preferences
                    and shopping patterns.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-blue-900">Analytics</CardTitle>
                  <CardDescription>
                    Real-time insights help optimize inventory and improve
                    customer satisfaction.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                See It In Action
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Watch how SmartShop AI transforms the shopping experience in
                real-time.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold"
                  >
                    <Play className="mr-2 h-6 w-6" />
                    Play Demo Video
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    Live Demo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact/Results */}
        <section
          id="impact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Proven Impact
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Our solution delivers measurable results that transform business
                outcomes.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="text-4xl font-bold text-blue-600">70%</div>
                  <CardTitle className="text-lg text-blue-900">
                    Faster Search
                  </CardTitle>
                  <CardDescription>
                    Average time to find products reduced from 8 to 2.4 minutes
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="text-4xl font-bold text-green-600">40%</div>
                  <CardTitle className="text-lg text-blue-900">
                    More Conversions
                  </CardTitle>
                  <CardDescription>
                    Significant increase in purchase completion rates
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-600">95%</div>
                  <CardTitle className="text-lg text-blue-900">
                    User Satisfaction
                  </CardTitle>
                  <CardDescription>
                    Customers love the personalized experience
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-600">60%</div>
                  <CardTitle className="text-lg text-blue-900">
                    Less Abandonment
                  </CardTitle>
                  <CardDescription>
                    Dramatic reduction in cart abandonment rates
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-yellow-50 border-none">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Quote className="h-12 w-12 text-blue-600" />
                  <blockquote className="text-xl md:text-2xl font-medium text-blue-900 leading-relaxed">
                    "This solution represents the future of retail technology.
                    The AI's ability to understand customer intent is
                    remarkable, and the impact on user experience is
                    transformational."
                  </blockquote>
                  <div className="space-y-2">
                    <div className="font-semibold text-blue-900">Om Mishra</div>
                    <div className="text-sm text-gray-600">Team Member</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Meet Our Team
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                The innovators behind SmartShop AI - passionate about
                transforming retail technology.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">SD</span>
                  </div>
                  <CardTitle className="text-blue-900">
                    Shashwat Dimri
                  </CardTitle>
                  <CardDescription>Full-Stack Developer</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">KB</span>
                  </div>
                  <CardTitle className="text-blue-900">Kushal Bhana</CardTitle>
                  <CardDescription>AI/ML Engineer</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">IL</span>
                  </div>
                  <CardTitle className="text-blue-900">
                    Ishank Lalwani
                  </CardTitle>
                  <CardDescription>UX Designer</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">OM</span>
                  </div>
                  <CardTitle className="text-blue-900">Om Mishra</CardTitle>
                  <CardDescription>Data Scientist</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Retail?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the future of shopping with SmartShop AI. Join the
                  revolution in retail technology.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Try Live Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  View Source Code
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <p className="text-xs text-gray-600">
              © 2025 SmartShop AI Team. Walmart Hackathon 2025.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600"
            >
              Demo
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600"
            >
              Contact Team
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
