import React, { Fragment } from 'react'
import benefits from '../benefits/benefits.json'
import CardBenefits from './CardBenefits'

const ContainerCards = () => {
	return (
<Fragment>
<h1>BENEFICIOS CORPORATIVOS</h1>
{benefits.map(((item, index) => {
	return <CardBenefits
	 title={item.title}
	 description={item.description}
	 image={item.image}
	 text={item.text}
	 secondaryText={item.secondaryText}
	 />
}))}
</Fragment>
	)
}
export default ContainerCards
