
  import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, FileSignature, Microscope, University, Briefcase, Users, Phone, User, CreditCard, Info, Camera, Megaphone } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const aboutUsItems = [
    { title: "Vision & Mission", href: "/about/vision-mission" },
    { title: "Chancellor's Message", href: "#" },
    { title: "Vice-Chancellor's Message", href: "#" },
    { title: "Governance & Committees", href: "#" },
    { title: "GBU Strategic Perspective", href: "#" },
    { title: "Policies, Statutes & RTI", href: "#" },
    { title: "Mandatory Disclosures", href: "#" },
    { title: "Media Coverage", href: "#" }
  ];
  const researchItems = [{
    title: "Research Highlights & Achievements",
    href: "/research/highlights"
  }, {
    title: "Research Centers & Labs",
    href: "/research/centers"
  }, {
    title: "Publications & Patents",
    href: "/research/publications"
  }, {
    title: "Innovation & Incubation",
    href: "/research/innovations"
  }, {
    title: "StartUP",
    href: "/research/startup"
  }, {
    title: "Funded Projects & IPR Cell",
    href: "/research/funded-projects"
  } ];
  const academicsItems = [
    { title: "Academic Calendar & Regulations", href: "#" },
    { title: "News, Events and Gallery", href: "#" },
    { title: "CBCS Curriculum Framework", href: "#" },
    { title: "Faculty Directory", href: "#" },
    { title: "Centers of Excellence", href: "#" },
    { title: "International Collaboration", href: "#" },
    { title: "Reports & Publications", href: "#" }
  ];

  const schoolsAndDepartments = [
    { title: "Biotechnology", href: "#" },
    { title: "Buddhist Studies & Civilization", href: "#" },
    { title: "Engineering", href: "#" },
    { title: "Humanities & Social Sciences", href: "#" },
    { title: "Information & Communication Technology", href: "#" },
    { title: "Law, Justice and Governance", href: "#" },
    { title: "Management", href: "#" },
    { title: "Vocational Studies & Applied Sciences", href: "#" }
  ];

  const admissionsItems = [
    { title: "Admission Process", href: "#" },
    { title: "Courses Offered (UG | PG | PhD)", href: "#" },
    { title: "Eligibility & Reservation", href: "#" },
    { title: "Fee Structure & Prospectus", href: "#" },
    { title: "International Admissions", href: "#" }
  ];

 

  const campusLifeItems = [
    { title: "Virtual Tour", href: "#" },
    { title: "Student Clubs & Councils", href: "#" },
    { title: "NSS and NCC", href: "#" },
    { title: "Hostel, Mess, and Dining", href: "#" },
    { title: "Sports & Cultural Activities", href: "#" },
    { title: "Meditation Center", href: "#" },
    { title: "Health & Wellness", href: "#" }
  ];

  const announcementsItems = [
    { title: "News & Notifications", href: "/announcements/news-notifications" },
    { title: "Events Calendar", href: "/announcements/events-calendar" },
    { title: "Photo Gallery", href: "/announcements/photo-gallery" },
    { title: "Media Coverage", href: "/announcements/media-coverage" },
    { title: "Student Achievements", href: "/announcements/student-achievements" },
    { title: "Faculty & Research Highlights", href: "/announcements/faculty-research-highlights" }
  ];

  const placementsItems = [
    { title: "Placement Brochure", href: "#" },
    { title: "Campus Recruiters", href: "#" },
    { title: "Placement Statistics", href: "#" },
    { title: "Internship Programmes", href: "#" },
    { title: "Training & Career Services", href: "#" }
  ];

  const alumniItems = [
    { title: "Alumni Network", href: "#" },
    { title: "Registration & Directory", href: "#" },
    { title: "Alumni Talks", href: "#" },
    { title: "Events & Reunions", href: "#" }
  ];

  return (
    <header className="w-full">
      {/* Secondary Navbar */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-200 transition-colors flex items-center gap-1">
                <Megaphone className="h-3 w-3" />
                Tenders
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors flex items-center gap-1">
                <Megaphone className="h-3 w-3" />
                Recruitments
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">Booking</a>
              <a href="#" className="hover:text-orange-200 transition-colors flex items-center gap-1">
                <Info className="h-3 w-3" />
                RTI
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">Sitemap</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-200 transition-colors flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Online Fee Payment
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors flex items-center gap-1">
                <User className="h-3 w-3" />
                Student Portal
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">Employee Login</a>
              <a href="#" className="hover:text-orange-200 transition-colors">Directory</a>
              <a href="#" className="hover:text-orange-200 transition-colors flex items-center gap-1">
                <Phone className="h-3 w-3" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navbar */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                alt="GBU Logo" 
                src="/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png" 
                className="h-12 w-25 mr-3" 
              />
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {aboutUsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-4 p-6 bg-white">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-3 text-gray-900">Academic Services</h4>
                          <ul className="space-y-2">
                            {academicsItems.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <a 
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    )}
                                    href={item.href}
                                  >
                                    <div className="text-sm font-medium leading-none">{item.title}</div>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3 text-gray-900">Schools & Departments</h4>
                          <ul className="space-y-2">
                            {schoolsAndDepartments.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <a 
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    )}
                                    href={item.href}
                                  >
                                    <div className="text-sm font-medium leading-none">{item.title}</div>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <FileSignature className="h-4 w-4 mr-1" />
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {admissionsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <Microscope className="h-4 w-4 mr-1" />
                    Research
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {researchItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <University className="h-4 w-4 mr-1" />
                    Campus Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {campusLifeItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <Camera className="h-4 w-4 mr-1" />
                    Announcements
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {announcementsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Placements
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {placementsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    Alumni
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {alumniItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a 
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search */}
            <div className="flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <Input 
                    placeholder="Search..." 
                    className="border-0 bg-transparent focus:ring-0 w-64" 
                  />
                  <Search className="h-5 w-5 text-gray-500 ml-2" />
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsSearchOpen(true)} 
                  className="text-blue-600 hover:text-green-600"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
