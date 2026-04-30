import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function usePortfolioMotion() {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        return;
      }

      const lenis = new Lenis({
        duration: 1.05,
        easing: (value) => Math.min(1, 1.001 - 2 ** (-10 * value)),
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const updateLenis = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      const anchorLinks = gsap.utils.toArray<HTMLAnchorElement>('a[href^="#"]');
      const handleAnchorClick = (event: Event) => {
        const link = event.currentTarget as HTMLAnchorElement;
        const href = link.getAttribute("href");

        if (!href || href === "#") {
          return;
        }

        const target = document.querySelector<HTMLElement>(href);

        if (!target) {
          return;
        }

        event.preventDefault();
        lenis.scrollTo(target, { offset: -24, duration: 1.15 });
        window.history.pushState(null, "", href);
      };

      anchorLinks.forEach((link) => {
        link.addEventListener("click", handleAnchorClick);
      });

      if (window.location.hash) {
        const target = document.querySelector<HTMLElement>(window.location.hash);

        if (target) {
          window.setTimeout(() => {
            lenis.scrollTo(target, { immediate: true, offset: -24 });
            ScrollTrigger.refresh();
          }, 250);
        }
      }

      const typeReveal = (lines: HTMLElement[], trigger?: HTMLElement) => {
        return gsap.from(lines, {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0.35,
          duration: 0.85,
          stagger: 0.16,
          ease: "steps(18)",
          scrollTrigger: trigger
            ? {
                trigger,
                start: "top 78%",
                toggleActions: "play none none reverse",
              }
            : undefined,
        });
      };

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".brand-mark", { y: -16, opacity: 0, duration: 0.55 })
        .from(".site-header nav a", { y: -12, opacity: 0, stagger: 0.05, duration: 0.45 }, "<0.08")
        .from(".hero-kicker", { y: 18, opacity: 0, duration: 0.6 }, "<0.1")
        .add(typeReveal(gsap.utils.toArray<HTMLElement>(".hero-section .type-line")), "<0.1")
        .from(".hero-role, .hero-summary, .hero-actions", { y: 22, opacity: 0, stagger: 0.08, duration: 0.62 }, "-=0.3")
        .from(".hero-panel", { y: 34, opacity: 0, scale: 0.96, duration: 0.7 }, "-=0.55");

      gsap.to(".particle-field span", {
        y: "random(-90, 90)",
        x: "random(-60, 60)",
        opacity: "random(0.28, 0.8)",
        scale: "random(0.8, 1.8)",
        duration: "random(3.5, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.12,
          from: "random",
        },
      });

      gsap.to(".ambient-orbit", {
        rotate: 360,
        duration: 34,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".ambient-ribbon", {
        xPercent: 8,
        yPercent: -6,
        rotate: 4,
        duration: 9,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".background-grid", {
        backgroundPosition: "96px 96px",
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
        typeReveal(gsap.utils.toArray<HTMLElement>(".type-line", heading), heading);

        gsap.from(gsap.utils.toArray<HTMLElement>("p:not(.eyebrow)", heading), {
          y: 20,
          opacity: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".project-card-body", {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      const revealGroups = [
        { trigger: ".timeline", items: ".timeline-item", x: -34 },
        { trigger: ".skill-carousel", items: ".skill-marquee-group", x: 0 },
        { trigger: ".contact-section", items: ".contact-section > *", x: 0 },
      ];

      revealGroups.forEach((group) => {
        gsap.from(group.items, {
          y: group.x === 0 ? 46 : 18,
          x: group.x,
          opacity: 0,
          duration: 0.62,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group.trigger,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".credential-list", {
        y: 34,
        opacity: 0,
        duration: 0.68,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".credential-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".hero-panel", {
        y: -42,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.65,
        },
      });

      return () => {
        anchorLinks.forEach((link) => {
          link.removeEventListener("click", handleAnchorClick);
        });
        gsap.ticker.remove(updateLenis);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: scopeRef },
  );

  return scopeRef;
}
