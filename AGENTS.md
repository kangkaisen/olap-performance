# AGENTS.md - OLAP Performance Optimization Guide

## Project Overview

**Project Name**: perf (OLAP 数据库性能优化指南)  
**Version**: 2.0.0  
**License**: MIT  
**Description**: A comprehensive Chinese-language guide for OLAP database performance optimization

This project is a technical book/guide focused on database performance optimization, particularly for OLAP (Online Analytical Processing) databases. The content is based on 10 years of database engineering experience and includes practical insights from developing StarRocks database optimizations.

**Target Audience**: Database engineers, performance optimization specialists, and developers working with analytical database systems

**Live Documentation**: https://perf.bcmeng.com/

## Architecture & Design

### Documentation Architecture
- **VuePress-based documentation site** with theme-hope for modern, responsive design
- **Hierarchical content organization** with numbered directories (0-10) representing progression from basic to advanced topics
- **Modular content structure** with individual markdown files for specific topics
- **Chinese-language primary content** with some English technical terms

### Content Structure
```
src/
├── 0 principle/          # Basic performance optimization questions
├── 1 computer-principle/ # Computer hardware fundamentals  
├── 2 database-principle/ # Database architecture and principles
├── 3 methodologies/      # Optimization methodologies
├── 4 optimization-points/ # Specific optimization techniques
├── 5 tools/             # Performance optimization tools
├── 6 cases/             # Real-world optimization cases
├── 7 test/              # Performance testing strategies
├── 8 prod/              # Production environment challenges
├── 9 learn/             # Learning resources and references
└── 10 creative/         # Technical innovation and future trends
```

### Key Design Patterns
- **Progressive Learning**: Content flows from basic principles to advanced optimization
- **Case-Driven Learning**: Theory combined with practical examples from production systems
- **Multi-dimensional Approach**: Covers hardware, software, algorithms, and systems aspects

## Technology Stack

### Core Technologies
- **Vue.js 3.2.47**: Progressive JavaScript framework for UI
- **VuePress 2.0.0-beta.61**: Static site generator for documentation
- **VuePress Theme Hope 2.0.0-beta.200**: Modern documentation theme
- **@vuepress/client 2.0.0-beta.61**: Client-side utilities

### Build System
- **Node.js**: Runtime environment (ES modules)
- **npm**: Package manager
- **VuePress CLI**: Documentation build and development tools

### Content Management
- **Markdown**: Primary content format
- **Front Matter**: Metadata for VuePress pages
- **Images**: Performance diagrams and charts (stored in public/assets)

## Development Setup

### Prerequisites
- **Node.js**: Version compatible with VuePress 2.0.0-beta.61
- **npm**: Package manager
- **Git**: Version control

### Installation Steps
```bash
# Clone the repository
git clone <repository-url>
cd olap-performance

# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build
```

### Environment Configuration
- **ES Modules**: Project uses `"type": "module"` in package.json
- **No environment variables**: Static documentation project
- **No database setup**: Pure documentation project

### First-Time Setup
1. Install Node.js and npm
2. Run `npm install` to install dependencies
3. Run `npm run docs:dev` to start local development server
4. Access documentation at `http://localhost:8080` (default VuePress port)

## Development Workflow

### Common Commands
```bash
# Development server with hot reload
npm run docs:dev

# Production build
npm run docs:build

# Development with clean cache
npm run docs:clean-dev

# Update VuePress packages
npm run docs:update-package
```

### Development Process
1. **Content Creation**: Add/edit markdown files in appropriate numbered directories
2. **Local Development**: Use `npm run docs:dev` for live preview
3. **Content Structure**: Follow existing front matter format for new pages
4. **Images**: Place diagrams and charts in public/assets directory
5. **Build**: Use `npm run docs:build` before deploying

### Build and Deployment
- **Local Development**: VuePress dev server with hot reload
- **Production Build**: Static site generation via `npm run docs:build`
- **Deployment**: Deploy generated `/.vuepress/dist/` directory to web server

## Code Organization

### File Naming Conventions
- **Directories**: Numbered prefixes (0-10) for content hierarchy
- **Markdown Files**: Descriptive lowercase names with hyphens
- **Assets**: Descriptive names matching content topics

### Content Structure Patterns
- **Front Matter**: Each markdown file includes YAML front matter with `title` and `icon`
- **Chinese Headers**: Main headings in Chinese with English technical terms
- **Progressive Organization**: Content flows from basic to advanced topics

### Import/Export Patterns
- **VuePress Navigation**: Automatic sidebar generation from directory structure
- **Cross-references**: Internal links use relative paths
- **Image References**: Use absolute paths from public directory

### Module Organization
```
src/
├── [numbered-directories]/    # Content modules
├── .vuepress/                 # VuePress configuration
└── public/                    # Static assets
```

## Content Guidelines

### Writing Standards
- **Language**: Chinese primary with English technical terms
- **Technical Depth**: Advanced database optimization concepts
- **Experience-Based**: Content drawn from 10 years of database engineering
- **Practical Focus**: Real-world optimization examples and case studies

### Content Types
- **Conceptual Guides**: Theory and principles
- **Technical Deep-Dives**: Specific optimization techniques
- **Case Studies**: Real-world performance problems and solutions
- **Tools and Methods**: Practical testing and optimization tools

### Documentation Standards
- **Front Matter Required**: All content files need title and icon metadata
- **Hierarchical Structure**: Follow numbered directory organization
- **Image Integration**: Support diagrams and performance charts
- **Cross-References**: Link between related topics

## Testing Strategy

### Content Testing
- **Manual Review**: All content manually reviewed for technical accuracy
- **Live Preview**: Use VuePress dev server to verify rendering
- **Cross-Reference Validation**: Ensure internal links work correctly
- **Image Display**: Verify all diagrams and charts display properly

### Site Functionality
- **Navigation Testing**: Verify sidebar and menu functionality
- **Responsive Design**: Test on different screen sizes
- **Performance**: Check build size and load times
- **Browser Compatibility**: Test across modern browsers

### Content Quality Assurance
- **Technical Accuracy**: Verify database optimization concepts
- **Code Examples**: Ensure all technical examples are correct
- **Performance Data**: Validate performance numbers and benchmarks
- **Language Consistency**: Maintain consistent terminology

## Performance Considerations

### Site Performance
- **Static Generation**: VuePress generates static files for fast loading
- **Image Optimization**: Compress diagrams and charts for web
- **Bundle Size**: Monitor VuePress bundle size during development
- **Loading Speed**: Optimize for fast initial page load

### Content Performance
- **Loading Strategy**: Consider lazy loading for large content sections
- **Image Formats**: Use appropriate formats (PNG, SVG, WebP)
- **Code Blocks**: Optimize syntax highlighting and code examples

## Deployment and Operations

### Deployment Process
1. **Build**: Run `npm run docs:build` to generate static files
2. **Deploy**: Upload `/.vuepress/dist/` contents to web server
3. **Verify**: Test deployed site functionality
4. **Monitor**: Track site performance and accessibility

### Maintenance Tasks
- **Dependency Updates**: Regularly update VuePress and theme packages
- **Content Reviews**: Periodic review of technical accuracy
- **Broken Link Checks**: Verify all internal and external links
- **Performance Monitoring**: Track site load times and user experience

## Version Control and Contributions

### Contribution Workflow
1. **Small Changes**: Direct edits via web interface at https://perf.bcmeng.com/
2. **Large Changes**: Local development following VuePress tutorial
3. **Content Additions**: Follow existing directory and naming conventions
4. **Technical Review**: Ensure accuracy of database optimization content

### Version Management
- **Current Version**: 2.0.0 (planned progression from 0.1 to 1.0)
- **Release Planning**: Target completion of 1.0 version in 2025
- **Change Tracking**: Updates tracked via Git commits

### Content Governance
- **Technical Authority**: Content based on author's 10 years database experience
- **Community Contributions**: Welcomed following established patterns
- **Quality Standards**: Technical accuracy and practical applicability required

## Knowledge Areas Covered

### Core Technical Domains
- **Computer Architecture**: CPU, memory, storage, network fundamentals
- **Database Systems**: OLAP architecture, query processing, optimization
- **Performance Engineering**: Profiling, benchmarking, optimization methodologies
- **Systems Programming**: C++ optimization, parallel computing, SIMD

### Specific Expertise Areas
- **StarRocks Database**: Real-world optimization experience
- **Query Optimization**: CBO, vectorized execution, adaptive execution
- **Hardware Acceleration**: GPU, FPGA utilization
- **Production Systems**: Real-world performance challenges and solutions

## Future Development

### Planned Enhancements
- **Content Expansion**: Complete 10 planned versions (0.1 to 1.0)
- **Interactive Examples**: Potential addition of interactive code examples
- **Multi-language Support**: Possible English translation
- **Community Features**: Enhanced contribution and feedback mechanisms

### Technical Evolution
- **VuePress Updates**: Keep up with latest VuePress versions
- **Content Management**: Enhanced tooling for content creation
- **Performance Optimization**: Continuous site performance improvements
- **Accessibility**: Enhanced accessibility features

---

*This AGENTS.md serves as the comprehensive guide for AI agents working on the OLAP Performance Optimization Guide project. It provides all necessary context for understanding, contributing to, and maintaining this technical documentation project.*