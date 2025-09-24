import { AutomationCard } from "@/components/cards/automation-card";
import { FilterSelect } from "@/components/ui/filter-select";

const automations = [
  {
    title: "Account Receivables Agent",
    publisher: "FSS",
    description: "AR Agent aims to provide functionality through which payment information can be received by providing credit account number and date range. Also, it can provide all invoices information of a given PO.",
    platform: "SAP",
    platformColor: "bg-blue-600",
    type: "Free",
    users: "78 users",
    rating: 4.2,
    badge: "workflow Agent"
  },
  {
    title: "Invoice Upload to Coupa",
    publisher: "FSS",
    description: "This automation agent is designed to retrieve invoices from a designated SharePoint location and upload them to the Coupa Portal",
    platform: "Coupa",
    platformColor: "bg-blue-400",
    type: "Premium",
    users: "78 users",
    rating: 4.2,
    badge: "workflow Agent"
  },
  {
    title: "Genova ne",
    publisher: "Internal",
    description: "The automation SharePoint location",
    platform: "SharePoint",
    platformColor: "bg-green-600",
    type: "Premium",
    users: "",
    rating: 0,
    badge: "workflow Agent"
  }
];

const filterOptions = {
  publishedBy: [
    { value: "fss", label: "FSS" },
    { value: "internal", label: "Internal" }
  ],
  initiatives: [
    { value: "automation", label: "Automation" },
    { value: "integration", label: "Integration" }
  ],
  platform: [
    { value: "sap", label: "SAP" },
    { value: "coupa", label: "Coupa" },
    { value: "sharepoint", label: "SharePoint" }
  ]
};

export function AutomationsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Automations with AI-Enabled Agents</h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <FilterSelect 
            placeholder="Published By" 
            options={filterOptions.publishedBy}
            showIcon={true}
          />
          <FilterSelect 
            placeholder="Initiatives" 
            options={filterOptions.initiatives}
          />
          <FilterSelect 
            placeholder="Platform" 
            options={filterOptions.platform}
          />
        </div>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {automations.map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>
      </div>
    </section>
  );
}