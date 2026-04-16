export type Category = 'Customs Clearance' | 'Pricing' | 'SOPs' | 'Problem Solving';

export interface KnowledgeItem {
  id: string;
  title: string;
  category: Category;
  content: string;
  tags: string[];
  createdAt: string;
  author: string;
}

export const mockKnowledgeData: KnowledgeItem[] = [
  {
    id: '1',
    title: 'Required Documents for Textile Export',
    category: 'Customs Clearance',
    content: 'When processing textile exports from Ethiopia, ensure you have the following documents: Export Declaration Form, Certificate of Origin, Commercial Invoice, Packing List, Quality Control Certificate from Ministry of Trade, and Import Permit from destination country. Missing documents can result in delays of 3-5 business days.',
    tags: ['Customs', 'Ethiopia', 'Textile', 'Export'],
    createdAt: '2024-01-15',
    author: 'Tigist Haile',
  },
  {
    id: '2',
    title: 'How to Handle System Outages',
    category: 'Problem Solving',
    content: 'During a system outage, first check if it is a local network issue or a central system problem. Contact IT support at extension 2001. Document all manual processes in the downtime log. Use the backup paper forms for urgent shipments. Notify customers proactively with estimated resolution time.',
    tags: ['IT', 'System', 'Emergency', 'Procedure'],
    createdAt: '2024-02-20',
    author: 'Bekele Desalegn',
  },
  {
    id: '3',
    title: 'Standard Pricing for Domestic Shipping',
    category: 'Pricing',
    content: 'Base rates for domestic shipments: Document (0-500g): 150 ETB, Package (1-5kg): 350 ETB, Package (5-15kg): 550 ETB, Package (15-30kg): 850 ETB. Add 50% surcharge for remote areas. Fuel adjustment applies monthly based on Ministry indicator.',
    tags: ['Pricing', 'Domestic', 'Rates', 'ETB'],
    createdAt: '2024-03-10',
    author: 'Aster Girma',
  },
  {
    id: '4',
    title: 'International Shipment SOP',
    category: 'SOPs',
    content: 'Standard procedure for international shipments: 1) Verify sender ID and recipient details, 2) Complete customs declaration forms, 3) Weigh and measure package, 4) Generate tracking number, 5) Apply shipping labels, 6) Confirm payment, 7) Hand over to dispatch team. Total process should take no more than 15 minutes per shipment.',
    tags: ['SOP', 'International', 'Procedure', 'Step-by-step'],
    createdAt: '2024-01-25',
    author: 'Samuel Tefera',
  },
  {
    id: '5',
    title: 'Handling Fragile Items Protocol',
    category: 'Problem Solving',
    content: 'For fragile items, always use double-boxing technique. Apply FRAGILE stickers on all four sides. Document any existing damage before acceptance. Recommend customers purchase additional protection. In case of damage claims, follow the 48-hour reporting window.',
    tags: ['Fragile', 'Handling', 'Claims', 'Packaging'],
    createdAt: '2024-04-05',
    author: 'Hiwot Tadesse',
  },
  {
    id: '6',
    title: 'Customs Duty Calculation Guide',
    category: 'Customs Clearance',
    content: 'Customs duties in Ethiopia are calculated based on HS code classification. Standard rates: 5% for essential goods, 15% for general goods, 30% for luxury items. Additional fees include VAT (15%), withholding tax (3%), and processing fee (2%). Always verify HS codes with customs authority.',
    tags: ['Customs', 'Duty', 'Tax', 'HS Code'],
    createdAt: '2024-02-14',
    author: 'Tigist Haile',
  },
  {
    id: '7',
    title: 'Express Delivery Pricing Tiers',
    category: 'Pricing',
    content: 'Express delivery options: Same-Day (+200 ETB surcharge), Next-Day (+100 ETB surcharge), 2-3 Days (standard rate). Weight limit for express is 10kg. Priority handling fee of 50 ETB applies for shipments requiring customs rush processing.',
    tags: ['Express', 'Pricing', 'Express', 'Priority'],
    createdAt: '2024-03-22',
    author: 'Aster Girma',
  },
  {
    id: '8',
    title: 'Customer Complaint Resolution Flow',
    category: 'SOPs',
    content: 'Complaint resolution process: 1) Listen and acknowledge complaint, 2) Log in complaint system with unique ticket number, 3) Investigate within 24 hours, 4) Propose resolution to customer, 5) Implement solution, 6) Follow up for satisfaction, 7) Close ticket and document learning.',
    tags: ['SOP', 'Customer Service', 'Complaints', 'Resolution'],
    createdAt: '2024-04-12',
    author: 'Hiwot Tadesse',
  },
  {
    id: '9',
    title: 'Address Verification Best Practices',
    category: 'Problem Solving',
    content: 'Always verify Ethiopian addresses using landmarks and kebele codes. For Addis Ababa, include Sub-City, Wereda, and House Number. For regional cities, include Zone and Woreda. Use phone number as backup contact. Incomplete addresses lead to 40% delivery delays.',
    tags: ['Address', 'Verification', 'Ethiopia', 'Tips'],
    createdAt: '2024-01-30',
    author: 'Bekele Desalegn',
  },
  {
    id: '10',
    title: 'Prohibited Items List',
    category: 'Customs Clearance',
    content: 'Items prohibited from shipment: Weapons and ammunition, Narcotics and controlled substances, Pornographic materials, Counterfeit currency, Live animals without permits, Hazardous chemicals (including some batteries), Religious materials conflicting with national policy. Violation results in criminal prosecution.',
    tags: ['Prohibited', 'Customs', 'Compliance', 'Illegal'],
    createdAt: '2024-02-28',
    author: 'Samuel Tefera',
  },
];

export const categories: Category[] = ['Customs Clearance', 'Pricing', 'SOPs', 'Problem Solving'];
