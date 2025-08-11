export interface ProjectDetails {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  specifications?: {
    [key: string]: string;
  };
  gallery?: string[];
  keyFeatures?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  completionDate: string;
  client: string;
  slug: string;
  featured?: boolean;
  details: ProjectDetails;
}

export const allProjects: Project[] = [
  {
    id: 'open-ocean-870-verification',
    title: 'Load Line Length Verification & Modifications – Open Ocean 870',
    description: 'Expert naval architectural services for Two Oceans Marine Manufacturing, assisting with critical modifications and compliance verification for the Open Ocean 870 luxury catamaran.',
    category: 'Naval Architecture',
    image: '/images/projects/open-ocean-870/hero.jpg',
    completionDate: '2024',
    client: 'Two Oceans Marine Manufacturing',
    slug: 'open-ocean-870-verification',
    featured: true,
    details: {
      overview: 'Our team provided comprehensive naval architectural services for the Open Ocean 870 luxury catamaran, focusing on load line length verification and necessary modifications to ensure compliance with maritime regulations. This project showcased our expertise in regulatory compliance while maintaining the vessel\'s exceptional performance characteristics.',
      challenge: 'The project required precise calculations and modifications to meet maritime regulations while preserving the vessel\'s performance and aesthetic qualities.',
      solution: 'We conducted thorough load line length verification and implemented targeted modifications to ensure compliance without compromising the vessel\'s design integrity.',
      results: 'Successfully achieved regulatory compliance while maintaining the vessel\'s performance characteristics and aesthetic appeal.',
      keyFeatures: [
        'Load line length verification',
        'Structural modifications',
        'Regulatory compliance assessment',
        'Performance optimization'
      ],
      specifications: {
        'Vessel Type': 'Luxury Catamaran',
        'Length': '24 meters (m)',
        'Client': 'Two Oceans Marine Manufacturing',
        'Completion Date': '2024'
      },
      gallery: [
        '/images/projects/open-ocean-870/gallery-1.jpg',
        '/images/projects/open-ocean-870/gallery-2.jpg',
        '/images/projects/open-ocean-870/gallery-3.jpg',
        '/images/projects/open-ocean-870/gallery-4.jpg'
      ]
    }
  },
  {
    id: 'ctv-deck-tie-down-design',
    title: 'CTV Deck Tie-Down Design for Legacy Marine',
    description: 'Specialized naval architecture services for structural analysis and safe working load (SWL) verification of a deck tie-down pipe on a Crew Transfer Vessel (CTV).',
    category: 'Naval Architecture',
    image: '/images/projects/ctv-deck-tie-down-design/hero.jpg',
    completionDate: '2024',
    client: 'Legacy Marine',
    slug: 'ctv-deck-tie-down-design',
    featured: true,
    details: {
      overview: 'Provided specialized naval architecture services for structural analysis and safe working load (SWL) verification of a deck tie-down pipe on a Crew Transfer Vessel (CTV).',
      challenge: 'The project required precise structural analysis to ensure the deck tie-down system could safely secure cargo and equipment during vessel operations.',
      solution: 'We conducted comprehensive structural analysis and SWL verification to ensure the deck tie-down system met safety standards and operational requirements.',
      results: 'Successfully delivered a robust deck tie-down design that ensures safe cargo securing during vessel operations.',
      keyFeatures: [
        'Structural analysis',
        'SWL verification',
        'Safety compliance',
        'Operational optimization'
      ],
      specifications: {
        'Vessel Type': 'Crew Transfer Vessel (CTV)',
        'Client': 'Legacy Marine',
        'Completion Date': '2024'
      },
      gallery: [
        '/images/projects/ctv-deck-tie-down-design/gallery-1.jpg',
        '/images/projects/ctv-deck-tie-down-design/gallery-2.jpg',
        '/images/projects/ctv-deck-tie-down-design/gallery-3.jpg',
        '/images/projects/ctv-deck-tie-down-design/gallery-4.jpg'
      ]
    }
  },
  {
    id: 'tnpa-763-dry-dock-fire-system-upgrade',
    title: 'TNPA - Dry Dock Fire System Upgrade at the Port of Durban',
    description: 'A comprehensive fire system upgrade project at the Port of Durban, including fire suppression, detection, and alarm systems.',
    category: 'Fire Systems Engineering',
    image: '/images/projects/tnpa-763-dry-dock-fire-system-upgrade/hero.jpg',
    completionDate: '2021',
    client: 'Transnet National Port Authority - Durban',
    slug: 'tnpa-763-dry-dock-fire-system-upgrade',
    featured: true,
    details: {
      overview: `Globtek Consulting Engineers was appointed by TNPA – Durban, to undertake the role of Management Contractor (MC) with Project Management and Supervisory responsibilities as outlined in the NEC 3 contract.

The TNPA sought to upgrade the Dry Dock Fire System, Fire Suppression, Detection and Alarm systems. The project was delivered on hybrid Design and Build model.`,
      challenge: 'The project required a comprehensive upgrade of fire systems across multiple facilities while ensuring minimal disruption to port operations and maintaining compliance with regulatory standards.',
      solution: 'Our team implemented a systematic approach to upgrade the fire systems, including the installation of new pump stations, ring mains, and foam injection systems. The project was executed with careful coordination between various engineering disciplines.',
      results: 'Successfully delivered a complete fire system upgrade that enhanced safety and compliance across the port facilities.',
      keyFeatures: [
        'Salter Water Pump station installation',
        '2.5km ring main from the salt water pump station',
        'Fresh Water Pump stations for Sprinkler System',
        'Fresh water storage tanks',
        'Foam Injection systems along the fire ring main',
        'Fire Systems upgrade at the Oil Store and surrounding buildings'
      ],
      specifications: {
        'Project Duration': '2019 - 2021',
        'Project Model': 'Hybrid Design and Build',
        'Contract Type': 'NEC 3',
        'Contact Person': 'Mrs Nandi Mtsokoba',
        'Role': 'Project Supervisor',
        'Contact': '031 361 8806 / 083 384 4405',
        'Email': 'nandi.mtsokoba@transnet.net'
      },
      gallery: [
        '/images/projects/tnpa-763-dry-dock-fire-system-upgrade/gallery-1.jpg',
        '/images/projects/tnpa-763-dry-dock-fire-system-upgrade/gallery-2.jpg',
        '/images/projects/tnpa-763-dry-dock-fire-system-upgrade/gallery-3.jpg',
        '/images/projects/tnpa-763-dry-dock-fire-system-upgrade/gallery-4.jpg'
      ]
    }
  },
  {
    id: 'transnet-richards-bay',
    title: 'Transnet Richards Bay - Port Survey & As-Built Drawings',
    description: 'Provision of a detailed Port Survey to provide as built drawings for all services within the Port Boundary at the Port of Richards Bay in an editable format.',
    category: 'Port & Marine Infrastructure',
    image: '/images/projects/transnet-richards-bay/hero.jpg',
    completionDate: 'In Progress',
    client: 'Transnet National Ports Authority (TNPA)',
    slug: 'transnet-richards-bay',
    featured: true,
    details: {
      overview: 'Transnet National Ports Authority appointed Globtek Consulting to undertake the Provision of a detailed Port Survey to provide as built drawings for all services within the Port Boundary at the Port of Richards Bay in an editable format. The Port is located 160km North-East of Durban and 465km South of Maputo on the Eastern seaboard of South Africa.',
      challenge: 'The project required comprehensive surveying and documentation of all port infrastructure and services, including underground utilities, to create accurate as-built drawings and 3D models.',
      solution: 'Our team implemented a systematic approach combining various surveying techniques including topographical surveys, LiDAR scanning, underground scanning, and 3D modeling to create comprehensive documentation of the port infrastructure.',
      results: 'Successfully delivered detailed as-built drawings and 3D models of the port infrastructure, providing valuable documentation for future planning and maintenance.',
      keyFeatures: [
        'Detailed Port Survey including Topographical, LiDAR, and Underground Scanning',
        '3Dimensional Modelling of Port Networks',
        'As-Built Drawings in PDF & Auto CAD Format',
        'Cadastral Data in Shapefile Format',
        'Geo-referenced Raster Images in TIFF Format',
        'Comprehensive Network Documentation'
      ],
      specifications: {
        'Study Period': '10 January 2022 – Project In Progress',
        'Consultant Team': 'Globtek Consulting',
        'Contact Person': 'Mr. Sinegugu Ncama',
        'Role': 'Project Manager',
        'Contact': '066 418 5609',
        'Email': 'Sinegugu.ncama@transnet.net'
      },
      gallery: [
        '/images/projects/transnet-richards-bay/gallery-1.jpg',
        '/images/projects/transnet-richards-bay/gallery-2.jpg',
        '/images/projects/transnet-richards-bay/gallery-3.jpg',
        '/images/projects/transnet-richards-bay/gallery-4.jpg'
      ]
    }
  },
  {
    id: 'ethekwini-point',
    title: 'Ethekwini Point - 800mm Diameter Pipeline across Durban CBD',
    description: 'Design and construction monitoring of a DN800 Steel Water main along Anton Lembede Street and Mahatma Gandhi Road, supporting the new Point precinct development.',
    category: 'Infrastructure Development',
    image: '/images/projects/ethekwini-point/hero.jpg',
    completionDate: 'In Progress',
    client: 'Ethekwini Metro Municipality',
    slug: 'ethekwini-point',
    featured: true,
    details: {
      overview: 'The project entailed design and construction monitoring of a DN800 Steel Water main along Anton Lembede Street from Alexander Street (CH 0 000) to Mahatma Gandhi Road (CH 2250) and along Mahatma Gandhi Road from Anton Lembede Street (CH 2 250) to Camperdown Road (CH 4 150). The purpose of the project is one of the critical services that are currently being upgraded to meet the near-future development demands which shall see the new Point precinct developing in a multi-billion dollar economy of eThekwini Metro Municipality, in line with the city\'s integrated development plan.',
      challenge: 'The project required careful coordination of major infrastructure work in a busy CBD area, ensuring minimal disruption to existing services and traffic while implementing critical water supply upgrades.',
      solution: 'Our team implemented a systematic approach to design, construction monitoring, and quality control, ensuring all works meet municipal standards while supporting future development needs.',
      results: 'Successfully delivered critical water infrastructure upgrades that support the Point precinct\'s development while maintaining service continuity.',
      keyFeatures: [
        '4150m of DN800 steel water main installation',
        'Associated valves and chamber structures',
        'Road surface remedial works',
        'Connection to existing AC reticulation',
        'Paving area refurbishment (20,000m²)',
        'Contract Administration and Inspection'
      ],
      specifications: {
        'Study Period': 'October 2019 – In Progress',
        'Consultant Team': 'Nako Illiso Consulting Engineers (Main), Globtek Consulting',
        'Contact Person': 'Mrs Nasreen Arabi',
        'Role': 'Project Supervisor',
        'Contact': '031 311 4733',
        'Email': 'Nasreen.Arabi@durban.gov.za'
      },
      gallery: [
        '/images/projects/ethekwini-point/gallery-1.jpg',
        '/images/projects/ethekwini-point/gallery-2.jpg',
        '/images/projects/ethekwini-point/gallery-3.jpg',
        '/images/projects/ethekwini-point/gallery-4.jpg'
      ]
    }
  },
  {
    id: 'islandview-condition-assessment',
    title: 'Islandview - Condition Assessment of Assets (17 Sites)',
    description: 'Comprehensive condition assessment of 17 sites at Island View Precinct, Port of Durban, including structural integrity, utility systems, and remaining useful life evaluation.',
    category: 'Port & Marine Infrastructure',
    image: '/images/projects/islandview-condition-assessment/hero.jpg',
    completionDate: '2019',
    client: 'Transnet National Ports Authority (TNPA) – Durban',
    slug: 'islandview-condition-assessment',
    featured: true,
    details: {
      overview: 'Globtek Consulting Engineers was appointed by TNPA – Durban to undertake FEL 1 Condition Assessment for 17 sites at Island View Precinct, Port of Durban, and to prepare an Asset Condition Assessment report. The purpose of the assessment is to determine the present condition and the remaining on the future usage of the assets. The detailed Asset condition assessment report was to enable TNPA to make informed decision for medium and long-term plans of the sites according to the Port Development Framework Plan as well as ensure compliance to TNPA Assets Maintenance principles and procedures.',
      challenge: 'The project required comprehensive assessment of multiple infrastructure assets across 17 sites, including structural integrity, utility systems, and compliance evaluation, while ensuring accurate remaining useful life calculations and cost estimates.',
      solution: 'Our team implemented a systematic approach to assess all assets, including structural integrity evaluation, utility system analysis, and compliance verification, while developing detailed recommendations for future utilization.',
      results: 'Successfully delivered comprehensive condition assessment reports that enabled TNPA to make informed decisions about asset maintenance and future development plans.',
      keyFeatures: [
        'Structural integrity assessment of infrastructure assets',
        'Water, Sanitation, Mechanical and Electrical installations assessment',
        'Remaining Useful Life (RUL) calculations',
        'Operational and environmental compliance evaluation',
        'High-level cost estimates for remedial works',
        'Future utilization recommendations'
      ],
      specifications: {
        'Study Period': '2018 - 2019',
        'Consultant Team': 'Globtek Consulting',
        'Contact Person': 'Ms. Nolonwabo Zamani',
        'Role': 'Project Manager',
        'Contact': '031 361 3750 / 083 56 852',
        'Email': 'nolonwabo.zamani@transnet.net'
      },
      gallery: [
        '/images/projects/islandview-condition-assessment/gallery-1.jpg',
        '/images/projects/islandview-condition-assessment/gallery-2.jpg',
        '/images/projects/islandview-condition-assessment/gallery-3.jpg',
        '/images/projects/islandview-condition-assessment/gallery-4.jpg'
      ]
    }
  }
]; 