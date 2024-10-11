'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skills } from '@/app/components/organisms';

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeInUpAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedButton = ({ text }: { text: string }) => (
  <motion.button
    className="arrow-button relative py-2 px-4 bg-white text-[18px] text-cyan leading-[27px] rounded-md"
    initial="hidden"
    animate="visible"
    variants={fadeInAnimation}
    transition={{ delay: 0.8 }}>
    <span>{text}</span>
    <div className="arrow"></div>
  </motion.button>
);

export const Content = () => {
  return (
    <section className="w-full pt-[40px]">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-col md:flex-row gap-[20px] justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="mb-10">
              <AnimatedButton text="풀타임, 파트타임" />
              <motion.h1
                className="text-[48px] leading-[62.4px] sm:text-[46.8px] mt-10 text-white/90"
                initial="hidden"
                animate="visible"
                variants={fadeInUpAnimation}
                transition={{ duration: 0.5 }}>
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
              </motion.h1>
              <motion.p
                className="text-[18px] sm:text-[24px] text-white/90 mt-4"
                initial="hidden"
                animate="visible"
                variants={fadeInUpAnimation}
                transition={{ duration: 0.5 }}>
                법률 및 인사관리 부담없이 <br className="sm:block hidden" />
                1주일 이내에 원격으로 채용해보세요.
              </motion.p>
              <motion.p
                className="text-[18px] sm:text-[24px] text-white/90 mt-6 underline"
                initial="hidden"
                animate="visible"
                variants={fadeInUpAnimation}
                transition={{ duration: 0.5 }}>
                개발자가 필요하신가요?
              </motion.p>
            </div>
            <div className="sm:block hidden">
              <div className="grid grid-cols-3">
                {['평균 월 120만원', '최대 3회 인력교체', '평균 3일, 최대 10일'].map((feature) => (
                  <motion.div
                    key={feature}
                    className="border-t-[1px] border-white pt-3 w-[161px]"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInAnimation}
                    transition={{ duration: 0.5, staggerChildren: 0.2 }}>
                    <h3 className="text-lg mb-2 text-white">{feature}</h3>
                    <p className="mb-2 text-white opacity-80">
                      {feature === '평균 월 120만원'
                        ? '임금을 해당 국가를 기준으로 계산합니다.'
                        : feature === '최대 3회 인력교체'
                        ? '막상 채용해보니 맞지 않아도 걱정하지 마세요.'
                        : '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-full">
            <div className="flex justify-center items-center space-x-6">{/* Card Carousel */}</div>
          </div>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
};
