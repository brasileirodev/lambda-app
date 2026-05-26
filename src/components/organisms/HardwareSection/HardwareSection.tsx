import { HardwareCard } from '@/components/molecules/HardwareCard/HardwareCard';
import { useHardwareAccordion } from '@/hooks/useHardwareAccordion';

const HARDWARE_CARDS = [
  {
    title: 'NVIDIA VR200 NVL72',
    description:
      'Rack-scale systems optimized for agentic AI. 72 Vera Rubin GPUs in a single rack deliver unprecedented throughput for the most demanding inference workloads.',
    imageSrc: '/images/VR200.jpg',
    imageAlt: 'NVIDIA VR200 NVL72',
  },
  {
    title: 'NVIDIA GB300 NVL72',
    description: 'Rack-scale systems optimized for AI reasoning',
    imageSrc: '/images/gb300.png',
    imageAlt: 'NVIDIA GB300 NVL72',
  },
  {
    title: 'NVIDIA HGX B300',
    description: 'Peak performance per watt for the largest training runs',
    imageSrc: '/images/nvidia-hgx-b300.png',
    imageAlt: 'NVIDIA HGX B300',
  },
  {
    title: 'NVIDIA HGX B200',
    description: 'Versatile fine-tuning and inference',
    imageSrc: '/images/b200.png',
    imageAlt: 'NVIDIA HGX B200',
  },
] as const;

export function HardwareSection() {
  const { activeIndex, activate } = useHardwareAccordion(0);

  return (
    <section className="hardwareSection" id="section-hardware">
      <div className="hardwareInner">
        <div className="hardwareTitleBlock">
          <div className="hardwareTitleLeft">
            <h2 className="hardwareHeading">The engines of superintelligence</h2>
          </div>
          <div className="hardwareTitleRight">
            <p className="hardwareSubtitle">
              Give your team the computational precision to push the boundaries of AI — from training
              frontier models to serving at global scale.
            </p>
          </div>
        </div>

        <div className="hardwareAccordionItems" id="hardwareAccordion">
          {HARDWARE_CARDS.map((card, index) => (
            <HardwareCard
              key={card.title}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              isActive={activeIndex === index}
              onClick={() => activate(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
