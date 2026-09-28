import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const TextMagazin = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: { xs: '100%', md: '732px' },
        mx: 'auto',
      }}
    >
      <Image
        src="/Icon Container (5).svg"
        alt=""
        width={84}
        height={52}
        unoptimized
        style={{ height: 'auto' }}
      />

      <Typography
        sx={{
          fontFamily: "'Abar Mid FaNum', sans-serif",
          fontWeight: 800,
          fontSize: { xs: 24, md: 32 },
          lineHeight: { xs: '42px', md: '58px' },
          textAlign: 'center',
          color: '#1A1A1A',
          width: { xs: '100%', md: '583px' },
        }}
      >
        مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Abar Mid FaNum', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '32px',
          textAlign: 'center',
          color: '#4C4C4D',
          width: { xs: '100%', md: '732px' },
        }}
      >
        در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید.
      </Typography>
    </Box>
  )
}

export default TextMagazin