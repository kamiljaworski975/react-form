import React, { Component, useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export const UserForm = () => {

    const [formState, setFormState] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    });

    // const values = {firstName, lastName, email, occupation, city, bio};

    // Proceed to the next step
    const nextStep = () => {
        const {step} = formState;
        setFormState({
            ...formState,
            step: step + 1
        });
    };

    // Proceed to the prev step
    const prevStep = () => {
        const {step} = formState;
        setFormState({
            ...formState,
            step: step - 1
        });
    };

    // Handle fields change
    const handleChange = input => e => {
        setFormState({
            ...formState,
            [input]: e.target.value
        });
    };


    // const { step } = this.state;
    // const { firstName, lastName, email, occupation, city, bio } = this.state;

    switch (formState.step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formState}
                />
            );
        case 2:
            return (
                <FormPersonalDetails
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formState}
                />
            );
        case 3:
            return (
                <Confirm
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={formState}
                />
            );
        case 4:
            return <Success/>;

    }
};

export default UserForm;


