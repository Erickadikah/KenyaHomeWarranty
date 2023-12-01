//this is a dummy service object
const serviceObject = [
    {
        title : "plumbing",
        id: 1,
        description: `Welcome to Kenya Home Warranty, your trusted partner for all your plumbing needs. Our "Plumbing Systems & Accessories" service is designed to provide you with comprehensive coverage and support for your home's plumbing systems, ensuring peace of mind and protection from unexpected repair costs.`,
        coverage : {
            covered : ["Water Heaters", "Interior Plumbing Lines", "Toilets", "Faucets & Valves", "Whirpool Tub Motor & Components"],
        },
        serviceStats : {
            totalClients : 1000,
            satisfiedClients: 95,
            repeatClients: 80,
        }
    },

    {
        title : "heating",
        id: 2,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel earum blanditiis repudiandae in consectetur reprehenderit repellendus soluta repellat excepturi atque odit quo dicta, amet magnam sed accusamus molestiae voluptatum eius?
            Vero totam porro deleniti aliquam repellat maiores, perspiciatis, reiciendis error est ipsa fuga officia tempora officiis ullam voluptates quod labore. Perferendis totam sunt doloremque necessitatibus vero molestiae ad, incidunt sapiente!
            Dignissimos incidunt excepturi quo consectetur repellat iure quod ipsam eum sint praesentium aperiam ex beatae non, optio soluta fuga numquam eligendi neque odit voluptas! Repudiandae iusto dolores dolorem reiciendis soluta!
            Tempore aperiam ducimus minus assumenda, eveniet voluptates natus repellendus sed. Ipsam ea voluptatum harum iure dolores quisquam maiores dolore mollitia ipsum modi at iste, veniam obcaecati, hic nisi aperiam quidem?
            Officiis eos assumenda velit dolores! Debitis quae quam aliquid sequi tenetur eos nesciunt, reiciendis vitae animi beatae nam unde! Doloremque distinctio molestiae veritatis quidem similique saepe inventore tempore quod. Pariatur.`,
        coverage : {
            covered : ["Spoilage", "Damage"],
            unCovered: ["Beyond repair", "Uncovered Damages"]
        },
        serviceStats : {
            totalClients : 1000,
            satisfiedClients: 95,
            repeatClients: 80,
        }
    },
    {
        title : "electronics",
        id: 3,
        description: `At KHW, we understand that the electrical system and appliances in your home are essential for your daily comfort and convenience. However, electrical issues and appliance breakdowns can occur unexpectedly, leading to costly repairs or replacements. That's where our Electrical System and Appliances Coverage comes in to protect you from these unexpected expenses.`,
        coverage : {
            covered : [
                "Refrigerator",
                "Oven and Range",
                "Dishwasher",
                "Microwave",
                "Washing Machine",
                "Dryer",
                "Garbage Disposal",
                "Trash Compactor",
                "Electrical panels and circuit breakers",
                "Wiring throughout the house",
                "Wall switches and outlets",
                "Junction boxes",
                "Grounding systems"
            ],
        },
        serviceStats : {
            totalClients : 1000,
            satisfiedClients: 95,
            repeatClients: 80,
        }
    },
    {
        title : "kitchen",
        id: 4,
        description: `Welcome to our Home Warranty's comprehensive Kitchen Appliances coverage plan! We understand that the kitchen is the heart of every home, and its smooth functioning is crucial for your daily routines. Our Kitchen Appliances service offers you the peace of mind you deserve by protecting your essential kitchen appliances from unexpected breakdowns and malfunctions.`,
        coverage : {
            covered : ["Spoilage", "Damage"],
            unCovered: ["Beyond repair", "Uncovered Damages"]
        },
        serviceStats : {
            totalClients : 1000,
            satisfiedClients: 95,
            repeatClients: 80,
        }
    },
    {
        title : "laundry",
        id: 5,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel earum blanditiis repudiandae in consectetur reprehenderit repellendus soluta repellat excepturi atque odit quo dicta, amet magnam sed accusamus molestiae voluptatum eius?
            Vero totam porro deleniti aliquam repellat maiores, perspiciatis, reiciendis error est ipsa fuga officia tempora officiis ullam voluptates quod labore. Perferendis totam sunt doloremque necessitatibus vero molestiae ad, incidunt sapiente!
            Dignissimos incidunt excepturi quo consectetur repellat iure quod ipsam eum sint praesentium aperiam ex beatae non, optio soluta fuga numquam eligendi neque odit voluptas! Repudiandae iusto dolores dolorem reiciendis soluta!
            Tempore aperiam ducimus minus assumenda, eveniet voluptates natus repellendus sed. Ipsam ea voluptatum harum iure dolores quisquam maiores dolore mollitia ipsum modi at iste, veniam obcaecati, hic nisi aperiam quidem?
            Officiis eos assumenda velit dolores! Debitis quae quam aliquid sequi tenetur eos nesciunt, reiciendis vitae animi beatae nam unde! Doloremque distinctio molestiae veritatis quidem similique saepe inventore tempore quod. Pariatur.`,
        coverage : {
            covered : ["Spoilage", "Damage"],
            unCovered: ["Beyond repair", "Uncovered Damages"]
        },
        serviceStats : {
            totalClients : 1000,
            satisfiedClients: 95,
            repeatClients: 80,
        }
    },
    {
        title : "roof",
        id: 6,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel earum blanditiis repudiandae in consectetur reprehenderit repellendus soluta repellat excepturi atque odit quo dicta, amet magnam sed accusamus molestiae voluptatum eius?
            Vero totam porro deleniti aliquam repellat maiores, perspiciatis, reiciendis error est ipsa fuga officia tempora officiis ullam voluptates quod labore. Perferendis totam sunt doloremque necessitatibus vero molestiae ad, incidunt sapiente!
            Dignissimos incidunt excepturi quo consectetur repellat iure quod ipsam eum sint praesentium aperiam ex beatae non, optio soluta fuga numquam eligendi neque odit voluptas! Repudiandae iusto dolores dolorem reiciendis soluta!
            Tempore aperiam ducimus minus assumenda, eveniet voluptates natus repellendus sed. Ipsam ea voluptatum harum iure dolores quisquam maiores dolore mollitia ipsum modi at iste, veniam obcaecati, hic nisi aperiam quidem?
            Officiis eos assumenda velit dolores! Debitis quae quam aliquid sequi tenetur eos nesciunt, reiciendis vitae animi beatae nam unde! Doloremque distinctio molestiae veritatis quidem similique saepe inventore tempore quod. Pariatur.`,
        coverage : {
            covered : ["Spoilage", "Damage"],
            unCovered: ["Beyond repair", "Uncovered Damages"]
        },
        serviceStats : {
            totalClients : 1000,
            satisfiedClients: 95,
            repeatClients: 80,
        }
    },
]

module.exports = serviceObject;
