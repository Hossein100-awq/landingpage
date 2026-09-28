import Image from "next/image"; 
import Card from "@mui/material/Card"; 
 
const cards = [ 
  { image: "/Frame 2147238340.png", title: "طبیعت بکر" }, 
  { image: "/Frame 2147238341.png", title: "اقامت آرام" }, 
  { image: "/Frame 2147238342.png", title: "خدمات رفاهی" }, 
  { image: "/Frame 2147238343.png", title: "تجربه متفاوت" }, 
]; 
 
const Cart = () => { 
  return ( 
    <section className="relative min-h-[auto] w-full overflow-hidden md:h-[504px]"> 
      <Image 
        src="/Vector (2).png" 
        alt="" 
        width={669} 
        height={394} 
        className="pointer-events-none absolute left-[-14px] top-[-31px] z-0 max-w-none opacity-30" 
      /> 
 
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col items-center justify-center gap-[40px] px-4 py-[50px] sm:px-6 md:px-0 md:py-0"> 
        <div className="flex w-full max-w-[620px] flex-col items-center gap-[20px]"> 
          <div className="flex h-[52px] w-[84px] shrink-0 items-center justify-center"> 
            <Image 
              src="/Icon Container.svg" 
              alt="" 
              width={84} 
              height={64} 
              className="shrink-0" 
            /> 
          </div> 
 
          <div className="flex w-full max-w-[620px] flex-col items-center"> 
            <h1 
              className="h-auto w-full max-w-[344px] text-center text-[26px] font-extrabold leading-[45px] tracking-[-1.4px] text-[#1A1A1A] sm:text-[30px] sm:leading-[52px] md:h-[58px] md:text-right md:text-[32px] md:leading-[58px]" 
              style={{ fontFamily: "Abar Mid FaNum" }} 
            > 
              انواع اتاق‌های اقامتگاه گیلمار 
            </h1> 
 
            <p 
              className="h-auto w-full text-center text-[13px] font-semibold leading-[28px] text-[#4C4C4D] sm:text-[14px] sm:leading-[32px] md:h-[32px]" 
              style={{ fontFamily: "Abar Mid FaNum" }} 
            > 
              اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند. 
            </p> 
          </div> 
        </div> 
 
        <div className="flex w-full flex-col items-center gap-[24px] md:flex-row md:gap-[24px]"> 
          {cards.map((card) => ( 
            <Card 
              key={card.image} 
              sx={{ 
                boxShadow: "none", 
                border: "none", 
                background: "transparent", 
                padding: 0, 
              }} 
              className="group relative h-[302px] w-full max-w-[302px] shrink-0 overflow-hidden rounded-none" 
            > 
              <Image 
                src={card.image} 
                alt={card.title} 
                fill 
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" 
                sizes="(max-width: 768px) 302px, 302px" 
              /> 
            </Card> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default Cart;