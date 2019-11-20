import { Dimensions } from 'react-native';

//Get the phone size
export const Window_Width  = Dimensions.get('window').width;
export const Window_Height = Dimensions.get('window').height;

//Get the images
//export const Icon = require('./images/icon.png');

//This format to check whether user put the correct information
export const emailFormat = new RegExp(/^[a-zA-Z]\w+@mail\.fresnostate\.edu$/);
export const passwordFormat = new RegExp(/\w+/);
export const nameFormat = new RegExp(/^[a-zA-Z]+$/);