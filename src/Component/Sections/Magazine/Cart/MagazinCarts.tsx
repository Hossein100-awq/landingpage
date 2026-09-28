import React from 'react'
import { Box, Card } from '@mui/material'
import Image from 'next/image'

const posts = [
  { id: 1, image: '/Frame 2147238340 (1).png' },
  { id: 2, image: '/Frame 2147238340 (1).png' },
  { id: 3, image: '/Frame 2147238340 (1).png' },
]

const MagazinCarts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: '28px',
        width: '1280px',
        maxWidth: '100%',
        mx: 'auto',
      }}
    >
      {posts.map((post, index) => (
        <Box
          key={post.id}
          sx={{
            width: { xs: '100%', md: '408px' },
            animation: 'fadeInUp 0.9s ease backwards',
            animationDelay: `${index * 0.2}s`,
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(40px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Card
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 380, md: '482px' },
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              transition: 'transform 0.4s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
              '&:hover .card-img': {
                transform: 'scale(1.07)',
              },
            }}
          >
            <Image
              className="card-img"
              src={post.image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 408px"
              style={{
                objectFit: 'cover',
                transition:
                  'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default MagazinCarts