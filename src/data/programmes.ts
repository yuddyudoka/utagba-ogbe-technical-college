import imgMotorVehicle from "@/assets/programmes/motor-vehicle.jpg";
import imgElectrical from "@/assets/programmes/electrical-installation.jpg";
import imgFabrication from "@/assets/programmes/fabrication-welding.jpg";
import imgMechanical from "@/assets/programmes/mechanical-craft-practice.jpg";
import imgPlumbing from "@/assets/programmes/plumbing-pipefitting.jpg";
import imgBricklaying from "@/assets/programmes/bricklaying-concreting.jpg";
import imgFurniture from "@/assets/programmes/furniture-making.jpg";
import imgCarpentry from "@/assets/programmes/carpentry-joinery.jpg";
import imgAirCon from "@/assets/programmes/air-conditioning.jpg";
import imgTiling from "@/assets/programmes/tiling-interlocking.jpg";
import imgPainting from "@/assets/programmes/painting-decoration.jpg";
import imgBusiness from "@/assets/programmes/business-studies.jpg";

export interface Programme {
  n: string;
  type: "NTC" | "NBC";
  duration: string;
  certificate: string;
  title: string;
  slug: string;
  img: string;
  overview: string;
  whatYouWillLearn: string[];
  careerOutcomes: string[];
}

export const programmes: Programme[] = [
  {
    n: "01",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Motor Vehicle Mechanic Works",
    slug: "motor-vehicle-mechanic-works",
    img: imgMotorVehicle,
    overview:
      "This programme provides comprehensive training in automotive diagnosis, repair, and preventive maintenance across a wide range of vehicle systems. Students gain hands-on experience with engines, transmission systems, brakes, and electrical components. The booming demand for skilled mechanics across Nigeria makes this programme a direct pathway to stable employment.",
    whatYouWillLearn: [
      "Engine Overhaul & Diagnostics",
      "Brake & Suspension Systems",
      "Transmission & Clutch Repair",
      "Auto Electrical Systems",
      "Fuel Systems & Carburettors",
      "Preventive Maintenance",
    ],
    careerOutcomes: [
      "Auto Mechanic",
      "Fleet Maintenance Technician",
      "Vehicle Inspector",
      "Workshop Supervisor",
      "Mobile Repair Technician",
    ],
  },
  {
    n: "02",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Electrical Maintenance & Installation",
    slug: "electrical-maintenance-installation",
    img: imgElectrical,
    overview:
      "Students learn to install, maintain, and repair electrical systems in residential, commercial, and industrial settings. The programme covers wiring regulations, circuit design, and fault diagnosis, equipping graduates with the skills to work safely across a range of electrical projects in Nigeria's rapidly expanding construction and energy sectors.",
    whatYouWillLearn: [
      "Circuit Design & Wiring",
      "Electrical Safety Standards",
      "Industrial Panel Wiring",
      "Motor Control Systems",
      "Lighting & Power Installation",
      "Fault Finding & Testing",
    ],
    careerOutcomes: [
      "Electrician",
      "Electrical Technician",
      "Panel Wiring Specialist",
      "Maintenance Engineer",
      "Site Electrical Supervisor",
    ],
  },
  {
    n: "03",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Fabrication and Welding",
    slug: "fabrication-and-welding",
    img: imgFabrication,
    overview:
      "This programme trains students in the full range of metal fabrication and welding processes used in construction, manufacturing, and maintenance. Students develop proficiency in arc welding, gas welding, metal cutting, and structural steel work, preparing them for high-demand roles in Nigeria's industrial and oil & gas sectors.",
    whatYouWillLearn: [
      "Arc & MIG Welding",
      "Gas Welding & Cutting",
      "Structural Steelwork",
      "Sheet Metal Fabrication",
      "Blueprint Reading",
      "Weld Inspection & Quality",
    ],
    careerOutcomes: [
      "Welder",
      "Metal Fabricator",
      "Structural Steel Erector",
      "Welding Inspector",
      "Maintenance Fabricator",
    ],
  },
  {
    n: "04",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Mechanical Engineering & Craft Practice",
    slug: "mechanical-engineering-craft-practice",
    img: imgMechanical,
    overview:
      "This programme offers foundational and advanced training in mechanical engineering principles and workshop practice. Students learn to operate machine tools, read engineering drawings, and carry out precision measurement and fitting. Graduates are equipped to work in manufacturing plants, workshops, and maintenance departments across Nigeria.",
    whatYouWillLearn: [
      "Fitting & Turning",
      "Engineering Drawing",
      "Precision Measurement",
      "Machine Tool Operation",
      "Heat Treatment of Metals",
      "Workshop Safety Practice",
    ],
    careerOutcomes: [
      "Machine Operator",
      "Mechanical Fitter",
      "Maintenance Technician",
      "Engineering Workshop Supervisor",
      "Production Operative",
    ],
  },
  {
    n: "05",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Plumbing and Pipefitting",
    slug: "plumbing-and-pipefitting",
    img: imgPlumbing,
    overview:
      "Students receive expert training in the installation, maintenance, and repair of water supply and drainage systems. The programme covers pipe jointing techniques, sanitary fittings, and gas pipework, preparing graduates to serve the construction, real estate, and public infrastructure sectors across Nigeria.",
    whatYouWillLearn: [
      "Pipe Jointing Techniques",
      "Water Supply Systems",
      "Sanitary & Drainage Fitting",
      "Gas Pipework & Safety",
      "Hot & Cold Water Systems",
      "Plumbing Regulations",
    ],
    careerOutcomes: [
      "Plumber",
      "Pipefitter",
      "Sanitary Engineer",
      "Gas Pipe Installer",
      "Maintenance Plumber",
    ],
  },
  {
    n: "06",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Bricklaying, Blocklaying & Concreting",
    slug: "bricklaying-blocklaying-concreting",
    img: imgBricklaying,
    overview:
      "This programme builds expertise in brick and block construction, concreting, and structural masonry. Students learn to construct walls, foundations, and pavements to professional standards, with strong emphasis on accuracy, quality, and safety. Graduates are sought after across Nigeria's thriving construction and real estate industries.",
    whatYouWillLearn: [
      "Bricklaying Techniques",
      "Blocklaying & Bonding",
      "Concrete Mixing & Placing",
      "Foundation Construction",
      "Mortar Preparation",
      "Building Regulations",
    ],
    careerOutcomes: [
      "Bricklayer",
      "Blocklayer",
      "Concrete Finisher",
      "Site Masonry Supervisor",
      "Construction Contractor",
    ],
  },
  {
    n: "07",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Furniture Making",
    slug: "furniture-making",
    img: imgFurniture,
    overview:
      "Students learn to design and produce high-quality furniture using both traditional hand tools and modern woodworking machinery. The programme covers material selection, joinery, surface finishing, and upholstery, equipping graduates to supply Nigeria's growing furniture market or establish their own craft businesses.",
    whatYouWillLearn: [
      "Hand Tool Woodworking",
      "Machine Woodworking",
      "Joinery & Mortising",
      "Wood Finishing & Polishing",
      "Upholstery Techniques",
      "Furniture Design & Drawing",
    ],
    careerOutcomes: [
      "Furniture Maker",
      "Cabinet Maker",
      "Joiner",
      "Wood Finishing Specialist",
      "Furniture Business Owner",
    ],
  },
  {
    n: "08",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Carpentry and Joinery",
    slug: "carpentry-and-joinery",
    img: imgCarpentry,
    overview:
      "This programme covers precision carpentry and joinery for the construction industry, including formwork, door and window fitting, roofing, and staircase construction. Students develop the skills to work on both residential and commercial building projects, meeting Nigeria's strong and growing demand for qualified carpenters.",
    whatYouWillLearn: [
      "Formwork & Shuttering",
      "Door & Window Installation",
      "Roof Structure Construction",
      "Staircase Construction",
      "Flooring & Decking",
      "Structural Carpentry",
    ],
    careerOutcomes: [
      "Carpenter",
      "Joiner",
      "Formwork Carpenter",
      "Site Carpenter Supervisor",
      "Roofing Contractor",
    ],
  },
  {
    n: "09",
    type: "NTC",
    duration: "3 Years",
    certificate: "National Technical Certificate",
    title: "Air Conditioning & Refrigeration",
    slug: "air-conditioning-refrigeration",
    img: imgAirCon,
    overview:
      "Students gain practical skills in the installation, servicing, and repair of air conditioning and refrigeration equipment. The programme covers refrigeration cycles, electrical controls, and environmental regulations, preparing graduates for Nigeria's fast-growing HVAC industry driven by increased urbanisation and commercial development.",
    whatYouWillLearn: [
      "Refrigeration Cycle Theory",
      "AC Unit Installation",
      "Electrical Controls & Wiring",
      "Gas Charging & Recovery",
      "Fault Diagnosis & Repair",
      "Preventive Maintenance",
    ],
    careerOutcomes: [
      "HVAC Technician",
      "Refrigeration Engineer",
      "AC Installer",
      "Cold Room Technician",
      "Maintenance Engineer",
    ],
  },
  {
    n: "10",
    type: "NTC",
    duration: "2 Years",
    certificate: "National Technical Certificate",
    title: "Tiling & Interlocking",
    slug: "tiling-interlocking",
    img: imgTiling,
    overview:
      "This programme covers all aspects of tiling and interlocking works, from surface preparation and adhesive application to laying ceramic, porcelain, and stone tiles on walls and floors. Students also learn interlocking paving, cladding, and grouting techniques. Demand for skilled tilers in Nigeria's booming real estate sector makes this programme a gateway to stable employment.",
    whatYouWillLearn: [
      "Surface Preparation & Levelling",
      "Adhesive & Mortar Technology",
      "Floor Tiling Techniques",
      "Wall Tiling & Cladding",
      "Ceramic & Porcelain Tiles",
      "Interlocking Paving",
    ],
    careerOutcomes: [
      "Tiler",
      "Floor & Wall Finisher",
      "Cladding Specialist",
      "Interlocking Paving Contractor",
      "Building Finishes Supervisor",
    ],
  },
  {
    n: "11",
    type: "NTC",
    duration: "2 Years",
    certificate: "National Technical Certificate",
    title: "Painting and Decorations",
    slug: "painting-and-decorations",
    img: imgPainting,
    overview:
      "This programme provides professional training in surface preparation, interior and exterior painting, and decorative finishes. Students learn to use a variety of tools, materials, and application methods to achieve high-quality results. Graduates are equipped to work in construction, property maintenance, and interior decoration.",
    whatYouWillLearn: [
      "Surface Preparation",
      "Interior Painting Techniques",
      "Exterior Painting & Weatherproofing",
      "Decorative Finishes & Textures",
      "Colour Theory & Mixing",
      "Spray Painting",
    ],
    careerOutcomes: [
      "Painter & Decorator",
      "Interior Finishes Contractor",
      "Property Maintenance Painter",
      "Decorative Coatings Specialist",
      "Site Painting Supervisor",
    ],
  },
  {
    n: "12",
    type: "NBC",
    duration: "2 Years",
    certificate: "National Business Certificate",
    title: "NBC Business Studies",
    slug: "nbc-business-studies",
    img: imgBusiness,
    overview:
      "This NBC programme equips students with foundational knowledge in business administration, bookkeeping, entrepreneurship, and commerce. Students develop practical skills in record-keeping, communication, and business management that are directly applicable to running an enterprise or supporting businesses across the public and private sectors.",
    whatYouWillLearn: [
      "Business Administration",
      "Bookkeeping & Accounting",
      "Entrepreneurship",
      "Office Practice",
      "Business Communication",
      "Commerce & Trade",
    ],
    careerOutcomes: [
      "Business Administrator",
      "Accounts Clerk",
      "Entrepreneur",
      "Office Manager",
      "Sales & Marketing Executive",
    ],
  },
];

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}

export function getOtherProgrammes(slug: string, count = 3): Programme[] {
  const currentIndex = programmes.findIndex((programme) => programme.slug === slug);

  if (currentIndex === -1) {
    return programmes.slice(0, count);
  }

  const resultCount = Math.min(count, programmes.length - 1);

  return Array.from(
    { length: resultCount },
    (_, offset) => programmes[(currentIndex + offset + 1) % programmes.length],
  );
}
