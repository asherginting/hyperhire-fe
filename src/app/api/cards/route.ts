import { NextResponse } from 'next/server';

export async function GET() {
  const cards = [
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

  return NextResponse.json(cards);
}
