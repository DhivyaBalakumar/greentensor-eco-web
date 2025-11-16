import vennDiagram from '@/assets/venn-diagram.png';

const VennDiagramSection = () => {

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-eco-green to-tech-blue bg-clip-text text-transparent">
            The GreenTensor Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            Where sustainability, security, and intelligence converge
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <img 
            src={vennDiagram} 
            alt="GreenTensor Venn Diagram showing the intersection of SOTA models, Full software lifecycle, and Deep context"
            className="w-full h-auto"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            GreenTensor uniquely combines state-of-the-art AI models with comprehensive lifecycle management 
            and deep contextual understanding to deliver unparalleled sustainability and security insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;