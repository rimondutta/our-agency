
import { useEffect, useRef, useState } from "react"
import ModalVideo from "react-modal-video"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AboutV2 = () => {
  const [isOpen, setOpen] = useState(false)
  const homeContainerRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (homeContainerRef.current) {
      // Create the timeline with modified ScrollTrigger settings

      gsap.set(".home-container video", {
        width: "50%",
        opacity: 0.5,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: homeContainerRef.current,
          // Start when 30% of the element is visible in the viewport
          start: "top 180%",
          // End when the element is fully visible
          end: "bottom 80%",
          scrub: 1,
          // Uncomment to see markers for debugging
          // markers: true,
        },
      })

      // Animation for the video size
      tl.from(".home-container img, .home-container video", {
        width: "50%",
        duration: 1,
      }).to(".home-container img, .home-container video", {
        width: "100%",
        duration: 1,
      })

      // Animation for the video content
      tl.from(
        ".home-container .video",
        {
          opacity: 0,
          y: -100,
          duration: 1,
        },
        "<",
      ) // Start at the same time as the previous animation

      ScrollTrigger.create({
      trigger: homeContainerRef.current,
      start: "bottom bottom", // when bottom of section hits bottom of viewport
      onEnter: () => {
        document.body.style.overflow = "hidden";

        setTimeout(() => {
          document.body.style.overflow = "";
        }, 3000);
      },
      once: true, // lock scroll only once
    });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return (
    <>
      <div style={{backgroundColor:"black"}} className="overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="home-container" ref={homeContainerRef}>
            <video  loop muted autoPlay>
              <source src="/assets/video/about-latest.mp4" type="video/mp4" />
            </video>
            <div className="video-content">
              <div className="video">{/* Video play button can go here if needed */}</div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo channel="youtube" isOpen={isOpen} videoId="izTDbJ23_ws" onClose={() => setOpen(false)} />
    </>
  )
}

export default AboutV2
