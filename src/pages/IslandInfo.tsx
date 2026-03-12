import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Wallet, Plug, Languages, ShieldCheck, Wine, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { areas, practicalInfo, faqs } from '@/data/island-info';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  Wallet: <Wallet className="h-5 w-5" />,
  Plug: <Plug className="h-5 w-5" />,
  Languages: <Languages className="h-5 w-5" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5" />,
  Wine: <Wine className="h-5 w-5" />,
  Calendar: <Calendar className="h-5 w-5" />,
};

export function IslandInfo() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getIcon = (iconName: string) => iconMap[iconName] || null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Island Information</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to know before visiting Taniti. From area guides to practical travel tips.
          </p>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            Explore Our Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area) => (
              <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{area.name}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {area.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {highlight}
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

      {/* Practical Information */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Practical Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {getIcon(info.icon)}
                    </div>
                    <h3 className="font-semibold text-foreground">{info.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={cn(
                  'overflow-hidden transition-all',
                  expandedFaq === index ? 'ring-2 ring-primary' : ''
                )}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    expandedFaq === index ? 'max-h-48' : 'max-h-0'
                  )}
                >
                  <div className="p-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
