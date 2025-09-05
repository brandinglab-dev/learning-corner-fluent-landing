import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTranslation } from 'react-i18next';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: "Sebastián Ramos González",
      role: t('testimonials.reviews.sebastian.role'),
      text: t('testimonials.reviews.sebastian.text'),
      rating: 5,
      course: t('testimonials.reviews.sebastian.course')
    },
    {
      name: "Daniel Muñoz Benitez",
      role: t('testimonials.reviews.daniel.role'),
      text: t('testimonials.reviews.daniel.text'),
      rating: 5,
      course: t('testimonials.reviews.daniel.course')
    },
    {
      name: "Diana GG",
      role: t('testimonials.reviews.diana.role'),
      text: t('testimonials.reviews.diana.text'),
      rating: 5,
      course: t('testimonials.reviews.diana.course')
    },
    {
      name: "Verónica Díez",
      role: t('testimonials.reviews.veronica.role'),
      text: t('testimonials.reviews.veronica.text'),
      rating: 5,
      course: t('testimonials.reviews.veronica.course')
    },
    {
      name: "Yolanda Martínez Morales",
      role: t('testimonials.reviews.yolanda.role'),
      text: t('testimonials.reviews.yolanda.text'),
      rating: 5,
      course: t('testimonials.reviews.yolanda.course')
    },
    {
      name: "Rocío García Ramírez",
      role: t('testimonials.reviews.rocio.role'),
      text: t('testimonials.reviews.rocio.text'),
      rating: 5,
      course: t('testimonials.reviews.rocio.course')
    }
  ];

  return (
    <section className="py-20 bg-accent/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
            {t('testimonials.title')}
          </h2>
          <p className="font-opensans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-montserrat font-medium italic text-primary-light text-base block mb-2">
              {t('testimonials.subtitle')}
            </span>
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/30 relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="font-opensans text-muted-foreground mb-6 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author info */}
                <div className="border-t border-border/30 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-montserrat text-lg font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="font-opensans text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {testimonial.course}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-card border border-border/50 rounded-2xl shadow-lg">
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-foreground">
              {t('testimonials.cta.title')}
            </h3>
            <p className="font-opensans text-muted-foreground mb-6">
              {t('testimonials.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-montserrat font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t('testimonials.cta.free_class')}
              </button>
              <button 
                onClick={() => window.open('https://wa.me/34634494195', '_blank')}
                className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-medium rounded-lg transition-all duration-300"
              >
                {t('testimonials.cta.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;