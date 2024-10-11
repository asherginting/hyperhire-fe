'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Atoms } from '@/app/components/atoms';
import { motion } from 'framer-motion';

type SliderItemProps = {
  src: string;
  alt: string;
  title: string;
};

type SkillProps = { 
  id: number; 
  name: string; 
  image: string 
};

const SliderItem = ({ src, alt, title }: SliderItemProps) => (
  <motion.div
    className="mx-2 bg-white bg-opacity-20 p-3 !flex items-center gap-[10px] rounded-[12px] max-w-[332px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <div className="bg-white bg-opacity-40 p-[12px] rounded-md">
      <Atoms.Image src={src} alt={alt} width={32} height={32} />
    </div>
    <h1 className="text-[24px] text-white">{title}</h1>
  </motion.div>
);

const SkillMobile = ({ skills }: { skills: string[] }) => {
  return (
    <section className="pt-[50px]">
      <div className="container mx-auto px-[15px]">
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="flex items-center justify-center h-5 w-5 rounded-[6px] bg-white">
                <Atoms.Image src="/icons/checkbox.webp" alt="checkbox" width={20} height={20} />
              </div>
              <p className="ml-2 text-[16px] text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[18px] mt-4 text-bright-yellow underline">
          개발자가 필요하신가요?
        </motion.p>
      </div>
    </section>
  );
};

export const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [skills, setSkills] = useState<SkillProps[]>([]);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  const fetchSkills = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setSkills(result);
    } catch (error) {
      console.error('Fetch skills error:', error);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    fetchSkills();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 560, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {isDesktop ? (
        <div className="image-slider-container pt-[50px]">
          <Slider {...sliderSettings}>
            {skills.map((skill) => (
              <SliderItem key={skill.id} src={skill.image} alt={skill.name} title={skill.name} />
            ))}
          </Slider>
        </div>
      ) : (
        <SkillMobile skills={skills.map((skill) => skill.name)} />
      )}
    </>
  );
};
