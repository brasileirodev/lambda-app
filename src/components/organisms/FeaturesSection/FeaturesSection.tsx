import { useRef } from 'react';
import { AccordionItem } from '@/components/molecules/AccordionItem/AccordionItem';
import { useAccordion } from '@/hooks/useAccordion';
import { useDotLottie } from '@/hooks/useDotLottie';

const ACCORDION_ITEMS = [
  {
    number: '01',
    title: 'You bring models. We bring the compute.',
    description:
      'Get complete AI factories integrating high-density power, liquid cooling, and NVIDIA GPUs into one system designed for peak AI performance.',
  },
  {
    number: '02',
    title: 'Your supercomputer. Your rules.',
    description:
      'Accelerate every stage of your AI lifecycle. Train foundation models and serve billions of tokens.',
  },
  {
    number: '03',
    title: 'Orchestration, handled.',
    description:
      'Run large-scale AI workloads without the operational burden. We manage your clusters so you can focus on innovation.',
  },
  {
    number: '04',
    title: 'Experts included.',
    description:
      'Co-engineer your workloads with the very people building the infrastructure behind the world\'s most advanced models.',
  },
] as const;

export function FeaturesSection() {
  const { activeIndex, open } = useAccordion(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useDotLottie(canvasRef, activeIndex);

  return (
    <section className="pt-xl pb-xl module-comp" id="section-features">
      <div className="lambda-container">
        <div className="stack--md">
          <div className="dark-mode titleBlock">
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-7">
                <h2 className="h2">Built for AI. Ready for superintelligence.</h2>
                <div className="content noContent" />
              </div>
            </div>
          </div>

          <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-7">
              <div className="accordion" id="featuresAccordion">
                {ACCORDION_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    isActive={activeIndex === index}
                    onOpen={() => open(index)}
                  />
                ))}
              </div>
            </div>

            <div className="cell small-12 medium-5">
              <div className="_animationContainer_1wr90_9" aria-hidden="true">
                <div style={{ width: '100%', height: '100%', lineHeight: 0 }}>
                  <canvas
                    ref={canvasRef}
                    id="accordion-lottie"
                    style={{ width: '100%', height: '100%' }}
                    width={419}
                    height={535}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionBorder" />
    </section>
  );
}
