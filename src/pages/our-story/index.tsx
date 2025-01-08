import Carousel from "@/components/Carousel";

export default function OurStory() {
  return (
    <>
      <div className="h-screen pb-4">
        <div className="hidden xl:block h-screen">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-1 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/Linh-2.jpg')" }}
              ></div>
            </div>
            <div className="col-span-5 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transform scale-105 object-cover"
                style={{ backgroundImage: "url('/Linh-1.jpg')" }}
              ></div>
            </div>
            <div className="col-span-4 relative">
              <div
                className="h-full w-full bg-cover bg-center justify-center"
                style={{ backgroundImage: "url('/Linh-26.jpg')" }}
              >
                <div className="bg-white justify-center absolute flex flex-col inset-y-8 -mx-10 px-16">
                  <h3 className="text-5xl mb-4 didot font-bold text-right">
                    Our Love Story
                  </h3>
                  <p className="text-[#383B42] avenir">
                    Jack and Linh first met in Boston, USA in 2019, where their
                    love story began. What started as a Coffee Meets Bagel date
                    quickly turned into something deeper as they navigated their
                    early days together. Then came the pandemic, a time that
                    brought unexpected challenges but also the chance to grow
                    closer. They spent those uncertain months side by side,
                    sharing laughter, resilience, and the ups and downs of their
                    early 20s.
                  </p>
                  <p className="mt-4 text-[#383B42] avenir">
                    Life continued to evolve, with career changes and the big
                    move to New York City in 2022. There, they have both pursued
                    new opportunities. Linh is currently pursuing her PhD in
                    Biomedical Sciences while Jack is working full time in
                    finance and pursuing his part-time MBA. They have continued
                    to lean on each other as they build a life in a city full of
                    endless possibilities. Along the way, they welcomed a
                    maltipoo “Vivy” to their family, whose wagging tail brought
                    even more joy to their everyday lives.
                  </p>
                  <p className="mt-4 text-[#383B42] avenir">
                    After 4 years of growing together, they decided to take the
                    next step and tie the knot on Aug 18th, 2023 in New York
                    City. Now when the time is right, they decided to hold the
                    wedding ceremonies to celebrate their love with their
                    families and friends in Linh’s hometown (Hanoi, Vietnam),
                    and Jack’s family’s hometown (Guangzhou, China).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/Linh-33.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="xl:hidden">
          <Carousel />
        </div>
      </div>
    </>
  );
}
