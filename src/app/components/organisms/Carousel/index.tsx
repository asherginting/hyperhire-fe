'use client';

import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { motion } from 'framer-motion';
import { Atoms } from '@/app/components/atoms';

const carouselData = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    flag: '/images/flag.png',
    image: '/images/profile1.png',
  },
  {
    name: 'James Park',
    role: '개발자',
    experience: '3y+',
    skills: ['웹 개발', 'React.js', 'Node.js', 'API 개발'],
    flag: '/images/flag.png',
    image: '/images/profile2.png',
  },
  {
    name: 'Sarah Kim',
    role: '디자인',
    experience: '4y+',
    skills: ['UI/UX 디자인', '포토샵', '일러스트레이터', '브랜딩'],
    flag: '/images/flag.png',
    image: '/images/profile3.jpeg',
  },
];

export const CarouselCard = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = carouselData.map((item, index) => ({
    key: index,
    content: (
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
    ),
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
          animationConfig={config.gentle}
        />
        <motion.div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <button
            onClick={() => setGoToSlide(goToSlide - 1)}
            className="bg-transparent p-2 rounded-full shadow-lg transition hover:bg-gray-300">
            &#10094;
          </button>
        </motion.div>
        <motion.div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <button
            onClick={() => setGoToSlide(goToSlide + 1)}
            className="bg-transparent p-2 rounded-full shadow-lg transition hover:bg-gray-300">
            &#10095;
          </button>
        </motion.div>
      </div>
    </div>
  );
};
