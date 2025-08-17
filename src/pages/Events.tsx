import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimationWrapper from '@/components/AnimationWrapper';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    {
      id: 'community',
      label: 'Community Service',
      description: 'Service projects that benefit the local community',
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'club',
      label: 'Club Service',
      description: 'Activities that strengthen our club and its members',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'professional',
      label: 'Professional Service',
      description: 'Initiatives for professional development and networking',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'international',
      label: 'International Service',
      description: 'Projects with global impact and international collaboration',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'district',
      label: 'District Priority Projects',
      description: 'Key initiatives supported by our district',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Browse our event categories to view photos and documents from past events.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white p-2 rounded-full shadow-sm">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant={activeFilter === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveFilter('all')}
                  className="rounded-full"
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeFilter === category.id ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setActiveFilter(category.id)}
                    className="rounded-full"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <AnimationWrapper key={category.id} delay={index * 100} animation="fade-in">
                <Card 
                  className="card-hover h-full overflow-hidden bg-white border-none shadow-soft hover-lift cursor-pointer"
                  onClick={(e) => handleCategoryClick(category.id, e)}
                >
                  <div className="relative h-48 overflow-hidden">
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
    </div>
  );
};

export default Events;
