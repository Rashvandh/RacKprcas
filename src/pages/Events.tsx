import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AnimationWrapper from "@/components/AnimationWrapper";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const categories = [
    {
      id: 'community',
      label: 'Community Service',
      description: 'Service projects that benefit the local community',
      image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755454317/photo-1521791055366-0d553872125f_kyryoy.avif'
    },
    {
      id: 'club',
      label: 'Club Service',
      description: 'Activities that strengthen our club and its members',
      image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755454347/photo-1517048676732-d65bc937f952_ildrq7.avif'
    },
    {
      id: 'professional',
      label: 'Professional Service',
      description: 'Initiatives for professional development and networking',
      image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755454416/photo-1522202176988-66273c2fd55f_bp63jk.avif'
    },
    {
      id: 'international',
      label: 'International Service',
      description: 'Projects with global impact and international collaboration',
      image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755454436/photo-1500382017468-9049fed747ef_soka7e.avif'
    },
    {
      id: 'district',
      label: 'District Priority Projects',
      description: 'Key initiatives supported by our district',
      image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755454458/photo-1454165804606-c3d57bc86b40_tdndca.avif'
    }
  ];

  // ✅ Fixed links — IDs match categories
  const categoryDriveLinks = {
    community: 'https://drive.google.com/drive/folders/1lA9SFjFhroYV37z3b1OWlNaeopjKm0D2',
    club: 'https://drive.google.com/drive/folders/1esHj85DyEeuQ3rmeFuutRfWs_-JIzPVj',
    professional: 'https://drive.google.com/drive/folders/11ZJ-dSt3kbjRAY2kQ5wr6BXNwLnC_yy1',
    international: 'https://drive.google.com/drive/folders/1klTVc04Ah00r_Htbpdhkk7jdrBQ0_R47',
    district: 'https://drive.google.com/drive/folders/1DndYnGrczv6MMXkQBcArfo_M22kH8Me-'
  };

  const handleCategoryClick = (categoryId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const driveLink = categoryDriveLinks[categoryId as keyof typeof categoryDriveLinks];
    if (driveLink) {
      window.open(driveLink, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredCategories = activeFilter === 'all'
    ? categories
    : categories.filter(cat => cat.id === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://res.cloudinary.com/drmwtmeg3/image/upload/v1755412154/team-photo_lefoty.jpg"
            alt="Events Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Join us for exciting events that make a difference in our community and beyond.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming <span className="text-primary">Events</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join us for these exciting upcoming events. Mark your calendars!
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'RAC-a-THON',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755885523/WhatsApp_Image_2025-08-22_at_20.54.06_9c3cb13c_zhno2w.jpg',
                description: 'RAC-a-THON is a 24-hour hackathon.'
              },
              {
                title: 'Yours Lovingly',
                date: '2025-08-24',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755885523/WhatsApp_Image_2025-08-22_at_20.54.05_8f591faf_dlqyvp.jpg',
                time: '10:00 AM - 1:00 PM',
                location: 'Uthavum Karangal,Avinashi',
                description: 'Enhance the power of giving.'
              },
              {
                title: 'Lingua Connection',
                date: '2025-08-25',
                platform: 'Gmeet',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755885523/WhatsApp_Image_2025-08-22_at_20.54.05_3b4f2292_yjzwwh.jpg',
                description: 'Lingua Connection - A day of language exchange and learning.'
              },
              {
                title: 'அன்பின் மறு உருவம்',
                date: '2025-08-26',
                time: '10:00 AM - 1:00 PM',
                location: 'FAMILY FOR CHILDREN, VELLALOR,CBE.',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755885523/WhatsApp_Image_2025-08-22_at_20.54.04_a199c8ac_zeoxqn.jpg',
                description: 'அன்பின் மறு உருவம் is an initiative to help elderly people.'
              },
              {
                title: 'Mattaipandhu 2.0',
                date: '2025-08-28',
                location:'Karumathampatti',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1756053140/WhatsApp_Image_2025-08-24_at_21.45.07_224b18e3_fllgx6.jpg',
                description: 'Mattaipandhu 2.0 is an initiative to build a community.'
              },
              {
                title: 'வெறும் பெண் இல்லை',
                date: '2025-08-28',
                location:'Arasur Govt School',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1755885523/WhatsApp_Image_2025-08-22_at_20.54.04_c5c998e3_o6x8vz.jpg',
                description: 'வெறும் பெண் இல்லை its an self defence learning session for girls.'
              },
              {
                title: 'Excelerate-Art of Speaking',
                date: '2025-08-29',
                time: '10:00 AM',
                location:'Seminar Hall(KPRCAS)',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1756053002/WhatsApp_Image_2025-08-24_at_20.52.42_78b8ef19_arjsxf.jpg',
                description: 'Excelerate-Art of Speaking is an initiative to build a community.'
              },
              {
                title: 'Mattaipandhu 2.0',
                date: '2025-08-29',
                location:'Karumathampatti',
                image: 'https://res.cloudinary.com/drmwtmeg3/image/upload/v1756053007/WhatsApp_Image_2025-08-24_at_20.52.43_ee2f8d61_o93jmw.jpg',
                description: 'Mattaipandhu 2.0 is an initiative to build a community.'
              },
              {
                title: 'வளமான கல்விக்காக-(Donation of Secondary books & guides',
                date: '2025-08-30',
                time:'03:00 PM',
                location:'Arasur Govt School',
                image:'https://res.cloudinary.com/drmwtmeg3/image/upload/v1756053014/WhatsApp_Image_2025-08-24_at_21.45.07_f2b2c24d_ldwk5w.jpg',
                description: 'Books are the bridges that connects dream to reality-donate them'
              }
            ].map((event, index) => (
              <AnimationWrapper key={index} delay={index * 100} animation="fade-in">
                <Card className="h-full bg-white border-none shadow-soft hover-lift transition-all duration-300 overflow-hidden">
                  {event.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <button 
                        onClick={() => setSelectedImage({ src: event.image, alt: event.title })}
                        className="w-full h-full focus:outline-none"
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                        />
                      </button>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      {event.date && (
                        <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      )}
                    </div>
                    {event.time && (
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="truncate">{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-start text-sm text-muted-foreground mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="break-words">{event.location}</span>
                      </div>
                    )}
                    {event.platform && (
                      <div className="flex items-start text-sm text-muted-foreground mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="break-words">{event.platform}</span>
                      </div>
                    )}
                    <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                  </CardHeader>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Event Files and Documents </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our events by category and find what interests you the most.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimationWrapper key={category.id} delay={index * 100} animation="fade-in">
                <Card 
                  className="card-hover h-full overflow-hidden bg-white border-none shadow-soft hover-lift cursor-pointer"
                  onClick={(e) => handleCategoryClick(category.id, e)}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.label}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
