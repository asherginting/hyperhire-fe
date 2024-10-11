'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { config } from 'react-spring';
import { motion } from 'framer-motion';
import { Atoms } from '@/app/components/atoms';

interface CardData {
  name: string;
  role: string;
  experience: string;
  skills: string[];
  flag: string;
  image: string;
}

//@ts-expect-error - react-spring-3d-carousel doesn't have types
const Carousel = dynamic(() => import('react-spring-3d-carousel'), {
  ssr: false,
});

export const Card = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [data, setData] = useState<CardData[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cards`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: CardData[] = await response.json();
      setData(result);
    } catch (error) {
      console.error('Fetch data error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  const renderSlideContent = (item: CardData) => (
    <div className="flex justify-center">
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 w-[292px] h-[408px] mx-4 transform transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="relative">
          <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full mx-auto" />
          <Atoms.Image src={item.flag} alt="flag" width={25} height={18} className="absolute bottom-0 right-16" />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-dark text-[24px] leading-[36px]">{item.name}</h3>
          <p className="text-blue text-[16px] leading-[24px]">
            {item.role} · {item.experience}
          </p>
          <div className="mt-4 space-x-2">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="inline-block border border-medium-gray text-medium-gray text-[16px] leading-[24px] rounded-md px-3 py-1 mt-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  const slides = data.map((item, index) => ({
    key: index,
    content: renderSlideContent(item),
  }));

  return (
    <div
      style={{
        width: '100%',
        height: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
      className="relative py-8">
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-green text-sm font-semibold px-4 py-2 rounded-lg shadow-md z-20 mb-5 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Atoms.Image src="/icons/dollar.webp" alt="dollar" width={26} height={26} />
        <span className="ml-2">월 100만원</span>
      </motion.div>
      <div className="relative w-full h-full">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          goToSlideDelay={50}
          animationConfig={config.gentle}
        />
        <NavigationButton direction="left" onClick={() => setGoToSlide(goToSlide - 1)} />
        <NavigationButton direction="right" onClick={() => setGoToSlide(goToSlide + 1)} />
      </div>
    </div>
  );
};

const NavigationButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <motion.div
    className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 z-10`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}>
    <button onClick={onClick} className="transition hover:bg-gray-300 flex items-center justify-center">
      {direction === 'left' ? (
        <Atoms.Image
          src="/icons/caret-right.webp"
          alt="arrow left"
          width={32}
          height={32}
          style={{ transform: 'rotate(180deg)' }}
        />
      ) : (
        <Atoms.Image src="/icons/caret-right.webp" alt="arrow right" width={32} height={32} />
      )}
    </button>
  </motion.div>
);
