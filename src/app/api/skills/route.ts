import { NextResponse } from 'next/server';

export async function GET() {
  const skills = [
    { id: 1, name: '해외 마케팅', image: '/icons/computer.webp' },
    { id: 2, name: '퍼블리셔', image: '/icons/image.webp' },
    { id: 3, name: '캐드원(제도사)', image: '/icons/box.webp' },
    { id: 4, name: '해외 세일즈', image: '/icons/target.webp' },
    { id: 5, name: '해외 마케팅', image: '/icons/call.webp' },
    { id: 6, name: '리액트.js', image: '/icons/computer.webp' },
    { id: 7, name: '노드.js', image: '/icons/image.webp' },
    { id: 8, name: 'UI/UX 디자인', image: '/icons/box.webp' },
    { id: 9, name: '포토샵', image: '/icons/target.webp' },
    { id: 10, name: '일러스트레이터', image: '/icons/call.webp' },
  ];

  return NextResponse.json(skills);
}
