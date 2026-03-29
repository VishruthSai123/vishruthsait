import { Brain, Code, BarChart3, Cpu } from "lucide-react";

const skills = [
  { icon: Brain, title: "Deep Learning", desc: "Neural networks, transformers, and generative models from research to production." },
  { icon: Code, title: "Full-Stack ML", desc: "End-to-end pipelines — data ingestion, training, deployment, and monitoring." },
  { icon: BarChart3, title: "Data Engineering", desc: "Scalable data architectures and ETL workflows on cloud-native infrastructure." },
  { icon: Cpu, title: "MLOps & Infra", desc: "CI/CD for models, containerized serving, and automated retraining at scale." },
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24 bg-black">
      <div className="text-center mb-10 md:mb-16">
        <div className="section-badge">Expertise</div>
        <h2 className="section-heading px-2">What I bring to the table.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
        {skills.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="liquid-glass rounded-xl md:rounded-2xl p-4 md:p-6">
            <div className="liquid-glass-strong rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-3 md:mb-4">
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </div>
            <h3 className="text-sm md:text-lg font-heading italic text-foreground mb-1 md:mb-2">{title}</h3>
            <p className="text-foreground/60 font-body font-light text-[10px] md:text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
