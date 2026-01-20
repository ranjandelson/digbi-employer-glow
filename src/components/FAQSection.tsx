import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
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
  answer: "Digbi reduces employer healthcare costs by treating the root cause of chronic disease instead of endlessly paying to manage symptoms. We do this in three ways. First, Digbi puts 100% of our fees at risk, using utilization-based and milestone-based pricing so employers only pay when value is delivered. Second, we use precision biology—genetics, gut microbiome, CGM data, and food behavior—to determine who truly needs GLP-1s. Typically, 3 out of 10 GLP-eligible members choose not to pursue medication, creating immediate savings. Third, Digbi consolidates vendors, replacing multiple point-solution costs with one integrated platform for obesity, diabetes, GI, and metabolic care."
}, {
  question: "How does precision biology lead to better outcomes?",
  answer: "Precision biology leads to better health outcomes by identifying the root cause of chronic disease—misalignment between food and an individual's biology. By analyzing ~8,000 genetics, gut microbiome, blood biomarkers, and real-time food, lifestyle, and sleep patterns, Digbi pinpoints why someone struggles with weight, glucose, or GI health. Instead of one-size-fits-all diet advice, Digbi works within each person's food framework to make targeted, sustainable changes. This approach is anchored in the three Gs of biology—genetics, gut microbiome, and glucose control. Digbi's GLP Compass applies the same 3G framework to guide GLP use, delivering better response with ~5× fewer adverse effects, including GI distress, hair loss, and muscle loss."
}, {
  question: "What is the implementation timeline?",
  answer: "Most employers can go live within 4-6 weeks. Our dedicated implementation team handles the heavy lifting, from contracting through launch, with minimal IT requirements on your end."
}];
const FAQSection = () => {
  return <section id="faqs" className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
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

        </div>
      </div>
    </section>;
};
export default FAQSection;