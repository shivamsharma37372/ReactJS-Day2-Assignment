// import Navlink from './Navlink';
import Service from './Service';

function Header()
{
    const services = [
        {
            title: "Air Pollution",
            subtitle:"Pollution is the introduction of harmful materials into the environment.",
            desc: "Air pollution is the presence of substances in the atmosphere that are harmful to the health of humans and other living beings, or cause damage to the climate or to materials. There are many different types of air pollutants, such as gases, particulates, and biological molecules.",
            image:"https://s3.amazonaws.com/prod.tctmd.com/public/styles/header_image/public/2021-02/Large%20US%20Study%20Links%20Air%20Pollution%20to%20Heart%2C%20Lung%20Diseases.jpeg?itok=izUnTyv0"
        },
        {
            title: "Water Pollution",
            subtitle:"Pollution is the introduction of harmful materials into the environment.",
            desc: "Water pollution happens when toxic substances enter water bodies such as lakes, rivers, oceans and so on, getting dissolved in them, lying suspended in the water or depositing on the bed.",
            image: "https://assets.nrdc.org/sites/default/files/styles/3up_promo/public/ap_1112080575591200.jpg?itok=pHOuW8VS"
        },
        {
            title: "Sound Pollution",
            subtitle:"Pollution is the introduction of harmful materials into the environment.",
            desc: "Noise pollution, also known as environmental noise or sound pollution, is the propagation of noise with ranging impacts on the activity of human or animal life, most of them harmful to a degree. ... Today",
            image: "https://www.conserve-energy-future.com/wp-content/uploads/2017/03/noise-pollution-traffic-sound.jpg"
        },
        {
            title: "radioactive pollution",
            subtitle:"Pollution is the introduction of harmful materials into the environment.",
            desc: "The radioactive pollution is defined as the physical pollution of living organisms and their environment as a result of release of radioactive substances into the environment during nuclear explosions and testing of nuclear weapon.",
            image: "https://www.conserve-energy-future.com/wp-content/uploads/2018/10/nuclear-power-plant-cooling-tower.jpg"
        },
        {
            title: "Soil Pollution",
            subtitle:"Pollution is the introduction of harmful materials into the environment.",
            desc: "Soil pollution is defined as the presence of toxic chemicals (pollutants or contaminants) in soil, in high enough concentrations to pose a risk to human health and/or the ecosystem.",
            image: "https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/contaminacion_suelo_key_res/suelo_379x214.jpg"
        }



    ]
    // const navData = ["Home","About","Contact","Feedback"]
    return(
        <div className="container">
            {
                services.map((service,index)=> (
                    <Service title={service.title} subtitle={service.subtitle} desc={service.desc} image={service.image}/>
                ))
            }
           

    
        </div>
    )
};

export default Header;