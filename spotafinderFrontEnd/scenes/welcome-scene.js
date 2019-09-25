import React from 'react';
import Onboarding from 'react-native-onboarding-screen';

export default class App 
extends React.Component {
    render() {
        const Pages = [
                {
                    title: 'Welcome',
                    subtitle: 'to the Oxford Union app. Here you can browse the term card and engage with the Union, all in one place.'
                },
                {
                    title: 'Get Engaged',
                    subtitle: 'The Oxford Union app integrates closely with Facebook. Don\'t worry, we won\'t post anything to your profile.',
                    action: {
                        title: "Login to Facebook",
                        onPress: this.showFacebookLogin
                    }
                },
                {
                    title: "Great",
                    subtitle: "That's all for now. As you use the app, we'll learn about the events you like and use this to personalize your experience.",
                    action: {
                        title: "Let's Get Started",
                        onPress: this.finishOnboarding
                    }
                }
        ];
        return (
            <Onboarding
                backgroundImage={require('./images/icon.png')}
                pages={Pages}
            />
        );
    }
}