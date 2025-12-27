import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface FeatureItem {
  name: string;
  product: "CE" | "CPaaS" | "Unbxd";
  link: string;
}

interface MonthData {
  month: string;
  features: FeatureItem[];
}

const yearData: MonthData[] = [
  { month: "Jan", features: [
    { name: "Event Actions", product: "CE", link: "https://cedocs.netcorecloud.com/docs/events#create-event" },
    { name: "Error Console", product: "CE", link: "https://cedocs.netcorecloud.com/docs/error-console" },
    { name: "Add Custom Parameters", product: "CE", link: "https://cedocs.netcorecloud.com/docs/global-advanced-settings#add-custom-parameters" },
  ]},
  { month: "Feb", features: [
    { name: "Two-Factor Authentication (2FA)", product: "CE", link: "https://cedocs.netcorecloud.com/docs/two-factor-authentication" },
    { name: "Journey Triggers", product: "CE", link: "https://cedocs.netcorecloud.com/docs/journey-triggers#activity" },
    { name: "Journey-Level Frequency Capping", product: "CE", link: "https://cedocs.netcorecloud.com/docs/create-a-journey" },
    { name: "In-App Campaign with Unified Content Editor", product: "CE", link: "https://cedocs.netcorecloud.com/docs/create-in-app-campaign-with-unified-content-editor-diy" },
    { name: "WhatsApp Payments", product: "CPaaS", link: "https://netcorecloud.stoplight.io/docs/whatsappapidoc/i4xuhn8p0lbof-whats-app-payments" },
  ]},
  { month: "Mar", features: [
    { name: "Attribute Data Masking", product: "CE", link: "https://cedocs.netcorecloud.com/docs/attributes-2#attribute-masking" },
    { name: "Progress Bar Enhancement", product: "CE", link: "https://cedocs.netcorecloud.com/docs/app-push-template#content" },
    { name: "Amazon S3 Integration for Contact Imports", product: "CE", link: "https://cedocs.netcorecloud.com/docs/amazon-s3-import" },
    { name: "Advanced Segmentation with Aggregation", product: "CE", link: "https://cedocs.netcorecloud.com/docs/ability-to-add-conditions-based-on-aggregation-operations" },
    { name: "Custom Data Deletion & Retention Period", product: "CE", link: "https://cedocs.netcorecloud.com/docs/events#create-event" },
    { name: "Dynamic & Static Product Picker", product: "CE", link: "https://cedocs.netcorecloud.com/docs/product-picker" },
    { name: "Segmentation Autosuggest", product: "CE", link: "https://cedocs.netcorecloud.com/docs/segments#create-a-segment" },
    { name: "WhatsApp Template", product: "CE", link: "https://cedocs.netcorecloud.com/docs/whatsapp-template#link-tracking" },
    { name: "WhatsApp Template Management", product: "CE", link: "https://netcorecloud.stoplight.io/docs/whatsappapidoc/branches/main/w6j0vuk1n77t8-whats-app-template-management#link-tracking" },
    { name: "WhatsApp in Unified Campaign Flow", product: "CE", link: "https://cedocs.netcorecloud.com/docs/whatsapp-in-unified-campaign-flow#link-tracking-in-whatsapp" },
    { name: "Brand Kit", product: "CE", link: "https://cedocs.netcorecloud.com/docs/brand-kit-1" },
  ]},
  { month: "Apr", features: [
    { name: "Web Message Template Generator", product: "CE", link: "https://cedocs.netcorecloud.com/docs/co-marketer-template-generator" },
    { name: "Vector Search", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/vector-search#/" },
    { name: "Measurement Search", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/measurement-search#/" },
    { name: "Website Preview", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/ai-meta-data" },
  ]},
  { month: "May", features: [
    { name: "Unbxd-Powered Recommendations for Email", product: "CE", link: "https://cedocs.netcorecloud.com/docs/recommendations-using-netcore" },
    { name: "Funnel Enhancements", product: "CE", link: "https://cedocs.netcorecloud.com/docs/funnel-analytics" },
    { name: "Attribute Deletion & Audit Logs", product: "CE", link: "https://cedocs.netcorecloud.com/docs/attributes-2#delete-attribute" },
    { name: "SSO on CE", product: "CE", link: "https://cedocs.netcorecloud.com/docs/sso-single-sign-on" },
    { name: "Facebook Lead Ads Integration", product: "CE", link: "https://cedocs.netcorecloud.com/docs/integrate-facebook-lead-ads-with-netcore" },
    { name: "Addressable Anonymous", product: "CE", link: "https://cedocs.netcorecloud.com/docs/addressable-anonymous" },
    { name: "CE Dashboard vs User-Level Reports", product: "CE", link: "https://cedocs.netcorecloud.com/docs/reports-nomenclature#ce-dashboard-data-vs-user-level-detailed-report" },
    { name: "Metrics & Formula Guide", product: "CE", link: "https://cedocs.netcorecloud.com/docs/reports-nomenclature#metrics-and-formulas-for-ui-pages--reports" },
    { name: "Link Tracking for RCS", product: "CPaaS", link: "https://cedocs.netcorecloud.com/docs/link-tracking-in-rcs" },
    { name: "AI-Suggested Similar Queries", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/promotions-optional#/ai-suggested-queries" },
    { name: "Visual Search", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/visual-search#/" },
    { name: "Product Card Mapping", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/product-card-mapping#/" },
    { name: "Bulk Export/Import Field Configurations", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/field-properties#/ability-to-bulk-exportimport-field-configurations" },
  ]},
  { month: "Jun", features: [
    { name: "Jio Integration for RCS", product: "CPaaS", link: "https://cedocs.netcorecloud.com/docs/multi-vendor-support-with-jio-integration" },
    { name: "Multiple Bot Support", product: "CPaaS", link: "https://netcorecloud.stoplight.io/docs/netcore-google-rcs-api-documentation/i6juemkp769g9-multibot-support-for-c-paa-s" },
    { name: "AI Suggested Redirects", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/redirects#/" },
    { name: "Product Insights", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/ai-meta-data#/product-insights" },
    { name: "Enhanced Filter & Boost Conditions", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/ui-terminologies#/" },
  ]},
  { month: "Jul", features: [
    { name: "UCE for WhatsApp", product: "CE", link: "https://cedocs.netcorecloud.com/docs/whatsapp-template" },
    { name: "Enhanced STO Support for WhatsApp", product: "CE", link: "https://cedocs.netcorecloud.com/docs/send-time-optimisation-sto" },
    { name: "Web Push Notifications (Android)", product: "CE", link: "https://cedocs.netcorecloud.com/docs/google-chrome-spam-filter" },
    { name: "Modify Event Payload Data Types", product: "CE", link: "https://cedocs.netcorecloud.com/docs/events#modify-event-payload-data-types" },
    { name: "WhatsApp Flows Integration", product: "CPaaS", link: "https://cedocs.netcorecloud.com/docs/flows-whatsapp" },
    { name: "Manage Autosuggest", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/autosuggest-1#/" },
    { name: "Two-Factor Authentication", product: "Unbxd", link: "https://unbxdocs.readme.io/docs/two-factor-authentication#/" },
    { name: "Catalog Plugin Support", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/catalog-plugin#/" },
  ]},
  { month: "Aug", features: [
    { name: "In-App GIFs & Countdown Timers in UCE", product: "CE", link: "https://cedocs.netcorecloud.com/docs/create-in-app-with-uce#widgets" },
    { name: "RFM State Transitions", product: "CE", link: "https://cedocs.netcorecloud.com/docs/rfm-transitions" },
    { name: "App Content Personalization", product: "CE", link: "https://cedocs.netcorecloud.com/docs/app-content-personalization" },
    { name: "Merchandising Strategies with A/B Reports", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/ab-testing-reporting#/" },
    { name: "PDP Viewer", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/product-display-page-viewer" },
    { name: "Activity History", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/user-profile#/activity-history" },
  ]},
  { month: "Sep", features: [
    { name: "Global Widgets for Reusable Content", product: "CE", link: "https://cedocs.netcorecloud.com/docs/create-email-template-with-uce#saved-blocks" },
    { name: "My Boards", product: "CE", link: "https://cedocs.netcorecloud.com/docs/analytics-custom-board" },
    { name: "Campaign Insight Generator", product: "CE", link: "#" },
    { name: "Event Tracking with Analytics", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/user-profile#/activity-history" },
    { name: "Product Badging", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/product-badges#/" },
    { name: "Shopping Agent", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/shopping-assistant" },
  ]},
  { month: "Oct", features: [
    { name: "Enhanced Custom Push Notification Layouts", product: "CE", link: "https://cedocs.netcorecloud.com/docs/campaign-insight-generator" },
    { name: "Doc Bot", product: "CE", link: "https://cedocs.netcorecloud.com/" },
    { name: "Journey Path Optimizer", product: "CE", link: "#" },
    { name: "Inline Widgets (Web Personalisation)", product: "CE", link: "https://cedocs.netcorecloud.com/docs/inline-widgets" },
    { name: "WhatsApp Product Carousel Template", product: "CPaaS", link: "https://netcorecloud.stoplight.io/docs/whatsappapidoc/iwcg4ar30nmgw-product-card-carousel-templates" },
  ]},
  { month: "Nov", features: [
    { name: "Infobip Integration for WhatsApp Journeys", product: "CE", link: "https://cedocs.netcorecloud.com/docs/infobip" },
    { name: "Report Documentation", product: "CE", link: "https://cedocs.netcorecloud.com/docs/on-site-messages-report" },
    { name: "Recommendations in App Push", product: "CE", link: "https://cedocs.netcorecloud.com/docs/product-recommendation-in-app-push" },
    { name: "Manage Multiple RCS Bots", product: "CE", link: "https://cedocs.netcorecloud.com/docs/ce-multibot-support" },
    { name: "Activity API", product: "CE", link: "https://developer.netcorecloud.com/docs/activity-api" },
    { name: "UTM Tracking Across Channels", product: "CE", link: "https://cedocs.netcorecloud.com/docs/create-in-app" },
    { name: "PII Hashing", product: "CPaaS", link: "https://emaildocs.netcorecloud.com/docs/settings-2#personally-identifiable-information-pii-hashing" },
    { name: "Encryption in Transit", product: "CPaaS", link: "https://cpaasdocs.netcorecloud.com/docs/netcore-sms/b183f973525f3-encryption-keys" },
    { name: "On-Click Field Rule", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/on-click-facet-rule#/" },
    { name: "Variant Locking", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/variant-locking#/" },
    { name: "Merchandising Strategies with Date Fields", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/ui-terminologies#/" },
    { name: "Product Freshness", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/product-freshness#/" },
    { name: "AI-Based Complete the Look", product: "Unbxd", link: "https://docs.netcoreunbxd.com/docs/recommendation-ai-based-complete-the-look#/" },
  ]},
  { month: "Dec", features: [
    { name: "Contact Create API", product: "CE", link: "https://developer.netcorecloud.com/reference/contact-create" },
    { name: "WhatsApp Limited-Time Offer Templates", product: "CE", link: "https://cedocs.netcorecloud.com/docs/whatsapp-limited-time-offer" },
    { name: "Dynamic Blocks in UCE", product: "CE", link: "https://cedocs.netcorecloud.com/docs/email-dynamic-block-in-unified-content-editor" },
    { name: "Segment on Segment", product: "CE", link: "https://cedocs.netcorecloud.com/docs/segment-inclusion-exclusion" },
    { name: "Set Limit", product: "CPaaS", link: "https://cedocs.netcorecloud.com/docs/create-rcs-campaign-copy#contact-limit" },
  ]},
];

const productColors = {
  CE: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/30" },
  CPaaS: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/30" },
  Unbxd: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/30" },
};

const fullMonthNames: Record<string, string> = {
  "Jan": "January",
  "Feb": "February",
  "Mar": "March",
  "Apr": "April",
  "May": "May",
  "Jun": "June",
  "Jul": "July",
  "Aug": "August",
  "Sep": "September",
  "Oct": "October",
  "Nov": "November",
  "Dec": "December"
};

// Calculate metrics dynamically
const getTotalFeatures = () => {
  return yearData.reduce((total, month) => total + month.features.length, 0);
};

const getCrossProductLaunches = () => {
  // Count months where multiple products shipped features together
  return yearData.filter(month => {
    const products = new Set(month.features.map(f => f.product));
    return products.size >= 2;
  }).length;
};

// Group months into quarters
const getQuarters = (data: MonthData[]) => [
  { label: "Q1", months: data.slice(0, 3) },
  { label: "Q2", months: data.slice(3, 6) },
  { label: "Q3", months: data.slice(6, 9) },
  { label: "Q4", months: data.slice(9, 12) },
];

export function YearAtGlance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [productFilter, setProductFilter] = useState<"All" | "CE" | "CPaaS" | "Unbxd">("All");
  const [selectedQuarterIndex, setSelectedQuarterIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedQuarterIndex(emblaApi.selectedScrollSnap());
      setSelectedMonth(null); // Clear selected month when switching quarters
    };
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const filteredData = yearData.map(month => ({
    ...month,
    features: productFilter === "All" 
      ? month.features 
      : month.features.filter(f => f.product === productFilter)
  }));

  const quarters = getQuarters(filteredData);
  const totalFeatures = getTotalFeatures();
  const crossProductLaunches = getCrossProductLaunches();


  return (
    <section
      id="year-glance"
      ref={ref}
      className="py-32 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Floating Blob Animations */}
      <motion.div
        animate={{
          x: [0, 250, -200, 280, -150, 200, 0],
          y: [0, -200, 180, -120, 250, -180, 0],
          scale: [1, 1.06, 0.94, 1.05, 0.97, 1.03, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-teal-500/15 via-transparent to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -200, 180, -250, 150, -180, 0],
          y: [0, 200, -150, 180, -200, 150, 0],
          scale: [1, 0.95, 1.04, 0.96, 1.05, 0.98, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-coral-400/10 via-transparent to-transparent blur-3xl pointer-events-none"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="caption text-teal-400 mb-4 block">Everything We Shipped</span>
          <h2 className="section-heading text-cream-100 mb-6">Year at a Glance</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            A chronological view of the features, launches, and platform bets that shaped our product year.
          </p>
        </motion.div>

        {/* Product Filter - Now before timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {["All", "CE", "CPaaS", "Unbxd"].map((product) => (
            <button
              key={product}
              onClick={() => setProductFilter(product as typeof productFilter)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                productFilter === product
                  ? "bg-cream-100 text-navy-900"
                  : "bg-cream-100/10 text-cream-300 hover:bg-cream-100/20"
              }`}
            >
              {product}
            </button>
          ))}
        </motion.div>

        {/* Carousel for Months */}
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex">
              {quarters.map((quarter, qIndex) => (
                <div key={quarter.label} className="flex-[0_0_100%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: qIndex * 0.1 }}
                    className="px-4"
                  >
                    {/* Three Months Row with Timeline */}
                    <div className="relative pt-4">
                      {/* Line segment: Month 1 to Month 2 */}
                      <div className="absolute top-[calc(1rem+28px)] md:top-[calc(1rem+32px)] left-[16.67%] w-[33.33%] h-0.5 bg-cream-100/20 z-0" />
                      
                      {/* Line segment: Month 2 to Month 3 */}
                      <div className="absolute top-[calc(1rem+28px)] md:top-[calc(1rem+32px)] left-[50%] w-[33.33%] h-0.5 bg-cream-100/20 z-0" />
                      
                      {/* Cross-quarter connector: extends right from Month 3 (except Q4) */}
                      {qIndex < 3 && (
                        <div className="absolute top-[calc(1rem+28px)] md:top-[calc(1rem+32px)] left-[83.33%] w-[16.67%] h-0.5 bg-cream-100/20 z-0" />
                      )}
                      
                      {/* Cross-quarter connector: extends left to Month 1 (except Q1) */}
                      {qIndex > 0 && (
                        <div className="absolute top-[calc(1rem+28px)] md:top-[calc(1rem+32px)] right-[83.33%] w-[16.67%] h-0.5 bg-cream-100/20 z-0" />
                      )}
                      
                      <div className="grid grid-cols-3 gap-4 md:gap-8 relative z-10">
                        {quarter.months.map((month) => {
                          const isSelected = selectedMonth === month.month;
                          
                          return (
                            <div key={month.month} className="text-center">
                              {/* Month Marker - Dynamic width rounded rectangle with gradient */}
                              <div 
                                className={`relative z-10 w-fit px-3 py-3 md:px-4 md:py-4 rounded-xl mx-auto mb-3 inline-flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg ${
                                  isSelected 
                                    ? "bg-gradient-to-br from-teal-400 to-teal-600 text-navy-900 scale-105" 
                                    : "bg-gradient-to-br from-navy-700 to-navy-800 border-2 border-teal-500/40 hover:border-teal-500/70 hover:from-navy-600 hover:to-navy-700 text-cream-100"
                                }`}
                                onClick={() => setSelectedMonth(isSelected ? null : month.month)}
                              >
                                <span className="font-bold text-xs md:text-sm whitespace-nowrap">{fullMonthNames[month.month]}</span>
                              </div>

                              {/* Feature Count */}
                              <p className="text-xs md:text-sm text-cream-300/60">
                                {month.features.length} feature{month.features.length !== 1 ? "s" : ""}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features Grid - Full Width Below All Months */}
                    {quarter.months.map((month) => {
                      const isSelected = selectedMonth === month.month;
                      const monthFeatures = month.features;
                      
                      return isSelected && monthFeatures.length > 0 ? (
                        <motion.div
                          key={`features-${month.month}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-8"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {monthFeatures.map((feature, fIndex) => (
                            <motion.a
                                key={fIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: fIndex * 0.05 }}
                                href={feature.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative block p-4 pr-10 rounded-xl border ${productColors[feature.product].border} ${productColors[feature.product].bg} hover:scale-[1.02] transition-transform duration-200 text-left group`}
                              >
                                {/* External link icon - top right corner */}
                                <ExternalLink 
                                  size={18} 
                                  className={`absolute top-3 right-3 ${productColors[feature.product].text} opacity-70 group-hover:opacity-100 transition-opacity`} 
                                />
                                <p className="text-sm font-medium text-cream-100 leading-tight pr-2">
                                  {feature.name}
                                </p>
                                <span className={`text-xs ${productColors[feature.product].text}`}>
                                  {feature.product}
                                </span>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      ) : null;
                    })}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Hint Text - Below Carousel */}
          <p className="text-sm text-cream-300/40 text-center mt-6">
            Click on a month to see features
          </p>

          {/* Navigation + Pagination */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-navy-700/80 border border-cream-100/20 flex items-center justify-center text-cream-100 hover:bg-navy-600 transition-colors"
              aria-label="Previous quarter"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {quarters.map((quarter, index) => (
                <button
                  key={quarter.label}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedQuarterIndex === index 
                      ? "bg-teal-400 w-6" 
                      : "bg-cream-100/30 hover:bg-cream-100/50"
                  }`}
                  aria-label={`Go to quarter ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-navy-700/80 border border-cream-100/20 flex items-center justify-center text-cream-100 hover:bg-navy-600 transition-colors"
              aria-label="Next quarter"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Summary Stats - Now below timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: "Total Features", value: `${totalFeatures}+` },
            { label: "Cross-Product Launches", value: `${crossProductLaunches}` },
            { label: "Major Releases", value: "12" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 rounded-2xl bg-navy-700/50 border border-amber-400/30">
              <p className="text-2xl md:text-4xl font-bold text-amber-400 mb-1 md:mb-2">{stat.value}</p>
              <p className="text-xs md:text-sm text-cream-300/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
