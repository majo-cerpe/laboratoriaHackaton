export default function CarouselGrowth() {
const allGrowth = [
    {
        name: 'Academia',
        description: '',
        link:"https://stefanini.konviva.com.br/lms/#/home",
        image:"",
    },

    {
        name: 'Acsendo',
        description: '',
        link:"https://hr.acsendo.com/results/admin ",
        image:"",
    },
    
    {
        name: 'Mentoring',
        description: '',
        link:"https://mentoring.stefanini.io/#/login",
        image:"",
    },


];

return (
    <Carousel>
            {allBenefits.map((benefit, i) => (
                <ArrayBenefit key={i} {...benefit} />
            ))}
        </Carousel>
);
}

const ArrayBenefit = ({name, description}) => {
    return (
        <React.Fragment>
            <h3>{name}</h3>
            <p>{description}</p>
            <Button variant="contained" color="primary" size ="small">ver más</Button>
            
        </React.Fragment>
    );
};
