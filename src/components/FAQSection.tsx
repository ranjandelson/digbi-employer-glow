import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
const faqs = [{
  question: "How is Digbi Health different from other wellness or point solutions?",
  answer: "Most point solutions focus on a single condition or a narrow approach. Digbi Health is designed to be more holistic. We are the first integrated, multispecialty care across all cardiometabolic and GI conditions—at one transparent price point. Our team of specialists works together to support each member's long-term health through personalized care based on their unique biology"
}, {
  question: "What conditions does Digbi Health cover?",
  answer: "Digbi Health supports the full spectrum of cardiometabolic conditions: Type 2 Diabetes, Prediabetes, Obesity/Weight Management, PCOS, Hypertension, high cholesterol, and Digestive disorders."
}, {
  question: "Does Digbi Health prescribe GLP-1s?",
  answer: "Yes—but only when clinically appropriate. Unlike other vendors that may default to expensive medications, we follow a precision biology approach: using gut microbiome and genetic testing to determine the best intervention for each individual. For eligible members, medications are prescribed with built-in engagement requirements, ensuring the right therapy at the right time."
}, {
  question: "How does Digbi Health help reduce employer healthcare costs?",
  answer: "By combining precision biology with whole-person care, Digbi Health optimizes treatment pathways, improves adherence, and helps members work toward sustainable health improvements. The result: reduced medication costs, fewer emergency visits, and lower long-term costs driven by fewer diabetes and cardiovascular complications."
}, {
  question: "How does precision biology lead to better outcomes?",
  answer: "Precision biology uses your gut microbiome, genetics, and blood markers to create truly personalized care plans. This means we can identify which interventions—diet changes, lifestyle modifications, or medications—will work best for each individual, leading to faster results and higher engagement."
}, {
  question: "What is the implementation timeline?",
  answer: "Most employers can go live within 4-6 weeks. Our dedicated implementation team handles the heavy lifting, from contracting through launch, with minimal IT requirements on your end."
}];
const FAQSection = () => {
  return <section id="faqs" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Got questions? We've got answers.
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions from members.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/50 transition-colors">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We'd love to help.
            </p>
            <Button variant="hero" size="lg">
              Book Your Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;