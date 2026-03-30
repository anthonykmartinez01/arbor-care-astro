export interface ChildServiceData {
  path: string;
  parentPath: string;
  parentTitle: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  subheadline: string;
  openingParagraphs: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  finalCta: {
    headline: string;
    body: string;
    parentLinkText: string;
  };
  schema: Record<string, unknown>;
}

export const childServicesData: Record<string, ChildServiceData> = {
  "/tree-treatment-denver-co": {
    path: "/tree-treatment-denver-co",
    parentPath: "/arborist-service-denver-co",
    parentTitle: "Arborist Services",
    titleTag: "Tree Treatment Denver CO | Fast, Professional Service",
    metaDescription: "Professional tree treatment in Denver, CO. Insect, disease & nutrient treatments by ISA-certified arborists. Free estimates. Call (303) 949-6818.",
    h1: "Tree Treatment in Denver, CO",
    h1Accent: "Targeted Care That Actually Works",
    subheadline: "When a tree is struggling - whether from insects, disease, or drought stress - the right treatment applied at the right time can save it. We diagnose first, then treat.",
    openingParagraphs: [
      "You've noticed your tree doesn't look right. The leaves are discolored, the canopy is thinning, or there's something going on with the bark that wasn't there last year. The instinct is to wait and see, but with most tree health problems, waiting makes things worse. Insects spread. Disease progresses. A tree that's treatable today might not be treatable in six months.",
      "Arbor Care Tree Solutions provides tree treatment in Denver performed by ISA-certified arborists who identify the actual problem before recommending anything. We don't apply generic treatments — we diagnose what's happening and match the treatment to it.",
    ],
    sections: [
      {
        heading: "When You Need Tree Treatment",
        paragraphs: [
          "Signs a tree needs treatment: yellowing or browning leaves outside of fall, early leaf drop, thinning canopy, unusual spots or lesions on leaves, weeping or discolored bark, visible insects or sawdust-like material at the base, and dieback in sections of the canopy.",
          "In Denver, common culprits include Emerald Ash Borer in ash trees, bark beetles in pine and spruce, various fungal diseases worsened by wet springs, and drought stress that weakens trees' natural defenses. The sooner a problem is caught and correctly identified, the more options you have. Delayed treatment often means the difference between saving a tree and removing it.",
        ],
      },
      {
        heading: "Our Tree Treatment Process",
        paragraphs: [
          "We start with a thorough assessment of the tree — structure, bark, canopy, root zone, and surrounding conditions. Once we've identified the issue, we recommend a treatment plan specific to the problem and the species.",
          "Treatments may include trunk injections, soil drenches, or foliar applications depending on what's most effective for the diagnosis. Deep root fertilization is used when a tree needs help rebuilding after stress or treatment. We explain what we're doing and why before we start, and we follow up to make sure the treatment is working.",
        ],
      },
      {
        heading: "Tree Treatment Cost in Denver",
        paragraphs: [
          "Treatment cost depends on the tree's size, the type of treatment required, and the number of applications needed. A soil drench for a small ornamental is a very different job than a series of trunk injections for a large ash tree.",
          "We provide free, itemized estimates before any treatment begins so you know exactly what you're paying for. No hidden fees, no surprise charges when the job is done.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with ISA-certified arborists on staff and 100+ five-star Google reviews from Denver homeowners. We're fully licensed and insured in Colorado. Estimates are free with no trip charge. We answer calls immediately 24 hours a day — if you're concerned about a tree, call us and we'll help you figure out whether treatment is the right next step.",
        ],
      },
    ],
    finalCta: {
      headline: "Think Your Tree Needs Treatment?",
      body: "Don't wait for the problem to get worse. Call us for a free assessment — we'll tell you what's happening and what it will take to fix it.",
      parentLinkText: "Learn more about our full arborist services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Tree Treatment", name: "Tree Treatment Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/tree-health-assessment-denver-co": {
    path: "/tree-health-assessment-denver-co",
    parentPath: "/arborist-service-denver-co",
    parentTitle: "Arborist Services",
    titleTag: "Tree Health Assessment Denver CO | Arbor Care",
    metaDescription: "ISA-certified tree health assessments in Denver, CO. Know what's wrong before it becomes an emergency. Free estimates. Call (303) 949-6818.",
    h1: "Tree Health Assessment in Denver, CO",
    h1Accent: "Know What You're Dealing With",
    subheadline: "Not sure if your tree is declining, diseased, or just stressed? An ISA-certified arborist gives you a clear answer — and a plan.",
    openingParagraphs: [
      "Something looks off about one of your trees and you're not sure how serious it is. Maybe a few dead branches appeared after winter, or the canopy just isn't as full as it used to be. You could wait and watch, or you could find out exactly what's happening before the problem gets worse. A tree health assessment gives you a real answer - not a guess.",
      "Arbor Care Tree Solutions provides tree health assessments in Denver performed by ISA-certified arborists. We look at every part of the tree and give you a clear picture of its condition, any risks it presents, and what your options are.",
    ],
    sections: [
      {
        heading: "When You Need a Tree Health Assessment",
        paragraphs: [
          "You need an assessment when: a tree didn't fully leaf out this spring, sections of the canopy are dying back, the bark is showing unusual discoloration, weeping, or loss, the tree is leaning more than it used to, or you're just not sure if a tree is healthy and want a professional opinion before a storm season.",
          "In Denver, Emerald Ash Borer, bark beetles, drought stress, and structural damage from wet snow are common enough that an assessment is worthwhile for any mature tree that shows changes from one season to the next. Early detection is what keeps a treatable problem from becoming a removal job.",
        ],
      },
      {
        heading: "Our Tree Health Assessment Process",
        paragraphs: [
          "Our arborist does a systematic examination: canopy health and density, bark condition, trunk structure and any signs of decay, root zone condition, and the overall lean and balance of the tree. We look for signs of insect activity, fungal growth, structural weakness, and environmental stress.",
          "At the end of the assessment, we walk you through what we found, explain what it means, and give you clear options — whether that's treatment, pruning, monitoring, or in some cases removal. You get a straight answer, not a vague recommendation designed to sell you something.",
        ],
      },
      {
        heading: "Tree Health Assessment Cost in Denver",
        paragraphs: [
          "Assessments are part of our free estimate process. We come to your property, evaluate the tree, and give you our findings and recommendations at no charge. If treatment or other work is recommended, we provide a firm quote before any work begins. No trip charge, no obligation.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Our arborists hold ISA certification — the industry's standard for tree care professionals. We're a family-owned company with 100+ five-star Google reviews and a reputation in Denver for giving honest assessments. We don't push work that isn't needed. If a tree is healthy, we'll tell you that too. Licensed and insured in Colorado. We answer immediately 24/7.",
        ],
      },
    ],
    finalCta: {
      headline: "Not Sure What's Wrong With Your Tree?",
      body: "Call us for a free assessment. An ISA-certified arborist will look at it, tell you what's happening, and give you a clear path forward.",
      parentLinkText: "See all of our arborist services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Tree Health Assessment", name: "Tree Health Assessment Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/tree-planting-denver-co": {
    path: "/tree-planting-denver-co",
    parentPath: "/arborist-service-denver-co",
    parentTitle: "Arborist Services",
    titleTag: "Tree Planting Denver CO | Fast, Professional Service",
    metaDescription: "Professional tree planting in Denver, CO. Right species, right depth, right soil prep. ISA-certified arborists. Free estimates. Call (303) 949-6818.",
    h1: "Tree Planting in Denver, CO",
    h1Accent: "The Right Tree, Planted Right the First Time",
    subheadline: "A tree planted wrong will struggle for years. We help you choose the right species for your soil and site, then plant it correctly so it actually thrives.",
    openingParagraphs: [
      "You want to add a tree to your yard — or replace one you lost — and you want it to actually grow well. That sounds simple, but the wrong species for your soil type, a planting hole that's too deep, or poor soil prep can sentence a new tree to years of slow decline before it ever really gets established. Getting the planting right from the start is what determines whether a tree thrives or just survives.",
      "Arbor Care Tree Solutions handles tree planting in Denver with guidance from ISA-certified arborists who know what grows well in Denver's specific conditions.",
    ],
    sections: [
      {
        heading: "When You Need Tree Planting",
        paragraphs: [
          "You need professional tree planting when you're replacing a tree that was removed, adding shade or screening to a yard, replanting after a construction project, or selecting a species for a specific site and aren't sure what will work.",
          "Denver's clay-heavy soils, alkaline pH, intense UV, and wide temperature swings make species selection more important here than in many climates. A tree that thrives in a milder or wetter environment may struggle in Denver without the right prep. An arborist can tell you what will actually do well on your specific property.",
        ],
      },
      {
        heading: "Our Tree Planting Process",
        paragraphs: [
          "We start with the site: soil type, drainage, sun exposure, nearby structures, and how much space the tree has to grow long-term. From there we help you select a species suited to those conditions.",
          "We dig the planting hole to the correct depth and width, amend the soil as needed, and plant at the right depth — one of the most common mistakes that leads to long-term decline. We stake the tree if necessary, apply appropriate mulch, and give you watering guidance for the first two growing seasons, which are when most newly planted trees fail if they're not properly cared for.",
        ],
      },
      {
        heading: "Tree Planting Cost in Denver",
        paragraphs: [
          "Planting cost depends on the size of the tree, site preparation needed, and whether you're supplying the tree or having us source it. We provide free estimates that cover everything — sourcing, planting, soil prep, and any staking required. No hidden charges for materials or haul-away.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with ISA-certified arborists who know Denver's soil and climate conditions well. We've earned 100+ five-star Google reviews from local homeowners. Free estimates, no trip charge, we answer immediately 24/7. Licensed and insured in Colorado.",
        ],
      },
    ],
    finalCta: {
      headline: "Ready to Plant a Tree That Will Actually Thrive?",
      body: "Call us for a free estimate. We'll help you pick the right species and make sure it goes in correctly.",
      parentLinkText: "Learn more about our full arborist services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Tree Planting", name: "Tree Planting Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/seasoned-firewood-denver-co": {
    path: "/seasoned-firewood-denver-co",
    parentPath: "/other-services",
    parentTitle: "Firewood Supply",
    titleTag: "Seasoned Firewood Denver CO | Ready to Burn Hardwood",
    metaDescription: "Seasoned, split hardwood for sale in Denver, CO. Cord & face cord available. Burns hot and clean. Family owned. Call (303) 949-6818.",
    h1: "Seasoned Firewood for Sale in Denver, CO",
    h1Accent: "Burns Hot, No Green Wood",
    subheadline: "Properly dried, split hardwood available by the cord or face cord. When it arrives, it's ready to use - no waiting, no smoking up your living room.",
    openingParagraphs: [
      "There's a real difference between seasoned firewood and wood that's been cut recently and left to sit. Green wood is full of moisture — it burns poorly, produces excessive smoke, and deposits creosote in your chimney faster than dry wood. Most people don't find out their firewood is green until they try to use it on a cold night. Our firewood is properly seasoned before it's ever sold, so you get what you're actually paying for.",
      "Arbor Care Tree Solutions sells seasoned firewood in Denver sourced from the trees we remove and trim throughout the metro. We know what's in the pile because we cut it ourselves.",
    ],
    sections: [
      {
        heading: "When You Need Seasoned Firewood",
        paragraphs: [
          "You need seasoned firewood before Denver's cold season hits — ideally in late summer or fall before demand picks up. If you have a fireplace, wood stove, or outdoor fire pit you use regularly through winter, a full cord is the right amount for most households.",
          "If you use your fireplace occasionally or want to supplement an existing supply, a face cord gives you a manageable amount without overbuying. Running out mid-winter and trying to source dry firewood on short notice is a problem easily avoided by ordering early.",
        ],
      },
      {
        heading: "Our Firewood Process",
        paragraphs: [
          "We sell split hardwood that has been dried to an appropriate moisture level for clean, efficient burning. Wood is sold by the cord (128 cubic feet stacked) or face cord (a single row, 4 feet high by 8 feet wide).",
          "You can pick up from us or have it delivered and stacked — see our firewood delivery page for details. We measure and stack honestly — you get what you order, not a loosely thrown pile that looks like more than it is.",
        ],
      },
      {
        heading: "Firewood Cost in Denver",
        paragraphs: [
          "Firewood pricing depends on the amount ordered and whether delivery and stacking are included. We provide firm quotes by phone — call us, tell us what you need, and we'll give you a straightforward price. Pricing is per cord or face cord with no hidden fees.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "We're a family-owned tree service company — our firewood comes directly from trees we remove and trim in Denver. We know the wood, we seasoned it, and we stand behind it. 100+ five-star Google reviews. We answer immediately 24/7. Licensed and insured in Colorado.",
        ],
      },
    ],
    finalCta: {
      headline: "Ready to Order Firewood?",
      body: "Call us for a price and availability. We answer immediately and can get delivery scheduled fast.",
      parentLinkText: "See all of our firewood options in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Firewood for Sale", name: "Seasoned Firewood for Sale Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/firewood-delivery-denver-co": {
    path: "/firewood-delivery-denver-co",
    parentPath: "/other-services",
    parentTitle: "Firewood Supply",
    titleTag: "Firewood Delivery Denver CO | Fast, Professional Service",
    metaDescription: "Firewood delivery in Denver, CO and surrounding metro. Seasoned hardwood delivered and stacked. Family owned. Call (303) 949-6818 to schedule.",
    h1: "Firewood Delivery in Denver, CO",
    h1Accent: "Delivered and Stacked, Ready for Winter",
    subheadline: "We deliver seasoned hardwood to your address and stack it where you want it. No hauling, no heavy lifting — just call and it's done.",
    openingParagraphs: [
      "Ordering firewood is easy. Getting it home, unloaded, and stacked is the part most people don't love. If you don't have a truck or the time to deal with it, delivery makes the whole thing simple. We bring the wood to your address, stack it in your preferred location, and leave it ready to use. All you do is call.",
      "Arbor Care Tree Solutions delivers seasoned firewood throughout the Denver metro - the same properly dried hardwood we sell for pickup, delivered to your door by the same family-owned team that handles tree care in your neighborhood.",
    ],
    sections: [
      {
        heading: "When You Need Firewood Delivery",
        paragraphs: [
          "Firewood delivery makes sense when you don't have a vehicle to transport a cord or face cord, when you want the wood stacked in a specific location on your property, or when you'd rather just have it handled without making a trip.",
          "Most of our delivery customers order in fall before the cold season starts — that's when we have the most scheduling flexibility and you're not scrambling for dry wood during the first cold snap.",
        ],
      },
      {
        heading: "Our Firewood Delivery Process",
        paragraphs: [
          "You call us, tell us how much you need and where you're located, and we give you a price and available delivery dates. We deliver throughout the Denver metro including Aurora, Lakewood, Englewood, Littleton, Centennial, Highlands Ranch, Arvada, Westminster, and Thornton.",
          "On delivery day, we bring the wood directly to your property and stack it where you want it — next to the house, in a wood shed, or wherever works for you. The wood is seasoned and ready to burn when it arrives.",
        ],
      },
      {
        heading: "Firewood Delivery Cost in Denver",
        paragraphs: [
          "Delivery pricing depends on the amount ordered and your location. We provide firm quotes by phone — call us with your address and what you need and we'll give you a straightforward total that includes delivery and stacking. No surprise charges when we arrive.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company and the firewood we deliver comes directly from trees we remove and trim across the Denver metro. We answer calls immediately 24/7. 100+ five-star Google reviews. Licensed and insured in Colorado. Free estimates on all orders.",
        ],
      },
    ],
    finalCta: {
      headline: "Ready to Schedule Firewood Delivery?",
      body: "Call us, tell us what you need, and we'll give you a price and a date. Simple as that.",
      parentLinkText: "See all of our firewood options in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Firewood Delivery", name: "Firewood Delivery Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/bush-shrub-trimming-denver-co": {
    path: "/bush-shrub-trimming-denver-co",
    parentPath: "/tree-trimming",
    parentTitle: "Tree Trimming & Pruning",
    titleTag: "Bush & Shrub Trimming Denver CO | Fast, Professional Service",
    metaDescription: "Bush and shrub trimming in Denver, CO. Proper technique for healthy regrowth. Free estimates, no trip charge. Call (303) 949-6818.",
    h1: "Bush & Shrub Trimming in Denver, CO",
    h1Accent: "Shaped Right, Grows Back Healthy",
    subheadline: "Overgrown shrubs blocking windows, crowding walkways, or just getting out of hand? We trim them back properly so they look good and grow back the way they should.",
    openingParagraphs: [
      "Overgrown shrubs have a way of sneaking up on you. One season they're fine, the next they're blocking your front windows, pushing against the house, or making the front of your property look neglected. Cutting them back yourself with hedge trimmers often creates more problems — improper cuts lead to dead zones, uneven regrowth, and shrubs that look worse the following season. Getting them trimmed correctly makes a real difference.",
      "Arbor Care Tree Solutions handles bush and shrub trimming in Denver using proper technique that promotes healthy regrowth and keeps your plants looking good season after season.",
    ],
    sections: [
      {
        heading: "When You Need Bush & Shrub Trimming",
        paragraphs: [
          "You need shrub trimming when plants are blocking windows or entryways, growing into the house foundation or siding, getting so overgrown that the interior is dead and hollow, or simply getting larger than you want them.",
          "Timing matters too — improper trimming at the wrong time of year can prevent flowering or damage the plant's structure. In Denver, late winter or early spring is typically the right window for most shrubs before new growth starts, though some species have different requirements. We'll work within the right seasonal window for what you have.",
        ],
      },
      {
        heading: "Our Bush & Shrub Trimming Process",
        paragraphs: [
          "We assess the plants before cutting — what species they are, how healthy the interior growth is, and what the goal is for size and shape. Cuts are made to live wood at the right angle to promote healthy regrowth, not just sheared flat for appearance.",
          "For severely overgrown shrubs, we may recommend a staged approach over two seasons rather than cutting too aggressively at once, which can shock the plant. Cleanup is included — all trimmings are hauled away and the area is left clean.",
        ],
      },
      {
        heading: "Bush & Shrub Trimming Cost in Denver",
        paragraphs: [
          "Cost depends on the number of shrubs, their size, and how overgrown they are. We provide free on-site estimates with no trip charge. You'll have a firm price before we start.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with ISA-certified arborists and 100+ five-star Google reviews. We understand Denver's plants and growing seasons. Free estimates, we answer immediately 24/7. Licensed and insured in Colorado.",
        ],
      },
    ],
    finalCta: {
      headline: "Shrubs Getting Out of Hand?",
      body: "Call us for a free estimate. We'll get them shaped up properly and leave your property looking clean.",
      parentLinkText: "See our full tree trimming and pruning services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Bush and Shrub Trimming", name: "Bush & Shrub Trimming Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/crown-reduction-denver-co": {
    path: "/crown-reduction-denver-co",
    parentPath: "/tree-trimming",
    parentTitle: "Tree Trimming & Pruning",
    titleTag: "Crown Reduction Denver CO | Fast, Professional Service",
    metaDescription: "Crown reduction tree service in Denver, CO. ISA-certified arborists reduce canopy size while preserving tree health. Free estimates. Call (303) 949-6818.",
    h1: "Crown Reduction in Denver, CO",
    h1Accent: "Smaller Canopy, Healthier Tree",
    subheadline: "When a tree has outgrown its space or is putting load on nearby structures, crown reduction brings it back to the right size without harming the tree's long-term health.",
    openingParagraphs: [
      "A tree that's grown too large for its space creates real problems - branches over the roof, a canopy shading out the yard, or a tree that's simply become too heavy at the top for its trunk to manage safely through a wind storm. The answer isn't to just cut it back as far as possible. Improper topping damages trees severely and leads to weak, fast-growing regrowth that creates bigger problems within a few years. Crown reduction done correctly reduces the tree's size while maintaining its structure and health.",
      "Arbor Care Tree Solutions performs crown reduction in Denver using ISA-standard technique — selective cuts that reduce canopy size without leaving stubs or damaging the tree's ability to compartmentalize.",
    ],
    sections: [
      {
        heading: "When You Need Crown Reduction",
        paragraphs: [
          "Crown reduction is the right service when a tree has grown into or over a structure, when the canopy has become so dense it's creating wind-load or snow-load risk, when you need to reduce shade in a specific area, or when a tree's overall size has become disproportionate to its space.",
          "In Denver, large cottonwoods, silver maples, and fast-growing ornamentals often outpace the space they were planted in. A proper crown reduction can extend the life of a tree that would otherwise need to be removed entirely.",
        ],
      },
      {
        heading: "Our Crown Reduction Process",
        paragraphs: [
          "Our ISA-certified arborists assess the tree's structure and identify the appropriate reduction percentage — typically no more than 25-30% of the live crown in a single pruning to avoid stressing the tree.",
          "Cuts are made at lateral branches large enough to assume the terminal role, which maintains the tree's natural form and prevents the development of weak water sprout growth. We clean up and haul all debris. Most crown reductions are done in a single visit.",
        ],
      },
      {
        heading: "Crown Reduction Cost in Denver",
        paragraphs: [
          "Cost depends on the tree's size, height, and proximity to structures. Taller trees and those near buildings or power lines require more rigging and crew time. We provide free on-site estimates with no trip charge.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "ISA-certified arborists, 100+ five-star reviews, family owned, and fully licensed and insured in Colorado. We answer calls immediately 24/7. Free estimates with no trip charge. We'll tell you honestly if a different approach would serve the tree better.",
        ],
      },
    ],
    finalCta: {
      headline: "Tree Getting Too Big for Its Space?",
      body: "Call us for a free assessment. We'll look at the tree, tell you what's possible, and give you a firm quote.",
      parentLinkText: "See our full tree trimming and pruning services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Crown Reduction", name: "Crown Reduction Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/deadwooding-denver-co": {
    path: "/deadwooding-denver-co",
    parentPath: "/tree-trimming",
    parentTitle: "Tree Trimming & Pruning",
    titleTag: "Deadwooding Denver CO | Fast, Professional Service",
    metaDescription: "Deadwooding services in Denver, CO. Remove dead, dying & diseased limbs before they fall. ISA-certified arborists. Free estimates. Call (303) 949-6818.",
    h1: "Deadwooding in Denver, CO",
    h1Accent: "Remove the Risk Before It Falls",
    subheadline: "Dead limbs don't stay up forever. We remove dead, dying, and diseased wood from your trees before it becomes a hazard to your property or anyone on it.",
    openingParagraphs: [
      "Dead branches in a tree look bad — but the real problem is what they do when they come down. A large dead limb that falls on its own doesn't give you any warning. It can hit a roof, a fence, a car, or a person, and unlike a living branch that bends, dead wood breaks on impact. Removing dead wood before it falls is one of the most cost-effective things you can do for a mature tree.",
      "Arbor Care Tree Solutions performs deadwooding in Denver — systematically removing dead, dying, and diseased limbs from the canopy to eliminate hazards and improve the tree's health.",
    ],
    sections: [
      {
        heading: "When You Need Deadwooding",
        paragraphs: [
          "You need deadwooding when you can see dead branches in the canopy — branches with no leaves during the growing season, visibly brittle or gray wood, hanging limbs that are partially detached, or sections of canopy that have clearly died back.",
          "In Denver, deadwood accumulates after hard winters, drought stress years, bark beetle damage, and storm events. Any large tree over a structure, a play area, a driveway, or a frequently used outdoor space should be inspected for deadwood regularly. After a significant wind or snow event is a good time to have a look.",
        ],
      },
      {
        heading: "Our Deadwooding Process",
        paragraphs: [
          "Our arborists work through the canopy systematically, identifying and removing all dead, dying, and structurally compromised wood. Cuts are made cleanly at the branch collar to allow the tree to seal the wound properly.",
          "We pay attention to disease — if a section of deadwood shows signs of fungal infection, we handle it carefully to avoid spreading spores during removal. All debris is cleaned up and hauled away. Most deadwooding jobs are completed in a single visit.",
        ],
      },
      {
        heading: "Deadwooding Cost in Denver",
        paragraphs: [
          "Cost depends on the tree's size, height, and how much dead material needs to be removed. We provide free on-site estimates with no trip charge. For large trees with significant deadwood, we'll walk you through what we find before we start.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with ISA-certified arborists, 100+ five-star Google reviews, and full licensing and insurance in Colorado. Free estimates, we answer immediately 24/7, no trip charge.",
        ],
      },
    ],
    finalCta: {
      headline: "Dead Branches in Your Tree?",
      body: "Don't wait for them to come down on their own. Call us for a free estimate and we'll get them out safely.",
      parentLinkText: "See our full tree trimming and pruning services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Deadwooding", name: "Deadwooding Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/emergency-tree-removal-denver-co": {
    path: "/emergency-tree-removal-denver-co",
    parentPath: "/tree-removal",
    parentTitle: "Tree Removal",
    titleTag: "Emergency Tree Removal Denver CO | 24/7 Fast Response",
    metaDescription: "Emergency tree removal in Denver, CO. 24/7, we answer immediately. Tree on your roof, car, or blocking access — we dispatch fast. Call (303) 949-6818.",
    h1: "Emergency Tree Removal in Denver, CO",
    h1Accent: "We Answer 24/7, Dispatch Fast",
    subheadline: "Tree down on your property right now? Call us — we answer immediately any time of day or night and get a crew to you as fast as possible.",
    openingParagraphs: [
      "A tree came down. Maybe it's on your roof, across your driveway, on a fence, or leaning against the house after the last storm. You don't have time to fill out a contact form and wait for a callback during business hours. You need someone on the phone right now who can tell you what to do and get a crew moving.",
      "Arbor Care Tree Solutions handles emergency tree removal in Denver 24 hours a day, 7 days a week. We answer immediately — not a voicemail, not an answering service, a real person — and we dispatch based on urgency.",
    ],
    sections: [
      {
        heading: "When You Need Emergency Tree Removal",
        paragraphs: [
          "You need emergency removal when a tree or large limb has fallen on a structure, vehicle, or is blocking access to your home or property. Also when a tree is visibly failing — leaning suddenly after a storm, cracked at the base, or hanging over a structure at a precarious angle that makes failure imminent.",
          "Front Range wind and snow events regularly produce these situations across Denver, Aurora, Lakewood, Englewood, and the surrounding metro. Don't wait to see if it gets worse. If something looks like it's about to fail, call now.",
        ],
      },
      {
        heading: "Our Emergency Tree Removal Process",
        paragraphs: [
          "When you call, we ask a few quick questions to assess the situation and determine urgency. We dispatch the appropriate crew and equipment based on what you describe.",
          "On arrival, we assess the scene, secure the area, and work safely and efficiently to remove the tree or limb and clear the debris. If there's structural damage to your property, we document what we can to help with insurance. We clean up before we leave.",
        ],
      },
      {
        heading: "Emergency Tree Removal Cost in Denver",
        paragraphs: [
          "Emergency removals are priced based on the size of the tree, the complexity of the job, and the time of day. We give you a price before we start — no blank-check situations.",
          "Emergency work typically costs more than a scheduled removal, and we're upfront about that. You'll know what you're agreeing to before we touch anything.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "We answer immediately 24/7 — that's not a marketing claim, it's how we operate. Fully licensed and insured in Colorado. Family owned. 100+ five-star Google reviews from Denver homeowners. We have the equipment and experience to handle large, complex emergency removals safely.",
        ],
      },
    ],
    finalCta: {
      headline: "Tree Down Right Now?",
      body: "Call us immediately - we answer 24/7 and dispatch fast.",
      parentLinkText: "See our full tree removal services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Emergency Tree Removal", name: "Emergency Tree Removal Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/hazardous-tree-removal-denver-co": {
    path: "/hazardous-tree-removal-denver-co",
    parentPath: "/tree-removal",
    parentTitle: "Tree Removal",
    titleTag: "Hazardous Tree Removal Denver CO | Arbor Care",
    metaDescription: "Hazardous tree removal in Denver, CO. Compromised, leaning & structurally failing trees removed safely. ISA-certified. Free estimates. Call (303) 949-6818.",
    h1: "Hazardous Tree Removal in Denver, CO",
    h1Accent: "Removed Safely Before It Becomes a Crisis",
    subheadline: "A compromised tree near your home isn't a question of if it fails - it's when. We remove hazardous trees safely with proper rigging and experienced crew.",
    openingParagraphs: [
      "You've been watching this tree for a while. The lean is getting worse. There's a crack in the trunk you didn't notice last year. Large sections of bark are missing and the wood underneath doesn't look healthy. You know it's not right, but you haven't made the call yet. The problem with hazardous trees is that they give you less warning the further they decline — and once a large tree fails near a structure, the damage is expensive and the situation is dangerous.",
      "Arbor Care Tree Solutions handles hazardous tree removal in Denver — trees that are structurally compromised, heavily diseased, or positioned in a way that makes failure a real risk to your property.",
    ],
    sections: [
      {
        heading: "When You Need Hazardous Tree Removal",
        paragraphs: [
          "A tree is hazardous when it has significant trunk decay at or near the base, a crack or split that runs through structural wood, a lean that has developed or worsened recently, major root damage or heaving soil around the base, or large sections of deadwood over a structure or occupied area.",
          "Proximity matters — a declining tree far from anything is a different risk than the same tree 15 feet from your house. Our ISA-certified arborists assess risk systematically and give you a straight answer about whether removal is necessary.",
        ],
      },
      {
        heading: "Our Hazardous Tree Removal Process",
        paragraphs: [
          "Hazardous removals require more planning than standard removals. We assess the tree's condition, the site, and what's nearby before we start. For trees near structures, we use rigging to control how sections come down — nothing is allowed to free-fall where it could cause damage.",
          "We work in sections from the top down, removing the tree piece by piece with the right equipment and crew for the job. All debris is cleaned up and hauled away.",
        ],
      },
      {
        heading: "Hazardous Tree Removal Cost in Denver",
        paragraphs: [
          "Hazardous removals typically cost more than straightforward removals because of the additional rigging, planning, and crew time involved. We provide free on-site estimates and walk you through exactly how we plan to do the job. You'll have a firm price before anything starts.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is fully licensed and insured in Colorado — that matters for hazardous work. ISA-certified arborists, 100+ five-star Google reviews, family owned. We answer immediately 24/7. Free estimates, no trip charge.",
        ],
      },
    ],
    finalCta: {
      headline: "Worried About a Tree Near Your Home?",
      body: "Don't wait for it to come down on its own. Call us for a free assessment — we'll tell you exactly what the risk is and what it will take to address it.",
      parentLinkText: "See our full tree removal services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Hazardous Tree Removal", name: "Hazardous Tree Removal Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/bush-shrub-removal-denver-co": {
    path: "/bush-shrub-removal-denver-co",
    parentPath: "/tree-removal",
    parentTitle: "Tree Removal",
    titleTag: "Bush & Shrub Removal Denver CO | Fast, Professional Service",
    metaDescription: "Bush and shrub removal in Denver, CO. Full removal including root ball. Free estimates, no trip charge. Call (303) 949-6818.",
    h1: "Bush & Shrub Removal in Denver, CO",
    h1Accent: "Gone Completely, Space Reclaimed",
    subheadline: "Overgrown, dying, or unwanted shrubs removed cleanly - including the root system when needed - so you can use the space the way you want.",
    openingParagraphs: [
      "Some shrubs reach a point where they can't be trimmed back into shape. They're too far gone, too overgrown, or simply in the wrong place for what you need the yard to do. Removing a large shrub isn't always as simple as cutting it down — root systems can be extensive, and some species re-sprout aggressively if the root crown isn't dealt with properly. Getting it done right means the space is actually clear and ready for whatever comes next.",
      "Arbor Care Tree Solutions handles bush and shrub removal in Denver — full removal including root ball extraction when needed, with complete cleanup before we leave.",
    ],
    sections: [
      {
        heading: "When You Need Bush & Shrub Removal",
        paragraphs: [
          "You need removal when a shrub is dead or so severely damaged it can't recover, when overgrown shrubs are damaging your foundation, siding, or irrigation system, when you're redesigning a landscape area and need to start fresh, or when a shrub has grown too large to be managed through trimming.",
          "Some shrubs — like certain privets and lilacs common in Denver yards — re-sprout heavily from the base if not fully removed. If you've trimmed the same shrub back repeatedly and it just keeps coming, full removal with root extraction is the right answer.",
        ],
      },
      {
        heading: "Our Bush & Shrub Removal Process",
        paragraphs: [
          "We cut the shrub down and remove the above-ground material first. For shrubs where re-sprouting is a concern or where the root system is near a foundation or irrigation line, we excavate and remove the root crown.",
          "The hole is filled and leveled so the area is ready for replanting or sod. All debris is hauled away. For large multi-shrub projects, we can work through an entire bed in a single visit.",
        ],
      },
      {
        heading: "Bush & Shrub Removal Cost in Denver",
        paragraphs: [
          "Cost depends on the number and size of shrubs and whether root extraction is needed. We provide free on-site estimates with no trip charge. Larger projects are priced per job so you have a clear total upfront.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with 100+ five-star Google reviews serving Denver and the surrounding metro. Free estimates, no trip charge, we answer immediately 24/7. Licensed and insured in Colorado.",
        ],
      },
    ],
    finalCta: {
      headline: "Ready to Get Rid of Those Shrubs?",
      body: "Call us for a free estimate. We'll take a look, tell you what's involved, and get it scheduled.",
      parentLinkText: "See our full tree removal services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Bush and Shrub Removal", name: "Bush & Shrub Removal Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/stump-removal-denver-co": {
    path: "/stump-removal-denver-co",
    parentPath: "/stump-grinding-denver-co",
    parentTitle: "Stump Grinding",
    titleTag: "Stump Removal Denver CO | Fast, Professional Service",
    metaDescription: "Full stump removal in Denver, CO. Root ball excavation for complete elimination. Free estimates, no trip charge. Call (303) 949-6818.",
    h1: "Stump Removal in Denver, CO",
    h1Accent: "Root Ball and All",
    subheadline: "When grinding isn't enough - replanting in the same spot, building nearby, or a species that re-sprouts - we excavate and remove the full root system.",
    openingParagraphs: [
      "Stump grinding takes care of most situations - the stump is gone, the area is level, and you can sod or mulch over it. But sometimes grinding isn't the right answer. If you want to replant a tree in the same spot, the root system needs to be gone. If you're pouring concrete or building a structure nearby, you can't have roots breaking down underneath it. And some species - cottonwoods in particular - send up new shoots from roots even after the stump is ground. For those situations, full stump removal is what's needed.",
      "Arbor Care Tree Solutions performs full stump removal in Denver — excavating the root ball completely so there's nothing left below ground to cause problems later.",
    ],
    sections: [
      {
        heading: "When You Need Stump Removal vs. Grinding",
        paragraphs: [
          "Choose stump removal over grinding when you're replanting a tree in the same location and need clean soil, when construction or hardscaping is planned in the area, when the species is known to re-sprout from roots after grinding (cottonwood, some poplars, certain elms), or when a previous grinding left root material that's causing problems.",
          "If you're not sure which you need, we'll look at the situation and tell you. In many cases grinding is enough, and we'll say so. We don't recommend removal when grinding will do the job.",
        ],
      },
      {
        heading: "Our Stump Removal Process",
        paragraphs: [
          "We excavate around the stump to expose the root ball, then extract the entire root mass. The hole is backfilled with clean soil and leveled so the area is ready for replanting, sod, or whatever you have planned.",
          "For larger root systems, we use the right equipment to get the job done without tearing up more of the yard than necessary. All debris — stump, roots, and soil — is hauled away and the site is left clean.",
        ],
      },
      {
        heading: "Stump Removal Cost in Denver",
        paragraphs: [
          "Stump removal costs more than grinding because of the additional excavation and haul-away involved. Cost depends on the stump size and root system extent. We provide free on-site estimates with no trip charge so you know exactly what you're paying for before we start.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with 100+ five-star Google reviews, ISA-certified arborists, and full licensing and insurance in Colorado. Free estimates, no trip charge, we answer immediately 24/7.",
        ],
      },
    ],
    finalCta: {
      headline: "Need the Whole Stump Gone?",
      body: "Call us for a free estimate. We'll tell you if removal is the right call or if grinding will handle it.",
      parentLinkText: "See our full stump grinding services in Denver.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Stump Removal", name: "Stump Removal Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/brush-chipping-denver-co": {
    path: "/brush-chipping-denver-co",
    parentPath: "/",
    parentTitle: "Home",
    titleTag: "Brush Chipping Denver CO | Fast, Professional Service",
    metaDescription: "Brush chipping in Denver, CO. On-site chipping of branches and brush into mulch. Fast cleanup, free estimates. Call (303) 949-6818.",
    h1: "Brush Chipping in Denver, CO",
    h1Accent: "Fast Cleanup, Usable Mulch",
    subheadline: "Large piles of branches and brush don't have to sit in your yard for weeks. We chip them on-site into mulch you can use or we haul away.",
    openingParagraphs: [
      "After a storm, a pruning job, or a property cleanup, you're left with piles of branches and brush that don't fit in a yard waste bin. Dragging it to the curb piece by piece isn't practical, and hauling full branches to a dump costs time and truck space. On-site chipping turns all of it into mulch in a fraction of the time — and the mulch can go right back into your landscape beds.",
      "Arbor Care Tree Solutions provides brush chipping in Denver for homeowners dealing with large volumes of branches and brush debris. We bring the chipper to you, process everything on-site, and leave the area clean.",
    ],
    sections: [
      {
        heading: "When You Need Brush Chipping",
        paragraphs: [
          "Brush chipping makes sense after storm cleanup, after a tree trimming or removal job where you have debris to deal with, during a landscape renovation where old growth is coming out, or any time you have more branches than your yard waste service can handle.",
          "In Denver, late spring storms and fall cleanup both produce large volumes of brush. Having it chipped on-site is faster and often cheaper than multiple trips to a disposal facility.",
        ],
      },
      {
        heading: "Our Brush Chipping Process",
        paragraphs: [
          "We bring a commercial chipper to your property and process all branches and brush into wood chips. The chips can be spread in your landscape beds as mulch, left in a pile for you to use, or hauled away — your choice.",
          "We handle branches up to a reasonable diameter (larger material may need to be cut down first). The work area is raked clean before we leave.",
        ],
      },
      {
        heading: "Brush Chipping Cost in Denver",
        paragraphs: [
          "Cost depends on the volume of material to be chipped. We provide free on-site estimates with no trip charge. If brush chipping is added to a tree trimming or removal job, it's often included or discounted.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with 100+ five-star Google reviews serving Denver and the surrounding metro. We have the right equipment for the job. Free estimates, we answer immediately 24/7. Licensed and insured in Colorado.",
        ],
      },
    ],
    finalCta: {
      headline: "Got a Pile of Brush That Needs to Go?",
      body: "Call us for a free estimate. We'll chip it on-site and leave your yard clean.",
      parentLinkText: "Visit our Denver tree service homepage.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Brush Chipping", name: "Brush Chipping Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },

  "/land-clearing-denver-co": {
    path: "/land-clearing-denver-co",
    parentPath: "/",
    parentTitle: "Home",
    titleTag: "Land Clearing Denver CO | Fast, Professional Service",
    metaDescription: "Land clearing in Denver, CO. Trees, brush & stumps cleared for construction, landscaping, or fire mitigation. Free estimates. Call (303) 949-6818.",
    h1: "Land Clearing in Denver, CO",
    h1Accent: "Cleared and Ready for What's Next",
    subheadline: "Whether you're building, landscaping, or creating defensible space, we clear trees, brush, and stumps so the site is ready to use.",
    openingParagraphs: [
      "You've got a property or a section of land that needs to be cleared — maybe for a new structure, a landscape renovation, or fire mitigation near the wildland-urban interface. Clearing land with trees and brush isn't a weekend DIY project. It takes the right equipment, proper disposal, and in many cases permits and knowledge of local regulations around tree removal.",
      "Arbor Care Tree Solutions provides land clearing in Denver for residential and small commercial properties. We handle the trees, brush, stumps, and debris so the site is clean and ready for whatever comes next.",
    ],
    sections: [
      {
        heading: "When You Need Land Clearing",
        paragraphs: [
          "Land clearing is needed before new construction, for lot preparation, during major landscape redesigns, for fire mitigation and defensible space creation, or when overgrown areas have become unmanageable.",
          "In Denver and the surrounding Front Range, fire mitigation clearing is increasingly common — especially for properties near open space or the wildland-urban interface. We can help create the defensible space required by local fire codes.",
        ],
      },
      {
        heading: "Our Land Clearing Process",
        paragraphs: [
          "We assess the site, identify what needs to come out, and plan the most efficient approach. Trees are removed or trimmed as needed, brush is chipped or hauled, and stumps are ground below grade. We work around anything you want to keep — specific trees, structures, or landscaping.",
          "For sites that require grading or soil work after clearing, we can coordinate with your contractor. All debris is removed and the site is left clean and accessible.",
        ],
      },
      {
        heading: "Land Clearing Cost in Denver",
        paragraphs: [
          "Cost depends on the size of the area, the density of trees and brush, and whether stump grinding is included. We provide free on-site estimates with no trip charge. Large clearing projects are quoted as a complete job so you have one price for everything.",
        ],
      },
      {
        heading: "Why Choose Us",
        paragraphs: [
          "Arbor Care Tree Solutions is a family-owned company with 100+ five-star Google reviews, ISA-certified arborists, and the equipment to handle clearing projects of all sizes. Free estimates, we answer immediately 24/7. Fully licensed and insured in Colorado.",
        ],
      },
    ],
    finalCta: {
      headline: "Need a Site Cleared?",
      body: "Call us for a free estimate. We'll look at the property, tell you what's involved, and give you a firm price.",
      parentLinkText: "Visit our Denver tree service homepage.",
    },
    schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "Land Clearing", name: "Land Clearing Denver CO", provider: { "@type": "LocalBusiness", name: "Arbor Care Tree Solutions", telephone: "(303) 949-6818", address: { "@type": "PostalAddress", streetAddress: "1130 S Santa Fe Dr", addressLocality: "Denver", addressRegion: "CO", postalCode: "80223" } }, areaServed: { "@type": "City", name: "Denver" } },
  },
};
