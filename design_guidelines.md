# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional portfolio sites like Linear, Notion, and modern tech company websites to create a clean, sophisticated design that emphasizes technical expertise and professional credibility.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 220 15% 8% (deep navy-black)
- Surface: 220 12% 12% (elevated surfaces)
- Primary: 210 100% 65% (professional blue)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 220 10% 70% (muted gray)

**Light Mode Primary:**
- Background: 0 0% 98% (warm white)
- Surface: 0 0% 100% (pure white)
- Primary: 210 100% 45% (deeper blue)
- Text Primary: 220 15% 15% (charcoal)
- Text Secondary: 220 10% 45% (medium gray)

### B. Typography
- **Primary Font**: Inter (Google Fonts) - clean, professional
- **Secondary Font**: JetBrains Mono (for code/technical elements)
- **Hierarchy**: 
  - Hero title: 3xl-4xl font weight 700
  - Section headers: xl-2xl font weight 600  
  - Body text: base font weight 400
  - Technical skills: sm font weight 500

### C. Layout System
**Tailwind Spacing Units**: Primarily use 4, 8, 12, 16, 24 units for consistent rhythm
- Container max-width: 6xl (1152px)
- Section spacing: py-24 (vertical rhythm)
- Component spacing: p-8, gap-4, space-y-8

### D. Component Library
**Navigation**: Fixed header with blur backdrop, smooth scrolling links
**Hero Section**: Large viewport height with professional headshot placeholder, animated typing effect for roles
**Project Cards**: Hover-elevated cards with subtle shadows, technology tags
**Skills Grid**: Categorized skill badges with icons from Heroicons
**Timeline**: Vertical experience timeline with company logos placeholders
**Contact Form**: Clean form styling with focus states

### E. Animations
Minimal and purposeful:
- Smooth scroll navigation
- Card hover elevations (transform translate)
- Fade-in animations on scroll (intersection observer)
- Typing animation for hero tagline

## Content Structure

### Hero Section
- Professional headshot placeholder (circular, 200px diameter)
- Animated tagline cycling through: "AI/ML Engineer", "Instructional Designer", "Data Scientist"
- Primary CTA button for contact
- Social links (LinkedIn, GitHub, Email)

### Instructional Design Section
- Teaching experience at Lakehead University
- Course highlights: Big Data, AI, Cloud Computing, RDBMS  
- Student achievement metrics (Hackathon wins, scholarship guidance)

### AI/ML Projects Showcase
- CUDA-based ELM model (94.4% accuracy)
- NLP classifiers and text embedding
- OpenCV diffusion models
- AWS Personalize recommendation systems
- Interactive project cards with GitHub links

### Data Projects Portfolio
- ETL pipeline visualizations
- Business intelligence dashboards
- Geostatistical analysis results
- Performance improvement metrics (6000 hours saved, 30% rollout reduction)

## Images
- **Hero Image**: Professional headshot (circular crop, high-quality)
- **Project Thumbnails**: Technical diagrams, dashboard screenshots, model architecture visuals
- **Company Logos**: CRA, Lakehead University, Cognizant, Solartis (grayscale treatment)
- **Certification Badges**: Microsoft Azure, PMI, WhiteHat Security badges

## Key Design Principles
1. **Professional Credibility**: Clean, sophisticated aesthetic befitting a senior technical professional
2. **Technical Emphasis**: Highlight quantifiable achievements and technical depth
3. **Accessibility**: Full WCAG compliance with consistent dark/light mode
4. **Performance**: Optimized loading with efficient asset management
5. **Mobile-First**: Responsive design prioritizing mobile experience