import React from 'react'
import UserAdmin from './UserAdmin';
import BenefitAdmin from './BenefitAdmin';
import PartnershipAdmin from './PartnershipAdmin';

const Main = () => {
    let kk = '';
    switch (window.location.href) {
        case '/userAdmin':
            kk = "<UserAdmin />"
            break;
        case '/benefitsAdmin':
            kk = "<BenefitAdmin />"
            break;
    }
    return (
        kk
    )
}

export default Main;

/* const Main = () => {
    switch (window.location.href) {
        case '/userAdmin':
            return(
            <UserAdmin />
            )
        case '/benefitsAdmin':
            return(<BenefitAdmin />)
        case '/partnershipAdmin':
            return(
            <PartnershipAdmin />)
        default:
        // code block
    }

    if (window.location.href == '/userAdmin') {
        return (
            <UserAdmin />
        )
    } else if (window.location.href == 'benefitAdmin')
        return (
            <BenefitAdmin />
        )
} */



/*
switch (window.location.href) {
    case '/userAdmin':
        return(
        <UserAdmin />
        )
    case '/benefitsAdmin':
        return(<BenefitAdmin />)
    case '/partnershipAdmin':
        return(
        <PartnershipAdmin />)
    default:
    // code block
} */