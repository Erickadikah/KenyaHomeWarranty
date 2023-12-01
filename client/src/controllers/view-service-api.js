//make a get reqquest depending on the service link clicked "Read More.."
//service image - placeholder
import serviceLogo from "../assets/images/landingPage/hero_images/realEstate.jpg";

//this is a dummy service object
const serviceObject = [
    {
        title : "plumbing",
        serviceImage : serviceLogo,
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
    }
]

export default serviceObject;