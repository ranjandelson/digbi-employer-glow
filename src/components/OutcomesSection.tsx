import { Card } from "@/components/ui/card";
import { Scale, Heart, Activity, TrendingDown, Award } from "lucide-react";

const outcomes = [
  {
    value: "9.3",
    unit: "%",
    label: "Weight reduction",
    sublabel: "Without GLP-1s over 12 months",
    icon: Scale,
    color: "primary",
  },
  {
    value: "17.6",
    unit: "%",
    label: "Weight reduction",
    sublabel: "With GLP-1s over 12 months",
    icon: TrendingDown,
    color: "success",
  },
  {
    value: "19.8/12.9",
    unit: "mmHg",
    label: "Blood pressure reduction",
    sublabel: "Systolic/Diastolic over 12 months",
    icon: Heart,
    color: "primary",
  },
  {
    value: "2.8",
    unit: "%",
    label: "A1c reduction",
    sublabel: "Members with A1c>9% over 12 months",
    icon: Activity,
    color: "success",
  },
  {
    value: "58",
    unit: "%",
    label: "Diabetes risk reduction",
    sublabel: "CDC Full Plus Recognition",
    icon: Award,
    color: "primary",
  },
];

const OutcomesSection = () => {
  return (
    <section id="outcomes" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Proven Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Digbi Health solutions at work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real clinical outcomes backed by precision biology and personalized care programs.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card
              key={outcome.label + index}
              className={`p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                outcome.color === "success" ? "bg-success/10" : "bg-primary/10"
              }`}>
                <outcome.icon className={`w-7 h-7 ${
                  outcome.color === "success" ? "text-success" : "text-primary"
                }`} />
              </div>
              
              <div className="mb-4">
                <span className={`text-5xl lg:text-6xl font-bold ${
                  outcome.color === "success" ? "text-success" : "text-primary"
                }`}>
                  {outcome.value}
                </span>
                <span className={`text-2xl font-semibold ml-1 ${
                  outcome.color === "success" ? "text-success" : "text-primary"
                }`}>
                  {outcome.unit}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {outcome.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {outcome.sublabel}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
